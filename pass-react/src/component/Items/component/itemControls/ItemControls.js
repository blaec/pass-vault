import React from 'react';
import {useDispatch} from "react-redux";
import {useLocation} from "react-router";

import {deleteItem, moveItemToTrash, restoreItemFromTrash} from "../../../../store/state/item/item-actions";
import {reactLinks} from "../../../../utils/UrlUtils";
import DeletedItemControls from "./DeletedItemControls";
import ActiveItemControls from "./ActiveItemControls";
import ItemDeleteDialog from "../../../../UI/dialogs/ItemDeleteDialog";

import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import Box from "@mui/material/Box";


const ItemControls = (props) => {
    const {id, type, onEdit, onClose} = props;
    const {pathname} = useLocation();

    const [dialog, setDialog] = React.useState({
        // id: null,
        // action: null,
        // folder: '',
        // title: '',
        // ok: '',
        // cancel: '',
        // message: '',
        isOpen: false
    });

    const handleCloseDialog = () => {
        setDialog({...dialog, isOpen: false})
    };

    const dispatch = useDispatch();

    const handleEdit = () => {
        onEdit();
    };

    const handleMoveToFolder = () => {
        alert("move to folder");
    };

    const handlePrepareMoveToDelete = () => {
        setDialog({...dialog, isOpen: true});
    };

    const handleMoveToTrash = () => {
        dispatch(moveItemToTrash(type, id));
        onClose();
    };

    const handleRestoreFromTrash = () => {
        dispatch(restoreItemFromTrash(type, id));
        onClose();
    };

    const handleDelete = () => {
        dispatch(deleteItem(type, id));
        onClose();
    };

    const actionIcons = pathname.includes(reactLinks.trash)
        ? (
            <DeletedItemControls
                onRestore={handleRestoreFromTrash}
                onDelete={handlePrepareMoveToDelete}
            />
        )
        : (
            <ActiveItemControls
                onEdit={handleEdit}
                onMoveToFolder={handleMoveToFolder}
                onMoveToTrash={handleMoveToTrash}
            />
        );


    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <IconButton
                color="primary"
                onClick={onClose}
            >
                <CancelTwoToneIcon/>
            </IconButton>
            <Box>
                {actionIcons}
            </Box>
            <ItemDeleteDialog
                isOpen={dialog.isOpen}
                onCancel={handleCloseDialog}
                onDelete={handleDelete}
            />
        </Grid>
    );
};

export default ItemControls;