import { useState } from "react";
import styles from "./Controls.module.css"
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, setFilter } from "../store/todoSlice";

function Controls() {
    const state = useSelector(state => state.todo);
    const dispatch = useDispatch();
    
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        dispatch(addTodo(text))
        setText("");
    }
    const handleChangeFilterType = (e) => {
        dispatch(setFilter(e.target.value))
    }
    return (
        <Control>
            <input 
                type="text" 
                className={styles.input}
                value={text}
                onChange={handleChange}
            />
            <button className={styles.button} onClick={handleSubmit}>Add</button>
            <select 
                className={styles.select}
                value={state.filterType} 
                onChange={handleChangeFilterType}>
                <option value="TOTAL">Total</option>
                <option value="TODO">To-do</option>
                <option value="COMPLETED">Completed</option>
            </select>
        </Control>
    )
}

const Control = styled.div`
    display: flex;
    gap: 6px;
    height: 30px;
`;
const Input = styled.input``;
const Button = styled.button``;
const Select = styled.select``;

export default Controls;