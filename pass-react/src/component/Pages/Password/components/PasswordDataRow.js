import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {TextField} from "@mui/material";


const PasswordDataRow = (props) => {
    const {id, description, value, icons, isEdit} = props;

    const _description = {width: 60};
    const _value = {width: 100};
    const _icons = {width: 10};

    return (
        <TableRow key={id}>
            <TableCell style={_description}>
                {description}
            </TableCell>
            <TableCell
                style={_value}
                align="left"
            >
                {isEdit
                    ? <TextField defaultValue={value}/>
                    : value}
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

export default PasswordDataRow;