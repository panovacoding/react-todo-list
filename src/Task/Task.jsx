import './Task.css'

const Task = ({task, toggleComplete, deleteTodo, editTodo}) => {

    return (
        <div className="task">
            <div onClick={() => toggleComplete(task.id)} className={`task__title ${task.completed ? 'completed' : ''}`}>{task.task}</div>
            <div className="task__controls">
                <button onClick={() => editTodo(task.id)}>✎</button>
                <button onClick={() => deleteTodo(task.id)}>✖</button>
            </div>
        </div>
    )
}

export default Task;