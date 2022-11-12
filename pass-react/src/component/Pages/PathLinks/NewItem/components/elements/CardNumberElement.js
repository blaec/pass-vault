import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const CardNumberElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label="Card Number"
            type={"text"}
            isRequired={true}
        />
    );
};

export default CardNumberElement;