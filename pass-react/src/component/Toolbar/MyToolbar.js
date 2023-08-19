import React from 'react';

import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const _box = {display: 'flex'};


const MyToolbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box sx={_box}>
            <CssBaseline/>
            <MyAppBar onToggle={handleDrawerToggle}/>
            <MyDrawer
                mobileOpen={mobileOpen}
                onToggle={handleDrawerToggle}
            />
        </Box>
    );
};

export default MyToolbar;