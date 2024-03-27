// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoContextProvider from "../../context/TodoContext";
import './Todo.css'

import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import AppName from "./AppName";


const Todo = () => {
    return (
        <TodoContextProvider>
            <center className="todo-container bg-warning">
                <AppName />
                <TodoForm />
                <TodoItems />
            </center>
        </TodoContextProvider>
    );
};

export default Todo;
