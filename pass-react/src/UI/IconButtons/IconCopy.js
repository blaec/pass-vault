import React from 'react';

import {copyToClipboard} from "../../utils/Utils";

import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";


const IconCopy = (props) => {
    const {copyValue} = props;

    const handleCopy = () => {
        copyToClipboard(copyValue);
    };

    return (
        <Tooltip title="Copy to clipboard" placement="top">
            <IconButton
                onClick={handleCopy}
            >
                <ContentCopyTwoToneIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default IconCopy;