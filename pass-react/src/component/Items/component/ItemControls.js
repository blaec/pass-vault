import React from 'react';
import {useDispatch} from "react-redux";
import {useLocation} from "react-router";

import {deleteItem, moveItemToTrash} from "../../../store/state/item/item-actions";
import {reactLinks} from "../../../utils/UrlUtils";

import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import Box from "@mui/material/Box";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFileMoveTwoToneIcon from "@mui/icons-material/DriveFileMoveTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RestoreFromTrashTwoToneIcon from '@mui/icons-material/RestoreFromTrashTwoTone';


const ItemControls = (props) => {
    const {id, type, onEdit, onClose} = props;
    const {pathname} = useLocation();

    const dispatch = useDispatch();

    const handleEdit = () => {
        onEdit();
    };

    const handleMoveToFolder = () => {
        alert("move to folder");
    };

    const handleMoveToTrash = () => {
        dispatch(moveItemToTrash(type, id));
        onClose();
    };

    const restoreItem = () => {
        alert("restore item");
        // dispatch(moveItemToTrash(type, id));
        onClose();
    };

    const handleDelete = () => {
        dispatch(deleteItem(type, id));
        onClose();
    };

    const actionIcons = pathname.includes(reactLinks.trash)
        ? (
            <>
                <IconButton
                    color="success"
                    onClick={restoreItem}
                >
                    <RestoreFromTrashTwoToneIcon/>
                </IconButton>
                <IconButton
                    color="warning"
                    onClick={handleDelete}
                >
                    <DeleteForeverTwoToneIcon/>
                </IconButton>
            </>
        )
        : (
            <>
                <IconButton
                    color="primary"
                    onClick={handleEdit}
                >
                    <EditTwoToneIcon/>
                </IconButton>
                <IconButton
                    color="primary"
                    onClick={handleMoveToFolder}
                >
                    <DriveFileMoveTwoToneIcon/>
                </IconButton>
                <IconButton
                    color="primary"
                    onClick={handleMoveToTrash}
                >
                    <DeleteTwoToneIcon/>
                </IconButton>
            </>
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
        </Grid>
    );
};

export default ItemControls;