import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const CvvElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label={"cvv"}
            type={"text"}
        />
    );
};

export default CvvElement;