import Btn from "./Btn";
import styles from "./BtnGroup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BtnGroup = ({ todoData, isCompletedTodos, delCompleteTodos, delAllTodos, ...props }) => {
    return (
        <div className={styles.btnGroup}>
            {todoData.length > 0 && (
                <>
                    <Btn
                        type="button"
                        isBig={true}
                        id="delete-all-btn"
                        title="clear all task"
                        onClick={(e) => delAllTodos()}
                    >
                        <FontAwesomeIcon
                            icon={faSync}
                            className={styles.todoItemIcon}
                        />
                    </Btn>
                    <Btn
                        type="button"
                        isBig={true}
                        id="delete-completed-btn"
                        title="clear completed task"
                        disabled={!isCompletedTodos}
                        onClick={(e) => delCompleteTodos()}
                    >
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className={styles.todoItemIcon}
                        />
                    </Btn>
                </>
            )}
        </div>
    );
};
export default BtnGroup;
