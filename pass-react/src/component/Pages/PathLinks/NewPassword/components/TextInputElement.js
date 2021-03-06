import React from 'react';

import TextField from "@mui/material/TextField";


const TextInputElement = (props) => {
    const {style, value, elemRef, autofocus, label, type, multiline} = props;

    return (
        <TextField
            sx={style}
            defaultValue={value}
            inputRef={elemRef}
            autoFocus={autofocus}
            label={label}
            type={type}
            fullWidth
            variant="filled"
            multiline={multiline}
            rows={4}
        />
    );
};

export default TextInputElement;