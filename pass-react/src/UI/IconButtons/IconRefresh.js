import React from 'react';

import RefreshTwoToneIcon from "@mui/icons-material/RefreshTwoTone";
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";


const IconRefresh = (props) => {
    const {onGenerate} = props;


    return (
        <Tooltip title="Regenerate password" placement="top">
            <IconButton
                onClick={onGenerate}>
                <RefreshTwoToneIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default IconRefresh;