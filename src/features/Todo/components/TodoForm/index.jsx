import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';
TodoForm.propTypes = {
    onsubmit : PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
    })
    const handleSubmit = (values) => {
        console.log('Todo form: ', values)
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form ={form}/>
        </form>
    );
}

export default TodoForm;