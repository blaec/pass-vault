import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const WebsiteElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label={"Website"}
            type={"text"}
        />
    );
};

export default WebsiteElement;