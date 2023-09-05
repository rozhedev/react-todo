import { useState } from "react";
import styles from "./Inp.module.css";

const Input = ({ type, id, placeholder, ...props }) => {
    const [todoValue, setTodoValue] = useState("");
    return (
        <input
            type={type}
            className={styles.inp}
            name={id}
            id={id}
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default Input;
