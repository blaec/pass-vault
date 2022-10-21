import React from 'react';

import {convertToPassword} from "../../../utils/Utils";
import IconCopy from "../../../UI/IconButtons/IconCopy";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Chip} from "@mui/material";
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import {passwordAge} from "../../../utils/Constants";


const ItemDataRow = (props) => {
    const {id, description, value, isHideIcons, isHidden, icon, passwordUpdateCounter} = props;

    const _description = {width: '25%'};
    const _value = {width: '65%'};
    const _icons = {width: '10%'};

    let displayValue = isHidden
        ? convertToPassword(value)
        : value;
    if (passwordUpdateCounter < passwordAge.error) {
        displayValue = (
            <Chip
                icon={<ErrorTwoToneIcon/>}
                color="error"
                variant="outlined"
                label={displayValue}
            />
        );
    } else if (passwordUpdateCounter < passwordAge.warning) {
        displayValue = (
            <Chip
                icon={<WarningTwoToneIcon/>}
                color="warning"
                variant="outlined"
                label={displayValue}
            />
        );
    }
    const icons = isHideIcons
        ? null
        : (
            <>
                {icon}
                <IconCopy copyValue={value}/>
            </>
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
                {displayValue}
            </TableCell>
            <TableCell
                style={_icons}
                align="right"
            >
                {icons}
            </TableCell>
        </TableRow>
    );
};

export default ItemDataRow;