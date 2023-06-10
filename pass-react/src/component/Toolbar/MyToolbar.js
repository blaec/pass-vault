import React from 'react';

import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const MyToolbar = (props) => {
    const {user, onLogin, onLogout} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const box = {display: 'flex'};

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={box}>
            <CssBaseline/>
            <MyAppBar
                user={user} onLogin={onLogin} onLogout={onLogout}
                onToggle={handleDrawerToggle}
            />
            <MyDrawer
                mobileOpen={mobileOpen}
                onToggle={handleDrawerToggle}
            />
        </Box>
    );
};

export default MyToolbar;