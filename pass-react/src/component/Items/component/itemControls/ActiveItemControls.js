import React from 'react';

import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {Tooltip} from "@mui/material";
import LockClockTwoToneIcon from '@mui/icons-material/LockClockTwoTone';

const ActiveItemControls = (props) => {
    const {onEdit, onShowHistory, onMoveToTrash} = props;

    const passwordHistory = onShowHistory
        ? <Tooltip title="Edit item">
              <IconButton
                  color="info"
                  onClick={onShowHistory}
              >
                  <LockClockTwoToneIcon/>
              </IconButton>
          </Tooltip>
        : null;


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
            {passwordHistory}
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