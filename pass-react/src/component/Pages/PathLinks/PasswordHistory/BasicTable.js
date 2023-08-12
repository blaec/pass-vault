import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(creationDate, expirationDate, password) {
    return { creationDate, expirationDate, password };
}

const rows = [
    createData('2023-05-01', '2023-07-01', "qwerty"),
    createData('2023-03-22', '2023-05-01', "abi#13kdjTU"),
    createData('2023-02-11', '2023-03-22', "ab1413#"),
    createData('2023-02-01', '2023-02-11', "ababab"),
    createData('2023-01-01', '2023-02-01', "M9Hg2geeY8o9qDmT"),
];


export default function BasicTable() {


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
                    {rows.map((row) => (
                        <TableRow
                            key={row.creationDate}
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