import React, {useEffect} from 'react';


const useSelect = (value, validateValue) => {
    const [selectedValue, setSelectedValue] = React.useState(value);
    const [isTouched, setIsTouched] = React.useState(false);

    const isValid = validateValue(selectedValue);
    const hasError = !isValid && isTouched;

    const handleSelectChange = (text) => {
        setSelectedValue(text);
    };
    const handleFieldTouch = () => {
        setIsTouched(true);
    };

    useEffect(() => {
        if (value === '') {
            setSelectedValue('');
        }
    }, [value]);


    return {
        value: selectedValue,
        handleSelectChange,
        handleFieldTouch,
        isValid,
        hasError
    };
};

export default useSelect;