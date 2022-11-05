import React from 'react';

import IconButton from "@mui/material/IconButton";
import RestoreFromTrashTwoToneIcon from "@mui/icons-material/RestoreFromTrashTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";


const DeletedItemControls = (props) => {
    const {onRestore, onDelete} = props;


    return (
        <>
            <IconButton
                color="success"
                onClick={onRestore}
            >
                <RestoreFromTrashTwoToneIcon/>
            </IconButton>
            <IconButton
                color="error"
                onClick={onDelete}
            >
                <DeleteForeverTwoToneIcon/>
            </IconButton>
        </>
    );
};

export default DeletedItemControls;