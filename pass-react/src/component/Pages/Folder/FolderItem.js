import React from 'react';

import MyFormDialog from "../../../UI/MyFormDialog";

import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

const FolderItem = (props) => {
    const {id, folder, isNew} = props;
    const secondary = false;

    const [open, setOpen] = React.useState(false);

    const editIcon = {ml: 2, color: 'green'};
    const deleteIcon = {ml: 2, color: 'red'};
    const createIcon = {ml: 2, color: 'blue'};

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleEdit = (id) => {
        setOpen(true);
        alert(`edit ${id}`);
    };
    const handleDelete = (id) => {
        alert(`delete ${id}`);
    };
    const handleCreate = (id) => {
        setOpen(true);
        alert(`create ${id}`);
    };

    const modifyControls = (
        <>
            <IconButton
                edge="end"
                sx={editIcon}
                onClick={() => handleEdit(id)}
            >
                <EditTwoToneIcon/>
            </IconButton>
            <IconButton
                edge="end"
                sx={deleteIcon}
                onClick={() => handleDelete(id)}
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
                onClick={() => handleCreate(id)}
            >
                <CreateNewFolderTwoToneIcon/>
            </IconButton>
        </>
    );
    const controls = isNew ? createControls : modifyControls;

    return (
        <>
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
            <MyFormDialog
                open={open}
                onClose={handleCloseDialog}
            />
        </>
    );
};

export default FolderItem;