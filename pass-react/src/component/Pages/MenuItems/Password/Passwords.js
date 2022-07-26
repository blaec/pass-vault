import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";

import {toolbarHeight} from "../../../../utils/Constants";
import PasswordDetails from "./components/PasswordDetails";
import {reactLinks} from "../../../../utils/UrlUtils";
import {passwordActions} from "../../../../store/state/password/password-slice";

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
    const {folderId} = useParams();
    console.log(folderId);
    const [showDetails, setShowDetails] = React.useState(false);
    const [selectedPassword, setSelectedPassword] = React.useState({});
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    const {passwords, isPasswordsLoaded} = useSelector(state => state.password.passwords);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _root = {
        height: window.innerHeight - toolbarHeight.desktop,
        width: '100%',
    };
    const _title = {p: 2};

    const handleRowClick = (params) => {
        const {row: {id}} = params;
        const selected = passwords.find(pass => pass.id === id);
        setSelectedPassword(selected);
        dispatch(passwordActions.setEditablePassword(selected));
        setShowDetails(true);
    };

    const handleEditPassword = () => {
        navigate(reactLinks.newPassword);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        dispatch(passwordActions.resetEditablePassword());
        setIsShowPassword(false);
    };

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
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
                    isShowPassword={isShowPassword}
                    onEdit={handleEditPassword}
                    onShowHidePassword={handleShowPassword}
                    onClose={handleCloseDetails}
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