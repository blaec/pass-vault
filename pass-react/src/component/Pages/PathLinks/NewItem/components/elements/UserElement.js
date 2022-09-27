import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const UserElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label={"User"}
            type={"text"}
        />
    );
};

export default UserElement;