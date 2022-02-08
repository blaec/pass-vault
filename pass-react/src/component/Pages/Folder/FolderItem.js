import React from 'react';

import MyFormDialog, {FolderAction} from "../../../UI/MyFormDialog";

import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

const FolderItem = (props) => {
    const {id, folder, isNew} = props;
    const secondary = false;

    const [dialog, setDialog] = React.useState({id: null, action: null, folder: '', title: '', ok: '', cancel: '', message: '', isOpen: false});

    const editIcon = {ml: 2, color: 'green'};
    const deleteIcon = {ml: 2, color: 'red'};
    const createIcon = {ml: 2, color: 'blue'};

    const handleCloseDialog = () => {
        setDialog({...dialog, isOpen: false})
    };

    const handleEdit = (id) => {
        setDialog({
            id: id,
            action: FolderAction.edit,
            folder: folder,
            title: `Edit folder #${id}`,
            ok: 'Edit',
            cancel: 'Cancel',
            isOpen: true,
            message: 'Set new folder name'
        })
    };
    const handleDelete = (id) => {
        setDialog({
            id: id,
            action: FolderAction.delete,
            title: `Delete folder #${id}`,
            ok: 'Delete',
            cancel: 'Cancel',
            isOpen: true,
            message: 'Do you want to delete this folder?'
        })
    };
    const handleCreate = (id) => {
        setDialog({
            id: id,
            action: FolderAction.create,
            title: `Create folder | ${id}`,
            ok: 'Create',
            cancel: 'Cancel',
            isOpen: true,
            message: `Set name for a new folder`
        })
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
                dialog={dialog}
                onClose={handleCloseDialog}
            />
        </>
    );
};

export default FolderItem;