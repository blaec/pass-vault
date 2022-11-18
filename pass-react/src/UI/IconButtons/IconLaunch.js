import React from 'react';

import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import IconButton from "@mui/material/IconButton";


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
        <IconButton
            onClick={handlerFollowLink}
        >
            {launchIcon}
        </IconButton>
    );
};

export default IconLaunch;