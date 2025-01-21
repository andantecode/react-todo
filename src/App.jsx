import Layout from "./components/Layout";
import Title from "./components/Title";
import Controls from "./components/Controls";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";


function App() {
    const idRef = useRef(1);
    const [filterType, setFilterType] = useState("TOTAL")
    const handleChangeFilterType = (type) => {
        setFilterType(type);
    }
    const [list, setList] = useState([
        {
            id: 1,
            text: "hello",
            completed: false
        }
    ]);
    const handleSubmit = (value) => {
        idRef.current += 1
        setList(prevList => prevList.concat({
            id: (idRef.current),
            text: value,
            completed: false,
        }))
    }
    const handleToggle = (id) => {
        setList(prevList => prevList.map(item => {
            if (item.id === id) {
                return {...item, completed: !item.completed};
            }
            return item;
        }))
    }
    const handleToggleAll = (flag) => {
        setList(prevList => prevList.map(item => ({...item, completed: flag})))
    }
    const handleDelete = (id) => {
        setList((prevList => prevList.filter((item) => item.id !== id)))
    }
    const handleDeleteCompleted = () => {
        setList((prevList => prevList.filter(item => !item.completed)))
    }
    const handleUpdate = (id, text) => {
        setList(prevList => prevList.map(item => {
            if(item.id === id) {
                return {...item, text};
            }
            return item;
        }))
    }
    const filteredList = list.filter(item => {
        if(filterType === "TOTAL") {
            return item
        } else if(filterType === "TODO") {
            return !item.completed;
        } else {
            return item.completed;
        }
    })
    return (
        <div> 
            <Layout>
                <Title />
                <Controls filterType={filterType} onChangeFilterType={handleChangeFilterType} onSubmit={handleSubmit} />
                <TodoList 
                    data={filteredList} 
                    onToggle={handleToggle} 
                    onToggleAll={handleToggleAll}
                    onDelete={handleDelete}
                    onDeleteCompleted={handleDeleteCompleted}
                    onUpdate={handleUpdate}
                    />
            </Layout>
        </div>
    );
}

export default App;
