import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const TitleElement = (props) => {
    const {value, elemRef} = props;


    return (
        <TextInputElement
            value={value}
            elemRef={elemRef}
            label="Title"
            type={"text"}
            isRequired={true}
            autofocus={true}
        />
    );
};

export default TitleElement;