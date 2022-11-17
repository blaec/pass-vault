import React from 'react';

import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";


const ActiveItemControls = (props) => {
    const {onEdit, onMoveToTrash} = props;


    return (
        <>
            <IconButton
                color="success"
                onClick={onEdit}
            >
                <EditTwoToneIcon/>
            </IconButton>
            <IconButton
                color="error"
                onClick={onMoveToTrash}
            >
                <DeleteTwoToneIcon/>
            </IconButton>
        </>
    );
};

export default ActiveItemControls;