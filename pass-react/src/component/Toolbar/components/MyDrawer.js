import * as React from 'react';

import {GetMenuItemsBlock, MainItemsData, SettingsItemsData} from "./MyMenu";
import {drawer} from "../../../utils/Constants";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';

const MyDrawer = (props) => {
    const {window, mobileOpen, onToggle} = props;

    const container = window !== undefined
        ? () => window().document.body
        : undefined;

    const box = {width: {sm: drawer.width}, flexShrink: {sm: 0}};
    const drawerMobile = {
        display: {xs: 'block', sm: 'none'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawer.width},
    };
    const drawerDesktop = {
        display: {xs: 'none', sm: 'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawer.width},
    };

    const menuItems = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {GetMenuItemsBlock(MainItemsData)}
            </List>
            <Divider/>
            <List>
                {GetMenuItemsBlock(SettingsItemsData)}
            </List>
        </div>
    );

    return (
        <Box
            sx={box}
            component="nav"
        >
            <Drawer
                sx={drawerMobile}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={onToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {menuItems}
            </Drawer>
            <Drawer
                sx={drawerDesktop}
                variant="permanent"
                open
            >
                {menuItems}
            </Drawer>
        </Box>
    );
}

export default MyDrawer;
