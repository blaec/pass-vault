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


    return (
        <TextField
            fullWidth
            rows={4}
            variant="filled"
            sx={style}
            error={hasError}
            defaultValue={value}
            inputRef={elemRef}
            autoFocus={autofocus}
            label={label}
            type={type}
            required={isRequired}
            multiline={multiline}
            inputProps={{maxLength: limit || 100}}
            onChange={event => onChangeTextField?.(event.target.value)}
            onBlur={onInputTouch}
        />
    );
};

export default TextInputElement;