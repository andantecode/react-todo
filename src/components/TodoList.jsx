import "./TodoList.css"
import TodoItem from "./TodoItem";

function TodoList({
    data, 
    onToggle, 
    onToggleAll, 
    onDelete, 
    onDeleteCompleted,
    onUpdate
}) {
    const isAllCompleted = data.length > 0 && data.every(item => item.completed);
    const completedCount = data.filter(item => item.completed).length;
    return (
        <div className="todo-list">
            <div className="todo-header">
                <input 
                    type="checkbox" 
                    className="todo-checkbox" 
                    checked={isAllCompleted}
                    onChange={(e) => onToggleAll(e.target.checked)}
                    />
                <p className="todo-header-text">To do</p>
                {completedCount > 0 && (
                    <button
                        className="todo-header-button"
                        onClick={onDeleteCompleted}>
                        Delete {completedCount}
                    </button>
                )}
            </div>
            <div>
                {data.map((item) => {
                    return <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text} 
                        completed={item.completed}
                        onToggle={() => onToggle(item.id)}
                        onDelete={() => onDelete(item.id)}
                        onUpdate={onUpdate}
                        />
                })}
            </div>
        </div>
    )
}

export default TodoList;