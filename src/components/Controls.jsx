import { useState } from "react";
import "./Controls.css"

function Controls({ filterType, onChangeFilterType, onSubmit }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        onSubmit(text)
        setText("");
    }
    return (
        <div className="controls">
            <input 
                type="text" 
                className="input"
                value={text}
                onChange={handleChange}
            />
            <button className="button" onClick={handleSubmit}>Add</button>
            <select className="select" value={filterType} onChange={e => onChangeFilterType(e.target.value)}>
                <option value="TOTAL">Total</option>
                <option value="TODO">To-do</option>
                <option value="COMPLETED">Completed</option>
            </select>
        </div>
    )
}

export default Controls;