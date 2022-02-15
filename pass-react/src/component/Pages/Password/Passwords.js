import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useSelector} from "react-redux";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'user', headerName: 'User', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
    { field: 'website', headerName: 'Website', width: 130 },
    { field: 'note', headerName: 'Note', width: 130 },
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
    const {passwords, isPasswordsLoaded} = useSelector(state => state.password.passwords);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={passwords}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default Passwords;