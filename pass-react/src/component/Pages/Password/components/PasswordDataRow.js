import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


const PasswordDataRow = (props) => {
    const {id, description, value, icons} = props;

    const _description = {width: '25%'};
    const _value = {width: '65%'};
    const _icons = {width: '10%'};

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
                {icons}
            </TableCell>
        </TableRow>
    );
};

export default PasswordDataRow;