import Btn from "../ui/Btn";
import Inp from "../ui/Inp";
import styles from "../Todos/TodoForm.module.css";
import { useState } from "react";

const TodoForm = ({ addTodoData, ...props }) => {
    const [formData, setFormData] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();

        // * addTodoData is addFormaddTodoData(content) - prop drillng
        addTodoData(formData);
        setFormData("");
    };

    return (
        <form
            method="get"
            className={styles.todoForm}
            onSubmit={onSubmitHandler}
            {...props}
        >
            <Inp
                type="text"
                name="todoInp"
                id="todoInp"
                value={formData}
                placeholder="Enter task..."
                onChange={(e) => setFormData(e.target.value)}
            />
            <Btn
                type="submit"
                id="btn-submit"
                isBig={true}
                title="btn-submit"
            >
                Submit
            </Btn>
        </form>
    );
};
export default TodoForm;
