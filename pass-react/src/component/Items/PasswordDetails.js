import React from 'react';

import {isObjectExist} from "../../utils/Utils";
import PasswordDataRow from "./PasswordDataRow";
import PasswordControls from "./PasswordControls";
import IconVisibility from "../../UI/IconButtons/IconVisibility";
import PasswordStrength from "../Pages/Modals/PasswordGenerator/components/PasswordStrength";

import {Drawer, Table, TableContainer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, isShowPassword, onEdit, onShowHidePassword, onClose} = props;

    const _root = {width: 1250, m: 2};
    console.log(selectedPassword);

    let details = null;
    if (isObjectExist(selectedPassword)) {
        const showHidePasswordIcon = (
            <IconVisibility
                isShowPassword={isShowPassword}
                onShowHidePassword={onShowHidePassword}
            />
        );

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
                    value={selectedPassword.password}
                    isHidden={!isShowPassword}
                    icon={showHidePasswordIcon}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Website Address"}
                    value={selectedPassword.website}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Password security"}
                    isHideIcons={true}
                    value={<PasswordStrength/>}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Folder"}
                    isHideIcons={true}
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