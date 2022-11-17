import React from 'react';


const useSelect = (value, validateValue) => {
    const [isTouched, setIsTouched] = React.useState(false);

    const isValid = validateValue(value);
    const hasError = !isValid && isTouched;

    const handleFieldTouch = () => {
        setIsTouched(true);
    };


    return {
        handleFieldTouch,
        isValid,
        hasError
    };
};

export default useSelect;