import { useContext, useState } from "react";
import styles from "./Controls.module.css"
import { TodoContext } from "../context/index";
import { ADD_TODO, SET_FILTER } from "../reducer";
import styled from "@emotion/styled";

function Controls() {
    const {state, dispatch} = useContext(TodoContext);
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        dispatch({type: ADD_TODO, payload:text})
        setText("");
    }
    const handleChangeFilterType = (e) => {
        dispatch({ type: SET_FILTER, payload: e.target.value })
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