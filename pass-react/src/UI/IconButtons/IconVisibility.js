import React from 'react';

import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";


const IconVisibility = (props) => {
    const {isShow, onAction} = props;

    const visibilityIcon = isShow
        ? <VisibilityOffTwoToneIcon/>
        : <VisibilityTwoToneIcon/>;

    const iconTitle = isShow
        ? "Hide password"
        : "Show password";

    return (
        <Tooltip title={iconTitle} placement="top">
            <IconButton
                onClick={onAction}
                onMouseDown={onAction}
            >
                {visibilityIcon}
            </IconButton>
        </Tooltip>
    );
};

export default IconVisibility;