import React from 'react';

import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import IconButton from "@mui/material/IconButton";


const IconVisibility = (props) => {
    const {isShowPassword, onShowHidePassword} = props;

    const visibilityIcon = isShowPassword
        ? <VisibilityOffTwoToneIcon/>
        : <VisibilityTwoToneIcon/>;

    return (
        <IconButton
            onClick={onShowHidePassword}
            onMouseDown={onShowHidePassword}
        >
            {visibilityIcon}
        </IconButton>
    );
};

export default IconVisibility;