import React, {useEffect} from 'react';

import TextInputElement from "./templates/TextInputElement";
import {isStringExist} from "../../../../../../utils/Utils";
import useInput from "../../../../../../hooks/use-input";

const validateValue = (text) => isStringExist(text);

const UserElement = (props) => {
    const {style, value, elemRef, onValid} = props;

    const {
        value: user,
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
            style={style}
            hasError={hasError}
            value={user}
            elemRef={elemRef}
            label="User"
            type={"text"}
            isRequired={true}
            onChangeTextField={handleTextFieldChange}
            onInputTouch={handleFieldTouch}
        />
    );
};

export default UserElement;