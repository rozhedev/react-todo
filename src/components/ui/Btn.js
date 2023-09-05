import styles from "./Btn.module.css";

const Btn = ({ isBig, isDelete, todo, disabled, onClickHandler, children, ...props }) => {
    return (
        <button
            className={`
                ${isBig ? styles.btnBig : styles.btn}
                ${disabled && styles.btnDisabled}
                `}
            onClick={onClickHandler}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
export default Btn;
