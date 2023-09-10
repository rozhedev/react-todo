import styles from "./Btn.module.css";

const Btn = ({ isBig, disabled = false, children, ...props }) => {
    return (
        <button
            className={`
                ${isBig ? styles.btnBig : styles.btn}
                ${disabled && styles.btnDisabled}
                `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
export default Btn;
