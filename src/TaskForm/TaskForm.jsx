import { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!value) return;
        
        addTodo(value);
        setValue('')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" value={value} className='task-form__input' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit'>Добавить задачу</button>
        </form>
    )
}

export default TaskForm;