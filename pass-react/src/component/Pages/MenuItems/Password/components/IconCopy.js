import React from 'react';

import {copyToClipboard} from "../../../../../utils/Utils";

import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import IconButton from "@mui/material/IconButton";


const IconCopy = (props) => {
    const {copyValue} = props;

    const handleCopy = () => {
        copyToClipboard(copyValue);
    };

    return (
        <IconButton
            onClick={handleCopy}
        >
            <ContentCopyTwoToneIcon/>
        </IconButton>
    );
};

export default IconCopy;