import React from 'react';
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router";

import {SnackbarProvider} from "notistack";
import {drawer, toolbarHeight} from "../utils/Constants";
import MySnackbar from "../UI/MySnackbar";
import MyToolbar from "../component/Toolbar/MyToolbar";
import {fakeAuth} from "../utils/Utils";
import AuthContext from "../contexts/AuthContext";
import {reactLinks} from "../utils/UrlUtils";

import Box from "@mui/material/Box";
import {Collapse, CssBaseline} from "@material-ui/core";


const _childRoot = {
    mt: {
        xs: `${toolbarHeight.mobile}px`,
        sm: `${toolbarHeight.desktop}px`
    },
    pl: {
        xs: 0,
        sm: `${drawer.width}px`
    },
};


const Layout = (props) => {
    const {children} = props;
    const [token, setToken] = React.useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async () => {
        const token = await fakeAuth();

        setToken(token);

        const origin = location.state?.from?.pathname || reactLinks.allItems;
        navigate(origin);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };


    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            TransitionComponent={Collapse}
            autoHideDuration={3000}
        >
            <AuthContext.Provider value={value}>
                <CssBaseline/>
                <MyToolbar/>
                <MySnackbar/>
                <Box sx={_childRoot}>
                    {children}
                </Box>
            </AuthContext.Provider>
        </SnackbarProvider>
    );
};

export default Layout;