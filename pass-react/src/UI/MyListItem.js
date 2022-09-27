import React from 'react';
import {NavLink} from "react-router-dom";

import {stripString} from "../utils/Utils";

import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";


const myListItem = (props) => {
    const {caption, icon, link, path} = props;

    const isSelected = stripString(path).includes(stripString(caption));
    const activeColor = isSelected ? {color: 'primary.main'} : null;


    return (
        <ListItemButton
            component={NavLink}
            selected={isSelected}
            to={link}
        >
            <ListItemIcon sx={activeColor}>
                {icon}
            </ListItemIcon>
            <ListItemText
                sx={activeColor}
                primary={caption}
            />
        </ListItemButton>
    );
};

export default myListItem;