import React, { useContext } from 'react'

import { TodoContext } from '../../context/TodoContext'

const TodoForm = () => {
    const [toDo, settoDo] = React.useState({
        toDoName: "",
        toDoDate: "",
    });

    const { addTodo } = useContext(TodoContext)

    const handleOnchange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value

        settoDo({
            ...toDo,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(toDo)
    }


    return (
        <div className="row">
            <div className="col-6 ">
                <input type="text" onChange={handleOnchange} placeholder="Enter todo here" name="toDoName" />
            </div>
            <div className="col-4 ">
                <input type="time" onChange={handleOnchange} id="" name="toDoDate" />
            </div>
            <div className="col-2 ">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                    Add
                </button>
            </div>
        </div>

    )
}

export default TodoForm
