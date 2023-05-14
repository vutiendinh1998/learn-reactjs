import React, { useEffect, useState, useMemo } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Code',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new'
        }
    ]

    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()
    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilterStatus(params.status || 'all')
    }, [location.search])

    const handleTodoClick = (todo, index) => {
        //clone current array to the new one
        const newTotoList = [...todoList]
        
        //toggle state
        const newTodo = {
            ...newTotoList[index],
            status: newTotoList[index].status === 'new' ? 'completed' : 'new',
        }
        //update todoList
        newTotoList[index] = newTodo

        setTodoList(newTotoList)
    }

    const handleShowAllClick = () => {
        // setFilterStatus('all')
        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowCompletedClick = () => {
        // setFilterStatus('completed')
        const queryParams = { status: 'completed' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNewClick = () => {
        // setFilterStatus('new')
        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const renderTodoList = useMemo(() => {
        todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    }, [todoList, filterStatus])

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values)
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm  onsubmit={handleTodoFormSubmit}/>      

            <h3>Todo List</h3>
            <TodoList onTodoClick={handleTodoClick} todoList={renderTodoList}/>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;