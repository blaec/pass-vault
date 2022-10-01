import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const CardPinElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label={"Card Pin"}
            type={"text"}
        />
    );
};

export default CardPinElement;