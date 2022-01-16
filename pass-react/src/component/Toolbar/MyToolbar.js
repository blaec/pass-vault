import React from 'react';
import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;

const MyToolbar = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MyAppBar drawerWidth={drawerWidth}/>
            <MyDrawer drawerWidth={drawerWidth}/>
        </Box>
    );
};

export default MyToolbar;