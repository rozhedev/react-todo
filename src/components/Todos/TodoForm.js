import { useState } from "react";
import Btn from "../ui/Btn";
import Inp from "../ui/Inp";
import styles from "../Todos/TodoForm.module.css";
import useTextValidation from '../../hooks/useTextValidation';


const TodoForm = ({ addTodoData, ...props }) => {
    const { value, isValid, setIsValid, errMessage, handleTextChange } = useTextValidation("", 20);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // * addTodoData(content) - prop drillng
        isValid && addTodoData(value);
        
        handleTextChange("");
        setIsValid(true);
    };

    return (
        <form
            method="get"
            className={styles.todoForm}
            onSubmit={onSubmitHandler}
            {...props}
        >
            <div className={styles.formController}>
                <Inp
                    type="text"
                    name="todoInp"
                    id="todoInp"
                    value={value}
                    placeholder="Enter task..."
                    onChange={(e) => handleTextChange(e.target.value)}
                />
                {!isValid && <p className={styles.formErrMessage}>{errMessage}</p>}
            </div>
            <Btn
                type="submit"
                id="btn-submit"
                isBig={true}
                title="Submit"
            >
                Submit
            </Btn>
        </form>
    );
};
export default TodoForm;
