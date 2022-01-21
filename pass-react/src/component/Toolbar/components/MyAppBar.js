import React from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {drawer} from "../../../utils/Constants";

const MyAppBar = (props) => {
    const {onToggle} = props;

    const iconButton = {
        mr: 2,
        display: {sm: 'none'}
    };
    const appBar = {
        width: {sm: `calc(100% - ${drawer.width}px)`},
        ml: {sm: `${drawer.width}px`},
    };

    return (
        <AppBar
            position="fixed"
            sx={appBar}
        >
            <Toolbar>
                <IconButton
                    sx={iconButton}
                    color="inherit"
                    edge="start"
                    onClick={onToggle}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;