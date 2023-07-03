import React from 'react';

import {drawer} from "../../../utils/Constants";

import MySearch from "../../../UI/MySearch";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Button} from "@material-ui/core";
import {reactLinks} from "../../../utils/UrlUtils";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

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
    justifyContent:  {
        sm: 'flex-start',
        md: 'flex-end'
    }
};


const MyAppBar = (props) => {
    const {onToggle} = props;
    const navigate = useNavigate();

    const {token, onLogin, onLogout} = useAuth();


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
                {token ? (
                    <Button onClick={() => onLogout()}>Sign Out</Button>
                ) : (
                    <Button onClick={() => {
                        onLogin();
                        navigate(reactLinks.allItems);
                    }}>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;