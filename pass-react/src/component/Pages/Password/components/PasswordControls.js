import React from 'react';

import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import Box from "@mui/material/Box";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFileMoveTwoToneIcon from "@mui/icons-material/DriveFileMoveTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";


const PasswordControls = (props) => {
    const {onClose} = props;

    const handleEdit = () => {
        alert("edit");
    };

    const handleMoveToFolder = () => {
        alert("move to folder");
    };

    const handleDelete = () => {
        alert("delete password");
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