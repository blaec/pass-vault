import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {Avatar, Drawer, ListItem, ListItemAvatar, ListItemText, Table, TableContainer} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import IconButton from "@mui/material/IconButton";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {isObjectExist} from "../../../utils/Utils";
import Toolbar from "@mui/material/Toolbar";

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    // { field: 'user', headerName: 'User', width: 130 },
    // { field: 'password', headerName: 'Password', width: 130 },
    // { field: 'website', headerName: 'Website', width: 130 },
    // { field: 'note', headerName: 'Note', width: 130 },
    { field: 'creationDate', headerName: 'Creation date', width: 130 },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];

const Passwords = () => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [selectedPassword, setSelectedPassword] = React.useState({});

    const {passwords, isPasswordsLoaded} = useSelector(state => state.password.passwords);

    const handleRowClick = (params) => {
        const {row: {id, title, user, password}} = params;
        setSelectedPassword(passwords.find(pass => pass.id === id));
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    let list = null;
    if (isObjectExist(selectedPassword)) {
        const rows = (
                <>
                    <TableRow key={selectedPassword.id}>
                        <TableCell  style={{width: 60}}>
                            Email or User
                        </TableCell>
                        <TableCell style={{width: 160}} align="left">
                            {selectedPassword.user}
                        </TableCell>
                        <TableCell style={{width: 160}} align="right">
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow key={selectedPassword.id}>
                        <TableCell  style={{width: 60}}>
                            Password
                        </TableCell>
                        <TableCell style={{width: 160}} align="left">
                            {selectedPassword.password}
                        </TableCell>
                        <TableCell style={{width: 160}} align="right">
                            <IconButton>
                                <VisibilityTwoToneIcon/>
                            </IconButton>
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow key={selectedPassword.id}>
                        <TableCell  style={{width: 60}}>
                            Website Address
                        </TableCell>
                        <TableCell style={{width: 160}} align="left">
                            {selectedPassword.website}
                        </TableCell>
                        <TableCell style={{width: 160}} align="right">
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow key={selectedPassword.id}>
                        <TableCell  style={{width: 60}}>
                            Folder
                        </TableCell>
                        <TableCell style={{width: 160}} align="left">
                            {selectedPassword.folder.name}
                        </TableCell>
                        <TableCell style={{width: 160}} align="right">
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </>
            );

        list = (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }}>
                    <TableBody>
                        {rows}
                    </TableBody>
                    <TableFooter>
                    </TableFooter>
                </Table>
            </TableContainer>
        );
    }

    let data = null;
    if (isPasswordsLoaded) {
        data = (
            <>
                <DataGrid
                    rows={passwords}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick={true}
                    onRowClick={handleRowClick}
                />
                <Drawer
                    anchor='right'
                    open={showDetails}
                    hideBackdrop={true}
                    // onClose={handleCloseDetails}
                    // onClose={toggleDrawer(anchor, false)}
                    // onOpen={toggleDrawer(anchor, true)}
                >
                    <Toolbar />
                    <Box
                        sx={{ width: 1250 }}
                        // role="presentation"
                        // onClick={toggleDrawer(anchor, false)}
                        // onKeyDown={toggleDrawer(anchor, false)}
                    >
                        <IconButton color="primary" onClick={handleCloseDetails}>
                            <CancelTwoToneIcon />
                        </IconButton>
                        {list}
                    </Box>
                </Drawer>
            </>
        );
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            {data}
        </div>
    );
};

export default Passwords;