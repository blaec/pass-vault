import React from 'react';
import {NavLink} from "react-router-dom";

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const myListItem = (props) => {
    const {caption, icon, link} = props;

    return (
        <ListItem
            button
            component={NavLink} to={link}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItem>
    );
};

export default myListItem;