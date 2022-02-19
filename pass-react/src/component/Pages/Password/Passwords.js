import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {Drawer} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
                    <Box
                        sx={{ width: 1250 }}
                        // role="presentation"
                        // onClick={toggleDrawer(anchor, false)}
                        // onKeyDown={toggleDrawer(anchor, false)}
                    >
                        <Button onClick={handleCloseDetails}>Cancel</Button>
                        <Box>
                            {selectedPassword.title}
                        </Box>
                        <Box>
                            {selectedPassword.user}
                        </Box>
                        <Box>
                            {selectedPassword.password}
                        </Box>
                        <Box>
                            {selectedPassword.note}
                        </Box>
                        <Box>
                            {selectedPassword.creationDate}
                        </Box>
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