import React from 'react';

import MyListItem from "../../../UI/MyListItem";

import {Divider, List} from "@material-ui/core";
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from "@mui/material/Toolbar";

const getMenuItemsBlock = (itemsData) => {

    return  itemsData.map((item, index) => {
            const {text, icon} = item;

            return (
                <MyListItem
                    key={index}
                    caption={text}
                    icon={icon}
                />
            );
        }
    );
}

const mainItemsData = [
    {
        text: "Passwords",
        icon: <VpnKeyTwoToneIcon/>
    },
];
const settingsItemsData = [
    {
        text: "Settings",
        icon: <SettingsIcon/>
    },
];

const MyMenu = () => {
    return (
        <div>
            <Toolbar/>
            <List>
                {getMenuItemsBlock(mainItemsData)}
                <Divider/>
                {getMenuItemsBlock(settingsItemsData)}
            </List>
        </div>
    )
};

export default MyMenu;
