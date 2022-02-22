import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {Drawer, Table, TableContainer} from "@mui/material";
import Box from "@mui/material/Box";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import IconButton from "@mui/material/IconButton";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {isObjectExist} from "../../../utils/Utils";
import Toolbar from "@mui/material/Toolbar";
import {toolbarHeight} from "../../../utils/Constants";
import Typography from "@mui/material/Typography";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DriveFileMoveTwoToneIcon from '@mui/icons-material/DriveFileMoveTwoTone';

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
                        <TableCell style={{width: 100}} align="left">
                            {selectedPassword.user}
                        </TableCell>
                        <TableCell style={{width: 10}} align="right">
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow key={selectedPassword.id}>
                        <TableCell  style={{width: 60}}>
                            Password
                        </TableCell>
                        <TableCell style={{width: 100}} align="left">
                            {selectedPassword.password}
                        </TableCell>
                        <TableCell style={{width: 10}} align="right">
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
                        <TableCell style={{width: 100}} align="left">
                            {selectedPassword.website}
                        </TableCell>
                        <TableCell style={{width: 10}} align="right">
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow key={selectedPassword.id}>
                        <TableCell  style={{width: 60}}>
                            Folder
                        </TableCell>
                        <TableCell style={{width: 100}} align="left">
                            {selectedPassword.folder.name}
                        </TableCell>
                        <TableCell style={{width: 10}} align="right">
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </>
            );

        list = (
            <TableContainer component={Paper}>
                <Table>
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
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    hideFooterPagination={true}
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
                        sx={{ width: 1250, m: 2 }}
                        // role="presentation"
                        // onClick={toggleDrawer(anchor, false)}
                        // onKeyDown={toggleDrawer(anchor, false)}
                    >
                        <IconButton color="primary" onClick={handleCloseDetails}>
                            <CancelTwoToneIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={handleCloseDetails}>
                            <EditTwoToneIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={handleCloseDetails}>
                            <DriveFileMoveTwoToneIcon />
                        </IconButton>
                        <Typography variant="h3" color="primary" align="center">{selectedPassword.title}</Typography>
                        {list}
                    </Box>
                </Drawer>
            </>
        );
    }

    return (
        <Box sx={{
            height: window.innerHeight - toolbarHeight.desktop,
            width: '100%',
        }}>
            <Typography variant={"h5"} sx={{m:2}}>
                Passwords
            </Typography>
            {data}
        </Box>
    );
};

export default Passwords;