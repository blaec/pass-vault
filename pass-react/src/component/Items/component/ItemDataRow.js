import React from 'react';

import {convertToPassword} from "../../../utils/Utils";
import IconCopy from "../../../UI/IconButtons/IconCopy";
import {passwordAgeLevel} from "../../../utils/Constants";
import ColorizedPass from "../../../UI/ColorizedPass";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Chip} from "@mui/material";
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';

const _description = {width: '25%'};
const _value = {width: '65%'};
const _icons = {width: '10%'};
const updateByAge = (value, age) => {
    let output = value;
    if (age < passwordAgeLevel.error) {
        output = (
            <Chip
                icon={<ErrorTwoToneIcon/>}
                color="error"
                variant="outlined"
                label={value}
            />
        );
    } else if (age < passwordAgeLevel.warning) {
        output = (
            <Chip
                icon={<WarningTwoToneIcon/>}
                color="warning"
                variant="outlined"
                label={value}
            />
        );
    }

    return output;
}


const ItemDataRow = (props) => {
    const {id, description, value, passwordAgeLeft, icon, isHideIcons, isHidden, isPassword} = props;

    let displayValue = isHidden
        ? convertToPassword(value)
        : isPassword ? <ColorizedPass pass={value}/> : value;
    displayValue = updateByAge(displayValue, passwordAgeLeft);
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