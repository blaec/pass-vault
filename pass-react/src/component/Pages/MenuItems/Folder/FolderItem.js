import React from 'react';
import {NavLink} from "react-router-dom";

import FolderDialog, {FolderAction} from "../../../../UI/FolderDialog";
import {reactLinks} from "../../../../utils/UrlUtils";

import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

const _editIcon = {
    ml: 2,
    color: 'green'
};
const _deleteIcon = {
    ml: 2,
    color: 'red'
};
const _createIcon = {
    ml: 2,
    color: 'blue'
};


const FolderItem = (props) => {
    const {id, folder, isNew} = props;
    const secondary = false;

    const [dialog, setDialog] = React.useState({
        id: null,
        action: null,
        folder: '',
        title: '',
        ok: '',
        cancel: '',
        message: '',
        isOpen: false
    });

    const handleCloseDialog = () => {
        setDialog({...dialog, isOpen: false})
    };

    const handleEdit = (id) => {
        setDialog({
            id: id,
            action: FolderAction.edit,
            folder: folder,
            title: `Rename Folder`,
            ok: 'Edit',
            cancel: 'Cancel',
            isOpen: true,
        })
    };
    const handleDelete = (id) => {
        setDialog({
            id: id,
            action: FolderAction.delete,
            title: `Delete Folder`,
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
            title: `Add New Folder`,
            ok: 'Create',
            cancel: 'Cancel',
            isOpen: true,
        })
    };

    const modifyControls = (
        <>
            <IconButton
                edge="end"
                sx={_editIcon}
                onClick={() => handleEdit(id)}
            >
                <EditTwoToneIcon/>
            </IconButton>
            <IconButton
                edge="end"
                sx={_deleteIcon}
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
                sx={_createIcon}
                onClick={() => handleCreate(id)}
            >
                <CreateNewFolderTwoToneIcon/>
            </IconButton>
        </>
    );
    const controls = isNew ? createControls : modifyControls;

    const avatar = Number(id) === 0
        ? null
        : (
            <Avatar
                component={NavLink}
                to={`${reactLinks.folderItemsEndpoint}${id}`}
            >
                <FolderTwoToneIcon/>
            </Avatar>
        );


    return (
        <>
            <ListItem secondaryAction={controls}>
                <ListItemAvatar>
                    {avatar}
                </ListItemAvatar>
                <ListItemText
                    primary={folder}
                    secondary={secondary ? 'Secondary text' : null}
                />
            </ListItem>
            <FolderDialog
                dialog={dialog}
                onClose={handleCloseDialog}
            />
        </>
    );
};

export default FolderItem;