import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

const TaskListWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const newTodoItem = {id: crypto.randomUUID(), task: todo, completed: false, isEditing: false};
        setTodos([...todos, newTodoItem]);
    }

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <>        
            <h1>TO-DO LIST</h1>
            <TaskForm addTodo={addTodo} />
            <TaskList tasks={todos} isEmpty={!todos.length} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask}/>
        </>
    )
}

export default TaskListWrapper;