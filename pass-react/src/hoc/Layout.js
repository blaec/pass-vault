import React from 'react';

import {drawer, toolbarHeight} from "../utils/Constants";
import MySnackbar from "../UI/MySnackbar";
import MyToolbar from "../component/Toolbar/MyToolbar";
import {SnackbarProvider} from "notistack";

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
            <CssBaseline/>
            <MyToolbar/>
            <MySnackbar/>
            <Box sx={_childRoot}>
                {children}
            </Box>
        </SnackbarProvider>
    );
};

export default Layout;