import { useContext, useState } from "react";
import styles from "./TodoItem.module.css"
import { TodoContext } from "../context/index";
import { DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../reducer";
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo, updateTodo } from "../store/todoSlice";

function TodoItem({id, text, completed }) {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(text);
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        if (edit) {
            dispatch(updateTodo({id, text: newText}))
        }
        setEdit((prev) => !prev);
    }
    const handleChange = e => {
        setNewText(e.target.value)
    }
    const handleToggle = () => {
        dispatch(toggleTodo({id, completed: !completed}))
    }
    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }
    return (
    <div className={styles["todo-item"]}>
        <input
            type="checkbox" 
            className={styles["todo-item-checkbox"]}
            checked={completed}
            onChange={handleToggle}
            />
        {edit 
            ? <input className={styles["todo-edit-input"]} value={newText} onChange={handleChange}/> 
            : <p className={[styles["todo-item-text"], completed && styles["completed"]].join(" ")}>{text}</p>}
        <button 
            className={styles["todo-item-button"]}
            onClick={handleEdit}>
                Edit
        </button>
        <button className={styles["todo-item-button"]} onClick={handleDelete}>Delete</button>
    </div>
    );
}

export default TodoItem;