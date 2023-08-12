import * as React from 'react';
import {useSelector} from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
    const {passwordHistory} = useSelector(state => state.passwordHistory.passwordHistory);


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Creation date</TableCell>
                        <TableCell>Expiration date</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {passwordHistory.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.creationDate}
                            </TableCell>
                            <TableCell>{row.expirationDate}</TableCell>
                            <TableCell>{row.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}