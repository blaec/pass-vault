import React from 'react';

import {isObjectExist} from "../../../../utils/Utils";
import PasswordDataRow from "./PasswordDataRow";

import {Drawer, Grid, Table, TableContainer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFileMoveTwoToneIcon from "@mui/icons-material/DriveFileMoveTwoTone";
import Typography from "@mui/material/Typography";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, onClose} = props;

    const _root = {width: 1250, m: 2};

    const handleEdit = () => {
        alert("edit");
    };

    const handleMoveToFolder = () => {
        alert("move to folder");
    };

    const handleDelete = () => {
        alert("delete password");
    };

    let details = null;
    if (isObjectExist(selectedPassword)) {
        const passwordDetails = (
            <>
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Email or User"}
                    value={selectedPassword.user}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Password"}
                    value={selectedPassword.password}
                    icons={
                        <>
                            <IconButton>
                                <VisibilityTwoToneIcon/>
                            </IconButton>
                            <IconButton>
                                <ContentCopyTwoToneIcon/>
                            </IconButton>
                        </>
                    }
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Website Address"}
                    value={selectedPassword.website}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Folder"}
                    value={selectedPassword.folder.name}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Note"}
                    value={selectedPassword.note}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                />
            </>
        );

        details = (
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {passwordDetails}
                    </TableBody>
                    <TableFooter>
                    </TableFooter>
                </Table>
            </TableContainer>
        );
    }

    return (
        <Drawer
            anchor='right'
            open={showDetails}
            onClose={onClose}
        >
            <Toolbar/>
            <Box sx={_root}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton
                        color="primary"
                        onClick={onClose}
                    >
                        <CancelTwoToneIcon/>
                    </IconButton>
                    <Box>
                        <IconButton
                            color="primary"
                            onClick={handleEdit}
                        >
                            <EditTwoToneIcon/>
                        </IconButton>
                        <IconButton
                            color="primary"
                            onClick={handleMoveToFolder}
                        >
                            <DriveFileMoveTwoToneIcon/>
                        </IconButton>
                        <IconButton
                            color="primary"
                            onClick={handleDelete}
                        >
                            <DeleteTwoToneIcon/>
                        </IconButton>
                    </Box>
                </Grid>
                <Typography
                    color="primary"
                    variant="h3"
                    align="center"
                >
                    {selectedPassword.title}
                </Typography>
                {details}
            </Box>
        </Drawer>
    );
};

export default PasswordDetails;