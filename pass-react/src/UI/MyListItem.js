import React from 'react';
import {NavLink} from "react-router-dom";

import {ListItemIcon, ListItemText} from "@material-ui/core";
import {ListItemButton} from "@mui/material";

const myListItem = (props) => {
    const {caption, icon, link} = props;

    return (
        <ListItemButton
            component={NavLink}
            to={link}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItemButton>
    );
};

export default myListItem;