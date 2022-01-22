import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";

const FolderItem = () => {
    const secondary = false;

    return (
        <ListItem
            secondaryAction={
                <Box>
                    <IconButton edge="end" sx={{ml: 2, color: 'green'}}>
                        <EditTwoToneIcon/>
                    </IconButton>
                    <IconButton edge="end" sx={{ml: 2, color: 'red'}}>
                        <DeleteTwoToneIcon/>
                    </IconButton>
                </Box>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    <FolderTwoToneIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
            />
        </ListItem>
    );
};

export default FolderItem;