import React from 'react';

import IconVisibility from "../../../../../../../UI/IconButtons/IconVisibility";

import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const SecretElement = (props) => {
    const {
        style,
        hasError,
        label,
        value,
        isFocused,
        isRequired,
        elemRef,
        onChange,
        onChangeTextField,
        onInputTouch
    } = props;
    const [isShow, setIsShow] = React.useState(false);

    const handleShow = () => {
        setIsShow(!isShow)
    }
    const inputType = isShow
        ? 'text'
        : 'password';
    const inputEndAdornment = (
        <InputAdornment position="end">
            <IconVisibility
                isShow={isShow}
                onAction={handleShow}
            />
        </InputAdornment>
    );

    const handleOnChange = event => {
        onChange();
        return onChangeTextField(event.target.value);
    };


    return (
        <FormControl
            sx={style}
            fullWidth
            variant="filled"
            focused={isFocused}
            required={isRequired}
        >
            <InputLabel>{label}</InputLabel>
            <FilledInput
                error={hasError}
                defaultValue={value}
                inputRef={elemRef}
                type={inputType}
                endAdornment={inputEndAdornment}
                label={label}
                onChange={handleOnChange}
                onBlur={onInputTouch}
            />
        </FormControl>
    );
};

export default SecretElement;