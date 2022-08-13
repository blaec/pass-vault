import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import {toolbarHeight} from "../utils/Constants";
import {passwordActions} from "../store/state/password/password-slice";
import PasswordDetails from "../component/Items/PasswordDetails";
import {reactLinks} from "../utils/UrlUtils";

import {DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


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

const usePasswords = (item, folderId) => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [selectedPassword, setSelectedPassword] = React.useState({});
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    const {passwords, isPasswordsLoaded} = useSelector(state => state.password[item]);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

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

    const handleAddNewPassword = () => {
        dispatch(passwordActions.resetEditablePassword());
    };

    let table = null;
    let folderName;
    if (isPasswordsLoaded && isFoldersLoaded) {
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
        folderName = folders.find(folder => folder.id === parseInt(folderId))?.name;
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
                    {folderName ?? "Passwords"}
                </Typography>
                <Button
                    variant="outlined"
                    component={NavLink}
                    onClick={handleAddNewPassword}
                    to={`${reactLinks.newPassword}`}
                >
                    Add Password
                </Button>
            </Grid>
            {table}
        </Box>
    );
};

export default usePasswords;