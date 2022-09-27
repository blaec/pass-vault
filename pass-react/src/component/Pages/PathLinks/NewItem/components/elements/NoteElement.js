import React from 'react';

import TextInputElement from "./templates/TextInputElement";


const NoteElement = (props) => {
    const {style, value, elemRef} = props;


    return (
        <TextInputElement
            style={style}
            value={value}
            elemRef={elemRef}
            label={"Note"}
            multiline={true}
        />
    );
};

export default NoteElement;