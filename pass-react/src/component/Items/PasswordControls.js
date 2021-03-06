import React from 'react';
import {useDispatch} from "react-redux";

import {deletePassword} from "../../store/state/password/password-actions";

import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import Box from "@mui/material/Box";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFileMoveTwoToneIcon from "@mui/icons-material/DriveFileMoveTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";


const PasswordControls = (props) => {
    const {id, onEdit, onClose} = props;

    const dispatch = useDispatch();

    const handleEdit = () => {
        onEdit();
    };

    const handleMoveToFolder = () => {
        alert("move to folder");
    };

    const handleDelete = () => {
        dispatch(deletePassword(id));
        onClose();
    };


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
                    onClick={handleDelete}
                >
                    <DeleteTwoToneIcon/>
                </IconButton>
            </Box>
        </Grid>
    );
};

export default PasswordControls;