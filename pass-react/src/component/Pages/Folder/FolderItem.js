import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

const FolderItem = (props) => {
    const {folder, isNew} = props;
    const secondary = false;

    const oldControls = (
        <>
            <IconButton edge="end" sx={{ml: 2, color: 'green'}}>
                <EditTwoToneIcon/>
            </IconButton>
            <IconButton edge="end" sx={{ml: 2, color: 'red'}}>
                <DeleteTwoToneIcon/>
            </IconButton>
        </>
    );
    const newControls = (
        <>
            <IconButton edge="end" sx={{ml: 2, color: 'blue'}}>
                <CreateNewFolderTwoToneIcon/>
            </IconButton>
        </>
    );
    const controls = isNew ? newControls : oldControls;

    return (

        <ListItem secondaryAction={controls}>
            <ListItemAvatar>
                <Avatar>
                    <FolderTwoToneIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={folder}
                secondary={secondary ? 'Secondary text' : null}
            />
        </ListItem>
    );
};

export default FolderItem;