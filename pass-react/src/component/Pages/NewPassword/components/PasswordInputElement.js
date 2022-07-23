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
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleShowPassword}
                            onMouseDown={handleShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOffTwoToneIcon/> : <VisibilityTwoToneIcon/>}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    );
};

export default PasswordInputElement;