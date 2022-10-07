import React from 'react';

import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import IconButton from "@mui/material/IconButton";


const IconVisibility = (props) => {
    const {isShow, onAction} = props;

    const visibilityIcon = isShow
        ? <VisibilityOffTwoToneIcon/>
        : <VisibilityTwoToneIcon/>;

    return (
        <IconButton
            onClick={onAction}
            onMouseDown={onAction}
        >
            {visibilityIcon}
        </IconButton>
    );
};

export default IconVisibility;