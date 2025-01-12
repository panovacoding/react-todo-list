import { useState } from 'react';
import './EditTask.css'

const EditTask = ({task, editTask}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!value) return;
        
        editTask(value, task.id);
        setValue('')
    }

    return (
        <form className="edit-task" onSubmit={handleSubmit}>
            <input 
                className='edit-task__input' 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />
            <button>Сохранить</button>
        </form>
    )
}

export default EditTask;