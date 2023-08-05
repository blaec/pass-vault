import React from 'react';

import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";


const IconLaunch = (props) => {
    const {url} = props;

    const isUrlExist = url && url.length > 0;
    const launchIcon = isUrlExist
        ? <LaunchTwoToneIcon/>
        : null;

    const handlerFollowLink = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <Tooltip title="Follow link" placement="top">
            <IconButton
                onClick={handlerFollowLink}
            >
                {launchIcon}
            </IconButton>
        </Tooltip>
    );
};

export default IconLaunch;