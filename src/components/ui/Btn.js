import styles from "./Btn.module.css";

const Btn = ({ isBig, isDelete, isCompleted, completeItem, todo, onClickHandler, deleteItem, ...props }) => {
    let handler;
    if (isDelete) handler = (e) => deleteItem(todo.id)
    else if (isCompleted) handler = (e) => completeItem(todo.id)
    else handler = onClickHandler

    return (
        <button
            className={isBig ? styles.btnBig : styles.btn}
            onClick={handler}
            {...props}
        >
            {props.children}
        </button>
    );
};
export default Btn;
