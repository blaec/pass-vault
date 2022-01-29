import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

const FolderItem = (props) => {
    const {id, folder, isNew} = props;
    const secondary = false;

    const editIcon = {ml: 2, color: 'green'};
    const deleteIcon = {ml: 2, color: 'red'};
    const createIcon = {ml: 2, color: 'blue'};

    const modifyControls = (
        <>
            <IconButton
                edge="end"
                sx={editIcon}
                onClick={() => alert(`edit ${id}`)}
            >
                <EditTwoToneIcon/>
            </IconButton>
            <IconButton
                edge="end"
                sx={deleteIcon}
                onClick={() => alert(`delete ${id}`)}
            >
                <DeleteTwoToneIcon/>
            </IconButton>
        </>
    );
    const createControls = (
        <>
            <IconButton
                edge="end"
                sx={createIcon}
                onClick={() => alert(`create ${id}`)}
            >
                <CreateNewFolderTwoToneIcon/>
            </IconButton>
        </>
    );
    const controls = isNew ? createControls : modifyControls;

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