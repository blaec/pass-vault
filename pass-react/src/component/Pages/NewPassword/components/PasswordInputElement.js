import React from 'react';

import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";


const PasswordInputElement = (props) => {
    const {style, value, elemRef, label} = props;
    const [showPassword, setShowPassword] = React.useState(false);

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