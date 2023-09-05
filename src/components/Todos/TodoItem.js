import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faCheck, faTrashAlt, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoItem.module.css";
import Btn from "../ui/Btn";

const TodoItem = ({ todo, completeItem, isCompleted, deleteItem, props }) => {
    return (
        <div className={`${styles.todoItem} ${todo.isCompleted && styles.todoItemComplete}`}>
            <div className={styles.todoItemContent}>
                <FontAwesomeIcon
                    icon={faNoteSticky}
                    className={styles.todoItemIcon}
                />
                <span>{todo.text}</span>
            </div>
            <div className={styles.todoItemBtnGroup}>
                <Btn
                    type="button"
                    isBig={false}
                    isDelete={true}
                    isCompleted={false}
                    id="delete-btn"
                    title="delete-btn"
                    todo={todo}
                    deleteItem={deleteItem}
                >
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className={styles.todoItemIcon}
                    />
                </Btn>
                <Btn
                    type="button"
                    isBig={false}
                    isDelete={false}
                    isCompleted={true}
                    id="complete-btn"
                    title="complete-btn"
                    todo={todo}
                    completeItem={completeItem}
                >
                    <FontAwesomeIcon
                        icon={isCompleted ? faTrashCanArrowUp : faCheck}
                        className={styles.todoItemIcon}
                    />
                </Btn>
            </div>
        </div>
    );
};

export default TodoItem;
