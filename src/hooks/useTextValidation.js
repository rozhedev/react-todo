import { useState } from "react";

const useTextValidation = (initialValue, maxLength) => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(true);
    const [errMessage, setErrorMessage] = useState("");

    const ERR_CONTENT = {
        empty: "Поле не может быть пустым",
        specChar: "Поле не должно содержать специальные символы",
        get maxLength() {
            return `Поле должно содержать не более ${maxLength} символов`;
        },
    };
    const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|/]/;

    const handleTextChange = (value) => {
        let newErrMessage = "";

        if (value.trim() === "") {
            newErrMessage = ERR_CONTENT.empty;
        } else if (value.length > maxLength) {
            newErrMessage = ERR_CONTENT.maxLength;
        } else if (specialCharacters.test(value)) {
            newErrMessage = ERR_CONTENT.specChar;
        }

        setIsValid(newErrMessage === "");
        setErrorMessage(newErrMessage);
        setValue(value);
    };
    return {
        value,
        isValid,
        setIsValid,
        errMessage,
        handleTextChange,
    };
};

export default useTextValidation;
