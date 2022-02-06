import React from 'react';
import {useDispatch} from "react-redux";

import {deleteFolder, saveFolder} from "../store/state/folder/folder-actions";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const FolderAction = Object.freeze(
    {
        create: 'created to ',
        edit: 'edited to ',
        delete: 'deleted',
    }
);

const MyFormDialog = (props) => {
    const {dialog: {id, action, title, ok, cancel, message, isOpen}, onClose} = props;
    const inputRef = React.useRef();
    const dispatch = useDispatch();

    const handleConfirm = () => {
        if (action === FolderAction.create && inputRef?.current?.value.length > 0) {
            dispatch(saveFolder(inputRef.current.value));
        } else if (action === FolderAction.delete) {
            dispatch(deleteFolder(id));
        } else {
            alert(`Folder ${id} will be ${action}${inputRef?.current?.value ?? ''}`);
        }
        onClose();
    };

    const textField = action === FolderAction.delete
        ? null
        : (
            <TextField
                inputRef={inputRef}
                autoFocus
                margin="dense"
                id="name"
                label="Folder name"
                type="text"
                fullWidth
                variant="standard"
            />
        )
    ;
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
                {textField}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{cancel}</Button>
                <Button onClick={handleConfirm}>{ok}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MyFormDialog;