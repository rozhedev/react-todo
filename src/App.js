import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import Wrapper from "./layout/Wrapper";
import BtnGroup from "./components/ui/BtnGroup";

function App() {
    const [todoData, setTodoData] = useState([]);

    const addTodoDataHandler = (content) => {
        const newTodo = {
            id: uuidv4(),
            text: content,
            isCompleted: false,
        };
        setTodoData([...todoData, newTodo]);
    };

    // * Handlers for todoItem btns
    const deleteItemHandler = (id) => {
        const newList = todoData.filter((todo) => todo.id !== id);
        setTodoData(newList);
    };

    const completeItemHandler = (id) => {
        setTodoData(
            todoData.map((todo) => {
                return todo.id === id
                    ? {
                          ...todo,
                          isCompleted: !todo.isCompleted,
                      }
                    : { ...todo };
            })
        );
    };

    // * Filtration
    const filterTodoState = (bool) => todoData.filter((todo) => todo.isCompleted === bool);

    const completedTodos = filterTodoState(true);
    
    
    // * Handlers for btn group
    const [btnDisabled, setBtnDisabled] = useState(true);

    const delCompleteTodosHandler = () => {
        setTodoData(filterTodoState(false));
        setBtnDisabled(true)
    };
    const delAllTodosHandler = () => setTodoData([]);

    const toggleBtnStateHandler = () => {
        filterTodoState(true).length > 0 ? setBtnDisabled(false) : setBtnDisabled(true)
    }


    return (
        <div className="App">
            <Wrapper>
                <h1 className="title">Todo App</h1>
                <TodoForm addTodoData={addTodoDataHandler}></TodoForm>
                <BtnGroup
                    todoData={todoData}
                    disabled={btnDisabled}
                    delCompleteTodos={delCompleteTodosHandler}
                    delAllTodos={delAllTodosHandler}
                ></BtnGroup>
                <TodoList
                    todoData={todoData}
                    completedTodos={completedTodos}
                    deleteItem={deleteItemHandler}
                    completeItem={completeItemHandler}
                    toggleBtnState={toggleBtnStateHandler}
                ></TodoList>
            </Wrapper>
        </div>
    );
}

export default App;
