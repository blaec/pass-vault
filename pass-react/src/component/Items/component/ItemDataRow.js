import React from 'react';

import {convertToPassword} from "../../../utils/Utils";
import IconCopy from "../../../UI/IconButtons/IconCopy";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


const ItemDataRow = (props) => {
    const {id, description, value, isHideIcons, isHidden, icon} = props;

    const _description = {width: '25%'};
    const _value = {width: '65%'};
    const _icons = {width: '10%'};

    const displayValue = isHidden
        ? convertToPassword(value)
        : value;


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