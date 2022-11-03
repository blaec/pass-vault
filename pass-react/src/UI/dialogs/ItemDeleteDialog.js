import React from 'react';

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";


const ItemDeleteDialog = (props) => {
    const {isOpen, onCancel, onDelete} = props;


    return (
        <Dialog open={isOpen} onClose={onCancel}>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This item will be lost and you will no longer be able to restore it.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ItemDeleteDialog;