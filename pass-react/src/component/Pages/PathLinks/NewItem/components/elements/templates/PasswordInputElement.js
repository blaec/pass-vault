import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchPasswordStrength} from "../../../../../../../store/state/passgen/passgen-actions";

import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";


const PasswordInputElement = (props) => {
    const {style, value, elemRef, label} = props;
    const [typedPassword, setTypedPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const {passgen, isPassgenLoaded, isInsertPassword} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

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
    const handleOnChange = () => {
        setTypedPassword(elemRef?.current?.value);
    };
    useEffect(() => {
        const identifier = setTimeout(() => {
            dispatch(fetchPasswordStrength(elemRef?.current?.value));
        }, 500);

        return () => clearTimeout(identifier)
    }, [typedPassword])


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
                onChange={handleOnChange}
            />
        </FormControl>
    );
};

export default PasswordInputElement;