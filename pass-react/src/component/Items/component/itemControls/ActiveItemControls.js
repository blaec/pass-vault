import React from 'react';

import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFileMoveTwoToneIcon from "@mui/icons-material/DriveFileMoveTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";


const ActiveItemControls = (props) => {
    const {onEdit, onMoveToFolder, onMoveToTrash} = props;


    return (
        <>
            <IconButton
                color="primary"
                onClick={onEdit}
            >
                <EditTwoToneIcon/>
            </IconButton>
            <IconButton
                color="primary"
                onClick={onMoveToFolder}
            >
                <DriveFileMoveTwoToneIcon/>
            </IconButton>
            <IconButton
                color="primary"
                onClick={onMoveToTrash}
            >
                <DeleteTwoToneIcon/>
            </IconButton>
        </>
    );
};

export default ActiveItemControls;