import React from 'react';

import {convertToPassword, isObjectExist} from "../../../../utils/Utils";
import PasswordDataRow from "./PasswordDataRow";
import PasswordControls from "./PasswordControls";

import {Drawer, Table, TableContainer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, showPassword, onEdit, onShowHidePassword, onClose} = props;

    const _root = {width: 1250, m: 2};


    let details = null;
    if (isObjectExist(selectedPassword)) {
        const visibilityElement = showPassword
            ? <VisibilityOffTwoToneIcon/>
            : <VisibilityTwoToneIcon/>;
        const showHidePasswordIcon = (
            <IconButton
                onClick={onShowHidePassword}
                onMouseDown={onShowHidePassword}
            >
                {visibilityElement}
            </IconButton>
        );
        const passwordValue = showPassword
            ? selectedPassword.password
            : convertToPassword(selectedPassword.password);

        const passwordDetails = (
            <>
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Email or User"}
                    value={selectedPassword.user}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Password"}
                    value={passwordValue}
                    hiddenPassword={selectedPassword.password}
                    icon={showHidePasswordIcon}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Website Address"}
                    value={selectedPassword.website}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Folder"}
                    value={selectedPassword.folder.name}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Note"}
                    value={selectedPassword.note}
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
            <PasswordControls
                id={selectedPassword.id}
                onEdit={onEdit}
                onClose={onClose}
            />
            <Box sx={_root}>
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