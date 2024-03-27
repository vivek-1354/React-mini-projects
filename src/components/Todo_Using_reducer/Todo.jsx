import React from "react";
import TodoContext from "../../context/TodoContext";
import './Todo.css'

import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";


const todosItemsReducer = (currTodoItems, action) => {
    let newTodoItems;

    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currTodoItems, action.payload.newItem]

    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodoItems.filter((todo) => todo.toDoName != action.payload.deleteItem)
    }
    return newTodoItems
}

const Todo = () => {
    const [allTodos, dispatchAllTodos] = React.useReducer(todosItemsReducer, [{
        toDoName: "go to gym",
        toDoDate: "12:44"
    }])

    const addTodo = (todo) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                newItem: todo
            }
        }
        dispatchAllTodos(newItemAction)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                deleteItem: e.target.id
            }
        }
        dispatchAllTodos(deleteItemAction)
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
