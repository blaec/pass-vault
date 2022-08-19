import React from 'react';

import Typography from "@mui/material/Typography";
import GppGoodTwoToneIcon from '@mui/icons-material/GppGoodTwoTone';
import GppMaybeTwoToneIcon from '@mui/icons-material/GppMaybeTwoTone';
import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';


const _wrapIcon = {
    display: "flex",
    alignItems: "center",
};

const message = [
    {
        value: <><GppGoodTwoToneIcon/> Strong Password</>,
        color: "green",
    },
    {
        value: <><GppMaybeTwoToneIcon/> Moderate Password</>,
        color: "orange",
    },
    {
        value: <><GppBadTwoToneIcon/> Weak Password</>,
        color: "red",
    },
]


const PasswordStrength = () => {
    const id = Math.floor(Math.random() * message.length);
    const {color, value} = message[id];

    return (
        <Typography
            sx={_wrapIcon}
            component={'div'}
            variant="subtitle1"
            color={color}
        >
            {value}
        </Typography>
    );
};

export default PasswordStrength;