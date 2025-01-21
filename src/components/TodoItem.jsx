import { useContext, useState } from "react";
import "./TodoItem.css"
import { TodoContext } from "../context/index";
import { DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../reducer";

function TodoItem({id, text, completed }) {
    const { dispatch } = useContext(TodoContext);
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit((prev) => !prev);
    }
    const handleChange = e => {
        dispatch({type: UPDATE_TODO, payload: {id, text: e.target.value}})
    }
    const handleToggle = () => {
        dispatch({type: TOGGLE_TODO, payload: id})
    }
    const handleDelete = () => {
        dispatch({type: DELETE_TODO, payload: id})
    }
    return (
    <div className="todo-item">
        <input
            type="checkbox" 
            className="todo-item-checkbox" 
            checked={completed}
            onChange={handleToggle}
            />
        {edit 
            ? <input className="todo-edit-input" value={text} onChange={handleChange}/> 
            : <p className={["todo-item-text", completed && "completed"].join(" ")}>{text}</p>}
        <button 
            className="todo-item-button"
            onClick={handleEdit}>
                Edit
        </button>
        <button className="todo-item-button" onClick={handleDelete}>Delete</button>
    </div>
    );
}

export default TodoItem;