import * as React from 'react';

import MyMenu from "./MyMenu";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


function MyDrawer(props) {
    const {window, drawerWidth, mobileOpen, onToggle} = props;

    const container = window !== undefined
        ? () => window().document.body
        : undefined;

    const box = {width: {sm: drawerWidth}, flexShrink: {sm: 0}};
    const drawerMobile = {
        display: {xs: 'block', sm: 'none'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
    };
    const drawerDesktop = {
        display: {xs: 'none', sm: 'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
    };

    return (

        <Box
            sx={box}
            component="nav"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                <MyMenu/>
            </Drawer>
            <Drawer
                sx={drawerDesktop}
                variant="permanent"
                open
            >
                <MyMenu/>
            </Drawer>
        </Box>
        // <Box
        //     component="main"
        //     sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        // >
        //     <Toolbar />
        //     <Typography paragraph>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        //         tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        //         enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        //         imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        //         Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        //         Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        //         adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
        //         nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
        //         leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
        //         feugiat vivamus at augue. At augue eget arcu dictum varius duis at
        //         consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        //         sapien faucibus et molestie ac.
        //     </Typography>
        //     <Typography paragraph>
        //         Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        //         eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
        //         neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        //         tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
        //         sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
        //         tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        //         gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
        //         et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
        //         tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        //         eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
        //         posuere sollicitudin aliquam ultrices sagittis orci a.
        //     </Typography>
        // </Box>
    );
}

export default MyDrawer;
