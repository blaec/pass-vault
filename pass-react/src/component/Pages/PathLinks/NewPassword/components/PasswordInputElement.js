import React from 'react';

import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import {useSelector} from "react-redux";


const PasswordInputElement = (props) => {
    const {style, value, elemRef, label} = props;
    const [showPassword, setShowPassword] = React.useState(false);
    const {passgen, isPassgenLoaded, isInsertPassword} = useSelector(state => state.passgen.passgen);

    let isFocused = false;
    if (isInsertPassword && isPassgenLoaded && elemRef?.current) {
        elemRef.current.value = passgen;
        isFocused = true;
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const visibilityElement = showPassword
        ? <VisibilityOffTwoToneIcon/>
        : <VisibilityTwoToneIcon/>;
    const inputType = showPassword
        ? 'text'
        : 'password';
    const inputEndAdornment = (
        <InputAdornment position="end">
            <IconButton
                edge="end"
                onClick={handleShowPassword}
                onMouseDown={handleShowPassword}
            >
                {visibilityElement}
            </IconButton>
        </InputAdornment>
    );


    return (
        <FormControl
            sx={style}
            fullWidth
            variant="filled"
            focused={isFocused}
        >
            <InputLabel>Password</InputLabel>
            <FilledInput
                defaultValue={value}
                inputRef={elemRef}
                type={inputType}
                endAdornment={inputEndAdornment}
                label={label}
            />
        </FormControl>
    );
};

export default PasswordInputElement;