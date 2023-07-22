import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {SnackbarProvider} from "notistack";
import {drawer, toolbarHeight} from "../utils/Constants";
import MySnackbar from "../UI/MySnackbar";
import MyToolbar from "../component/Toolbar/MyToolbar";
import AuthContext from "../contexts/AuthContext";
import {reactLinks} from "../utils/UrlUtils";
import {fetchAuthenticationToken} from "../store/state/authentication/auth-actions";

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
    const {authToken} = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();

    const handleLogin = (credentials) => {
        // const {email, password} = credentials;
        dispatch(fetchAuthenticationToken(credentials));
        //
        // setToken(token);
        //
        // const origin = location.state?.from?.pathname || reactLinks.allItems;
        // navigate(origin);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    useEffect(() => {
        setToken(authToken);

        const origin = location.state?.from?.pathname || reactLinks.allItems;
        navigate(origin);
    },[authToken])


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