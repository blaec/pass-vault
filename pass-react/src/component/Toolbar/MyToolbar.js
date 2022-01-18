import React from 'react';

import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;

const MyToolbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const box = {display: 'flex'};

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={box}>
            <CssBaseline/>
            <MyAppBar
                drawerWidth={drawerWidth}
                onToggle={handleDrawerToggle}
            />
            <MyDrawer
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                onToggle={handleDrawerToggle}
            />
        </Box>
    );
};

export default MyToolbar;