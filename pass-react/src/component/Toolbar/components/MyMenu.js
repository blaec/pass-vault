import React from 'react';

import MyListItem from "../../../UI/MyListItem";
import {reactLinks} from "../../../utils/UrlUtils";

import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import Toolbar from "@mui/material/Toolbar";
import {Divider, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import {List} from "@mui/icons-material";
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Box from "@mui/material/Box";

const getMenuItemsBlock = (itemsData) => {

    return  itemsData.map((item, index) => {
            const {text, link, icon} = item;

            return (
                <MyListItem
                    key={index}
                    caption={text}
                    link={link}
                    icon={icon}
                />
            );
        }
    );
}

const mainItemsData = [
    {
        text: "Passwords",
        link: reactLinks.passwords,
        icon: <VpnKeyTwoToneIcon/>
    },
];
const settingsItemsData = [
    {
        text: "Settings",
        link: reactLinks.settings,
        icon: <SettingsApplicationsTwoToneIcon/>
    },
];

const MyMenu = () => {
    return (
        <React.Fragment>
            <Toolbar/>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem >
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </React.Fragment>
    )
};

export default MyMenu;
