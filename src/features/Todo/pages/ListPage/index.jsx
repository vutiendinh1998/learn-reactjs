import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
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
    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState('all')

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
        setFilterStatus('all')
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilterStatus('new')
    }

    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    return (
        <div>
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