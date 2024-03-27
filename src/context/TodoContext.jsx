import React from 'react'

export const TodoContext = React.createContext({
    allTodos: [],
    addTodo: () => { },
    handleDelete: () => { }
})


const todosItemsReducer = (currTodoItems, action) => {
    let newTodoItems;

    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currTodoItems, action.payload.newItem]

    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodoItems.filter((todo) => todo.toDoName != action.payload.deleteItem)
    }
    return newTodoItems
}


// eslint-disable-next-line react/prop-types
const TodoContextProvider = ({ children }) => {
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
            {children}
        </TodoContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export default TodoContextProvider
