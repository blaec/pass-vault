import React, {useEffect} from 'react';

import TextInputElement from "./templates/TextInputElement";
import {isStringExist} from "../../../../../../utils/Utils";
import useInput from "../../../../../../hooks/use-input";

const validateValue = (text) => {
    const value = `${text}`;
    return (
        isStringExist(value)
        && Number.isInteger(+text)
        && value.length >= 13
        && value.length <= 16
    );
};


const CardNumberElement = (props) => {
    const {style, value, elemRef, onValid} = props;

    const {
        value: cardNumber,
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
            value={cardNumber}
            elemRef={elemRef}
            label="Card Number"
            type={"text"}
            isRequired={true}
            onChangeTextField={handleTextFieldChange}
            onInputTouch={handleFieldTouch}
        />
    );
};

export default CardNumberElement;