import React, {useEffect} from 'react';


const useInput = (value, inputRef, validateValue) => {
    const [enteredValue, setEnteredValue] = React.useState(value);
    const [isTouched, setIsTouched] = React.useState(false);

    const isValid = validateValue(enteredValue);
    const hasError = !isValid && isTouched;

    const handleTextFieldChange = (text) => {
        setEnteredValue(text);
    };
    const handleFieldTouch = () => {
        setIsTouched(true);
    };

    const {current: {value: inputValue} = {value: value}} = inputRef;
    useEffect(() => {
        if (inputValue === '') {
            setEnteredValue('');
        }
    }, [inputValue]);


    return {
        value: enteredValue,
        handleTextFieldChange,
        handleFieldTouch,
        isValid,
        hasError
    };
};

export default useInput;