import React from 'react';

import TextField from "@mui/material/TextField";


const TextInputElement = (props) => {
    const {
        style,
        value,
        elemRef,
        limit,
        autofocus,
        label,
        type,
        isRequired,
        hasError,
        multiline,
        onChangeTextField,
        onInputTouch
    } = props;
    const maxLength = limit ? limit : 100;


    return (
        <TextField
            sx={style}
            error={hasError}
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
            inputProps={{maxLength: maxLength}}
            onChange={event => onChangeTextField(event.target.value)}
            onBlur={onInputTouch}
        />
    );
};

export default TextInputElement;