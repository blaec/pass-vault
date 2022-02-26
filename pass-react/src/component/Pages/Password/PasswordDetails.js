import React from 'react';

import {isObjectExist} from "../../../utils/Utils";

import {Drawer, Table, TableContainer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFileMoveTwoToneIcon from "@mui/icons-material/DriveFileMoveTwoTone";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, onClose} = props;

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

    return (
        <Drawer
            anchor='right'
            open={showDetails}
            onClose={onClose}
        >
            <Toolbar />
            <Box
                sx={{ width: 1250, m: 2 }}
                // role="presentation"
                // onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
            >
                <IconButton color="primary" onClick={onClose}>
                    <CancelTwoToneIcon />
                </IconButton>
                <IconButton color="primary" onClick={onClose}>
                    <EditTwoToneIcon />
                </IconButton>
                <IconButton color="primary" onClick={onClose}>
                    <DriveFileMoveTwoToneIcon />
                </IconButton>
                <Typography variant="h3" color="primary" align="center">{selectedPassword.title}</Typography>
                {list}
            </Box>
        </Drawer>
    );
};

export default PasswordDetails;