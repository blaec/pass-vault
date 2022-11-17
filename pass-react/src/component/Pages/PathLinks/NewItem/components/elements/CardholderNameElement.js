import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const CardholderNameElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label="Cardholder Name"
            type={"text"}
        />
    );
};

export default CardholderNameElement;