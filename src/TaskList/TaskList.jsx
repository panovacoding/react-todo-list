import EditTask from '../EditTask/EditTask';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = ({
        tasks, 
        isEmpty, 
        toggleComplete, 
        deleteTodo, 
        editTodo, 
        editTask
    }) => {

    return (
        <div className={`task-list ${isEmpty ? 'empty' : ''}`}>
            {
                tasks.map((task) => (
                    task.isEditing ? 
                    (
                        <EditTask 
                            key={task.id} 
                            task={task} 
                            editTask={editTask}/>
                    ) : (
                        <Task 
                            key={task.id} 
                            task={task} 
                            toggleComplete={toggleComplete} 
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                ))
            }
        </div>
    )
};

export default TaskList;