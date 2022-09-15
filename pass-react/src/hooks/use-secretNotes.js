import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import {toolbarHeight} from "../utils/Constants";
import PasswordDetails from "../component/Items/PasswordDetails";
import {reactLinks} from "../utils/UrlUtils";

import {DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {secretNoteActions} from "../store/state/secretNote/secret-note-slice";


const columns = [
    {
        field: 'title',
        headerName: 'Title',
        width: 260,
        description: 'secret note name',

    },
    {
        field: 'creationDate',
        headerName: 'Creation date',
        width: 130,
        description: 'secret note creation date',
    },
];

const useSecretNotes = (item, folderId) => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [selectedSecretNote, setSelectedSecretNote] = React.useState({});
    const [isShowSecretNote, setIsShowSecretNote] = React.useState(false);

    const {secretNotes, isSecretNotesLoaded} = useSelector(state => state.secretNote[item]);
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
        const selected = secretNotes.find(note => note.id === id);
        setSelectedSecretNote(selected);
        dispatch(secretNoteActions.setEditableSecretNote(selected));
        setShowDetails(true);
    };

    const handleEditSecretNote = () => {
        navigate(reactLinks.newSecretNote);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        dispatch(secretNoteActions.resetEditableSecretNote());
        setIsShowSecretNote(false);
    };

    const handleShowSecretNote = () => {
        setIsShowSecretNote(!isShowSecretNote);
    };

    const handleAddNewSecretNote = () => {
        dispatch(secretNoteActions.resetEditableSecretNote());
    };

    let table = null;
    let folderName;
    if (isSecretNotesLoaded && isFoldersLoaded) {
        table = (
            <>
                <DataGrid
                    rows={secretNotes}
                    columns={columns}
                    hideFooterPagination={true}
                    disableSelectionOnClick={true}
                    onRowClick={handleRowClick}
                />
                <PasswordDetails
                    selectedPassword={selectedSecretNote}
                    showDetails={showDetails}
                    isShowPassword={isShowSecretNote}
                    onEdit={handleEditSecretNote}
                    onShowHidePassword={handleShowSecretNote}
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
                    {folderName ?? "Secret Notes"}
                </Typography>
                <Button
                    variant="outlined"
                    component={NavLink}
                    onClick={handleAddNewSecretNote}
                    to={`${reactLinks.newSecretNote}`}
                >
                    Add Secret Note
                </Button>
            </Grid>
            {table}
        </Box>
    );
};

export default useSecretNotes;