import React from 'react';

import MyListItem from "../../../UI/MyListItem";
import {reactLinks} from "../../../utils/UrlUtils";

import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import StickyNote2TwoToneIcon from '@mui/icons-material/StickyNote2TwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

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
        text: "All items",
        link: reactLinks.allItems,
        icon: <AppsTwoToneIcon/>
    },
    {
        text: "Passwords",
        link: reactLinks.passwords,
        icon: <VpnKeyTwoToneIcon/>
    },
    {
        text: "Secure Notes",
        link: reactLinks.secureNotes,
        icon: <StickyNote2TwoToneIcon/>
    },
    {
        text: "Credit Cards",
        link: reactLinks.creditCards,
        icon: <CreditCardTwoToneIcon/>
    },
    {
        text: "Trash",
        link: reactLinks.trash,
        icon: <DeleteTwoToneIcon/>
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