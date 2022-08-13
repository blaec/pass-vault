import React from 'react';

import RefreshTwoToneIcon from "@mui/icons-material/RefreshTwoTone";
import IconButton from "@mui/material/IconButton";


const IconRefresh = (props) => {
    const {onGenerate} = props;


    return (
        <IconButton
            onClick={onGenerate}>
            <RefreshTwoToneIcon/>
        </IconButton>
    );
};

export default IconRefresh;