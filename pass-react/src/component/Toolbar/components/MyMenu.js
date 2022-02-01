import React from 'react';

import MyListItem from "../../../UI/MyListItem";
import {reactLinks} from "../../../utils/UrlUtils";

import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

export const GetMenuItemsBlock = (itemsData) => {

    return itemsData.map((item, index) => {
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

export const MainItemsData = [
    {
        text: "Passwords",
        link: reactLinks.passwords,
        icon: <VpnKeyTwoToneIcon/>
    },
];

export const SettingsItemsData = [
    {
        text: "Folders",
        link: reactLinks.folders,
        icon: <CreateNewFolderTwoToneIcon/>
    },
    {
        text: "Settings",
        link: reactLinks.settings,
        icon: <SettingsApplicationsTwoToneIcon/>
    },
];