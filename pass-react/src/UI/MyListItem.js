import React from 'react';
import {NavLink} from "react-router-dom";

import {stripString} from "../utils/Utils";

import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";


const myListItem = (props) => {
    const {caption, icon, link, path} = props;

    const isSelected = stripString(path).includes(stripString(caption));


    return (
        <ListItemButton
            component={NavLink}
            selected={isSelected}
            to={link}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItemButton>
    );
};

export default myListItem;