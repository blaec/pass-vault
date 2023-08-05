import React from 'react';

import {drawer} from "../../../utils/Constants";
import useAuth from "../../../hooks/use-auth";
import MySearch from "../../../UI/MySearch";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Button} from "@material-ui/core";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Box from "@mui/material/Box";

const _iconButton = {
    mr: 2,
    display: {sm: 'none'}
};
const _appBar = {
    width: {sm: `calc(100% - ${drawer.width}px)`},
    ml: {sm: `${drawer.width}px`},
    zIndex: (theme) => theme.zIndex.drawer + 1,
};
const _search = {
    display: 'flex',
    justifyContent: {
        sm: 'flex-start',
        md: 'flex-end'
    }
};
const _signOut = {
    ml: 1
};


const MyAppBar = (props) => {
    const {onToggle} = props;

    const {token, onLogout} = useAuth();

    let SignOut = <>
        {token
            ? <Box sx={_signOut}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<LogoutTwoToneIcon/>}
                    onClick={() => onLogout()}
                >
                    logout
                </Button>
            </Box>
            : null}
    </>;


    return (
        <AppBar
            position="fixed"
            sx={_appBar}
        >
            <Toolbar sx={_search}>
                <IconButton
                    sx={_iconButton}
                    color="inherit"
                    edge="start"
                    onClick={onToggle}
                >
                    <MenuIcon/>
                </IconButton>
                <MySearch/>
                {SignOut}
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;