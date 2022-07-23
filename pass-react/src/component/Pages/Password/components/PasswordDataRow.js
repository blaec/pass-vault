import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import {copyToClipboard} from "../../../../utils/Utils";


const PasswordDataRow = (props) => {
    const {id, description, value, icon} = props;

    const _description = {width: '25%'};
    const _value = {width: '65%'};
    const _icons = {width: '10%'};

    const handleCopy = () => {
        copyToClipboard(value);
    };

    const copyIcon = (
        <IconButton
            onClick={handleCopy}
        >
            <ContentCopyTwoToneIcon/>
        </IconButton>
    );

    return (
        <TableRow key={id}>
            <TableCell style={_description}>
                {description}
            </TableCell>
            <TableCell
                style={_value}
                align="left"
            >
                {value}
            </TableCell>
            <TableCell
                style={_icons}
                align="right"
            >
                {
                    <>
                        {icon}
                        {copyIcon}
                    </>
                }
            </TableCell>
        </TableRow>
    );
};

export default PasswordDataRow;