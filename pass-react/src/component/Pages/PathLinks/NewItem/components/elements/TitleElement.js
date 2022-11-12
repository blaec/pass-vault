import React, {useEffect} from 'react';

import TextInputElement from "./templates/TextInputElement";
import useInput from "../../../../../../hooks/use-input";
import {isStringExist} from "../../../../../../utils/Utils";

const validateValue = (text) => isStringExist(text);


const TitleElement = (props) => {
    const {value, elemRef, onValid} = props;

    const {
        value: title,
        handleFieldTouch,
        handleTextFieldChange,
        isValid,
        hasError
    } = useInput(value, elemRef, validateValue);

    useEffect(() => {
        onValid(isValid);
    }, [isValid]);


    return (
        <TextInputElement
            hasError={hasError}
            value={title}
            elemRef={elemRef}
            label="Title"
            type={"text"}
            isRequired={true}
            autofocus={true}
            onChangeTextField={handleTextFieldChange}
            onInputTouch={handleFieldTouch}
        />
    );
};

export default TitleElement;