import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {toolbarHeight} from "../../../utils/Constants";
import PasswordDetails from "./components/PasswordDetails";
import {reactLinks} from "../../../utils/UrlUtils";

import {DataGrid} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";


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
    const [selectedPassword, setSelectedPassword] = React.useState({isEditable: false, passwordData: {}});

    const {passwords, isPasswordsLoaded} = useSelector(state => state.password.passwords);

    const _root = {
        height: window.innerHeight - toolbarHeight.desktop,
        width: '100%',
    };
    const _title = {p: 2};

    const handleRowClick = (params) => {
        const {row: {id}} = params;
        setSelectedPassword(
            {
                ...selectedPassword,
                passwordData: passwords.find(pass => pass.id === id)
            }
        );
        setShowDetails(true);
    };

    const handleEditPassword = (value) => {
        setSelectedPassword(
            {
                ...selectedPassword,
                isEditable: value
            }
        );
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        handleEditPassword(false);
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
                    onEdit={handleEditPassword}
                />
            </>
        );
    }

    return (
        <Box sx={_root}>
            <Grid
                sx={_title}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant={"h5"}
                >
                    Passwords
                </Typography>
                <Button
                    variant="outlined"
                    component={NavLink}
                    to={`${reactLinks.newPassword}`}
                >
                    Add Password
                </Button>
            </Grid>
            {table}
        </Box>
    );
};

export default Passwords;