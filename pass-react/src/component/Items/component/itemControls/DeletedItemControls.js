import React from 'react';

import IconButton from "@mui/material/IconButton";
import RestoreFromTrashTwoToneIcon from "@mui/icons-material/RestoreFromTrashTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import {Tooltip} from "@mui/material";


const DeletedItemControls = (props) => {
    const {onRestore, onDelete} = props;


    return (
        <>
            <Tooltip title="Restore item">
                <IconButton
                    color="success"
                    onClick={onRestore}
                >
                    <RestoreFromTrashTwoToneIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Permanent delete">
                <IconButton
                    color="error"
                    onClick={onDelete}
                >
                    <DeleteForeverTwoToneIcon/>
                </IconButton>
            </Tooltip>
        </>
    );
};

export default DeletedItemControls;