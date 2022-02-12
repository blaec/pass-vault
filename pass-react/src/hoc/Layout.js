import React from 'react';

import {drawer, toolbarHeight} from "../utils/Constants";

import MyToolbar from "../component/Toolbar/MyToolbar";
import Box from "@mui/material/Box";

const Layout = (props) => {
    const {children} = props;

    const childRoot = {
        mt: {xs: `${toolbarHeight.mobile}px`, sm: `${toolbarHeight.desktop}px`},
        pl: {xs: 0, sm: `${drawer.width}px`},
    };

    return (
        <div>
            <MyToolbar/>
            <Box sx={childRoot}>
                {children}
            </Box>
        </div>
    );
};

export default Layout;