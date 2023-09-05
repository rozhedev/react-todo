import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData, completedTodos, toggleBtnState, completeItem, deleteItem, props }) => {
    const startText = "Nothing added";
    const completedEndWord = "todos";

    return (
        <div className={styles.todoList}>
            {todoData.length > 0 ? (
                todoData.map((item) => (
                    <TodoItem
                        key={item.id}
                        todo={item}
                        isCompleted={item.isCompleted}
                        toggleBtnState={toggleBtnState}
                        deleteItem={deleteItem}
                        completeItem={completeItem}
                    ></TodoItem>
                ))
            ) : (
                <h2 className={styles.TodoListStatusText}>{startText}</h2>
            )}

            {completedTodos.length > 0 && (
                <h2 className={styles.TodoListStatusText}>
                    You have completed {completedTodos.length} {completedTodos.length > 1 ? completedEndWord : "todo"}
                </h2>
            )}
        </div>
    );
};

export default TodoList;
