import Layout from "./components/Layout";
import Title from "./components/Title";
import Controls from "./components/Controls";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./store/todoSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, [])
    return (
        <TodoProvider>
            <Layout>
                <Title />
                <Controls />
                <TodoList />
            </Layout>
        </TodoProvider> 
    );
}

export default App;
