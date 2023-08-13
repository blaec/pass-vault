import React from 'react';
import {useSelector} from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const _body = {
    '&:last-child td, &:last-child th': {border: 0}
};
const _minDateWidth = {minWidth: 106};


const HistoryData = () => {
    const {passwordHistory} = useSelector(state => state.passwordHistory.passwordHistory);

    const tableBody = passwordHistory.map((row, index) =>
        (
            <TableRow
                key={index}
                sx={_body}
            >
                <TableCell component="th" scope="row">
                    {row.creationDate}
                </TableCell>
                <TableCell>{row.expirationDate}</TableCell>
                <TableCell>{row.password}</TableCell>
            </TableRow>
        ));


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={_minDateWidth}>Creation date</TableCell>
                        <TableCell sx={_minDateWidth}>Expiration date</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableBody}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HistoryData;