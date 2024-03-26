import { useContext } from "react";
import TodoContext from "../../context/TodoContext";


// eslint-disable-next-line react/prop-types
const TodoItem = ({ name, time, onDelete }) => {
    return (
        <div className="row todo-row">
            <div className="col-6 ">{name}</div>
            <div className="col-4 ">{time}</div>
            <div className="col-2 ">
                <button type="button" onClick={onDelete} className="btn btn-danger" id={name}>
                    Delete
                </button>
            </div>
        </div>
    )
}


const TodoItems = () => {
    const { allTodos, handleDelete } = useContext(TodoContext)
    return (
        <>
            {allTodos.map((todo) => <TodoItem key={todo.toDoName} name={todo.toDoName} time={todo.toDoDate} onDelete={handleDelete} />)}
        </>
    );
};

export default TodoItems;
