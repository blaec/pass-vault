import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const FolderAction = Object.freeze(
    {
        create: 'created',
        edit: 'edited',
        delete: 'deleted',
    }
);

const MyFormDialog = (props) => {
    const {dialog: {id, action, title, ok, cancel, message, isOpen}, onClose} = props;

    const handleConfirm = () => {
        alert(`Folder ${id} will be ${action}`);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Folder name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{cancel}</Button>
                <Button onClick={handleConfirm}>{ok}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MyFormDialog;