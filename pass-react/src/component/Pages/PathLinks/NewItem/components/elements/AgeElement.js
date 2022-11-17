import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const AgeElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label="Recommended Age"
            type={"text"}
        />
    );
};

export default AgeElement;