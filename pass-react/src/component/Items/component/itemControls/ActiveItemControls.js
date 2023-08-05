import React from 'react';

import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {Tooltip} from "@mui/material";


const ActiveItemControls = (props) => {
    const {onEdit, onMoveToTrash} = props;


    return (
        <>
            <Tooltip title="Edit item">
                <IconButton
                    color="success"
                    onClick={onEdit}
                >
                    <EditTwoToneIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Move to trash">
                <IconButton
                    color="error"
                    onClick={onMoveToTrash}
                >
                    <DeleteTwoToneIcon/>
                </IconButton>
            </Tooltip>
        </>
    );
};

export default ActiveItemControls;