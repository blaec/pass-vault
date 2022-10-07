import React from 'react';

import IconVisibility from "../../../../../../UI/IconButtons/IconVisibility";

import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const SecretElement = (props) => {
    const {style, label, value, isFocused, elemRef, onChange} = props;
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


    return (
        <FormControl
            sx={style}
            fullWidth
            variant="filled"
            focused={isFocused}
        >
            <InputLabel>{label}</InputLabel>
            <FilledInput
                defaultValue={value}
                inputRef={elemRef}
                type={inputType}
                endAdornment={inputEndAdornment}
                label={label}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default SecretElement;