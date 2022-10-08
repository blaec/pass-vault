import React from 'react';

import {drawer, toolbarHeight} from "../utils/Constants";

import MyToolbar from "../component/Toolbar/MyToolbar";
import Box from "@mui/material/Box";

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
        <div>
            <MyToolbar/>
            <Box sx={_childRoot}>
                {children}
            </Box>
        </div>
    );
};

export default Layout;