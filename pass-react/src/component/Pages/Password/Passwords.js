import React from 'react';
import {useSelector} from "react-redux";

import {toolbarHeight} from "../../../utils/Constants";
import PasswordDetails from "./components/PasswordDetails";

import {DataGrid} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const columns = [
    {
        field: 'title',
        headerName: 'Title',
        width: 150,
        description: 'password name',

    },
    {
        field: 'creationDate',
        headerName: 'Creation date',
        width: 130,
        description: 'password creation date',
    },
];

const Passwords = () => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [selectedPassword, setSelectedPassword] = React.useState({});

    const {passwords, isPasswordsLoaded} = useSelector(state => state.password.passwords);

    const _root = {
        height: window.innerHeight - toolbarHeight.desktop,
        width: '100%',
    };
    const _title = {m: 2};

    const handleRowClick = (params) => {
        const {row: {id}} = params;
        setSelectedPassword(passwords.find(pass => pass.id === id));
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    let table = null;
    if (isPasswordsLoaded) {
        table = (
            <>
                <DataGrid
                    rows={passwords}
                    columns={columns}
                    hideFooterPagination={true}
                    checkboxSelection
                    disableSelectionOnClick={true}
                    onRowClick={handleRowClick}
                />
                <PasswordDetails
                    selectedPassword={selectedPassword}
                    showDetails={showDetails}
                    onClose={handleCloseDetails}
                />
            </>
        );
    }

    return (
        <Box sx={_root}>
            <Typography
                variant={"h5"}
                sx={_title}
            >
                Passwords
            </Typography>
            {table}
        </Box>
    );
};

export default Passwords;