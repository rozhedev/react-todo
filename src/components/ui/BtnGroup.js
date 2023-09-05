import Btn from "./Btn";
import styles from "./BtnGroup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BtnGroup = ({ todoData, disabled, delCompleteTodos, delAllTodos, ...props }) => {
    return (
        <div className={styles.btnGroup}>
            {todoData.length > 0 && (
                <>
                    <Btn
                        type="button"
                        isBig={true}
                        isDelete={false}
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
                        isDelete={false}
                        id="delete-completed-btn"
                        title="clear completed task"
                        disabled={disabled}
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
