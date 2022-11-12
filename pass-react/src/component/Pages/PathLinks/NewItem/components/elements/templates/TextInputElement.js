import React from 'react';

import TextField from "@mui/material/TextField";


const TextInputElement = (props) => {
    const {style, value, elemRef, limit, autofocus, label, type, isRequired, multiline} = props;
    const maxLength = limit ? limit : 100;

    return (
        <TextField
            sx={style}
            defaultValue={value}
            inputRef={elemRef}
            autoFocus={autofocus}
            label={label}
            type={type}
            required={isRequired}
            fullWidth
            variant="filled"
            multiline={multiline}
            rows={4}
            inputProps={{ maxLength: maxLength }}
        />
    );
};

export default TextInputElement;