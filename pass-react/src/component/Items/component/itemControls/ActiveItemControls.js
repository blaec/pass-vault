import React from 'react';
import {useSelector} from "react-redux";

import {isArrayExist} from "../../../../utils/Utils";

import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {Tooltip} from "@mui/material";
import LockClockTwoToneIcon from '@mui/icons-material/LockClockTwoTone';


const ActiveItemControls = (props) => {
    const {onEdit, onShowHistory, onMoveToTrash} = props;
    const {passwordHistory} = useSelector(state => state.passwordHistory.passwordHistory);

    const hasNoHistory = !isArrayExist(passwordHistory);
    const passwordHistoryElement = onShowHistory
        ? <Tooltip title="View password history"><span>
            <IconButton
                color="info"
                onClick={onShowHistory}
                disabled={hasNoHistory}
            >
                <LockClockTwoToneIcon/>
            </IconButton>
          </span></Tooltip>
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
            {passwordHistoryElement}
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