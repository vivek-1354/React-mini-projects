import React from "react";
import TodoContext from "../../context/TodoContext";
import './Todo.css'

import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const Todo = () => {
    const [allTodos, setAllTodos] = React.useState([])

    const addTodo = (todo) => {
        setAllTodos([...allTodos, todo])
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const data = allTodos.filter((todo) => todo.toDoName != e.target.id)
        setAllTodos(data)
    }

    return (
        <TodoContext.Provider value={{ allTodos, addTodo, handleDelete }}>
            <center className="todo-container bg-warning">
                <h1>
                    <strong>TODO App</strong>
                </h1>
                <TodoForm />
                <br />
                <div className="container text-center">
                    {allTodos.length > 0 ? <TodoItems /> : <h2><i>Enjoy your day.</i></h2>}
                </div>
            </center>
        </TodoContext.Provider>
    );
};

export default Todo;
