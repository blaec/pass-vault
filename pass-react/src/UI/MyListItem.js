import React from 'react';

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const myListItem = (props) => {
    const {caption, icon} = props;

    return (
        <ListItem
            button
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItem>
    );
};

export default myListItem;