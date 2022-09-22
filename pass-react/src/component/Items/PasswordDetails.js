import React from 'react';
import {useSelector} from "react-redux";

import {isObjectExist} from "../../utils/Utils";
import PasswordDataRow from "./PasswordDataRow";
import PasswordControls from "./PasswordControls";
import IconVisibility from "../../UI/IconButtons/IconVisibility";
import PasswordStrength from "../Pages/Modals/PasswordGenerator/components/PasswordStrength";
import {drawer, passwordSideBar} from "../../utils/Constants";

import {CircularProgress, Drawer, Table, TableContainer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import { styled } from '@mui/material/styles';


const _RootBox = styled(Box)(({ theme }) => ({
    m: 2,
    [theme.breakpoints.down('sm')]: {
        width: window.innerWidth,
    },
    [theme.breakpoints.up('sm')]: {
        width: Math.min(window.innerWidth - drawer.width, passwordSideBar.maxWidth),
    },
}));


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, isShowPassword, onEdit, onShowHidePassword, onClose} = props;
    const {strength, isStrengthLoaded} = useSelector(state => state.passgen.strength);

    let details = null;
    if (isObjectExist(selectedPassword)) {
        const showHidePasswordIcon = (
            <IconVisibility
                isShowPassword={isShowPassword}
                onShowHidePassword={onShowHidePassword}
            />
        );

        const strengthElement = isStrengthLoaded
            ? <PasswordStrength strength={strength}/>
            : <CircularProgress size={'1rem'}/>;
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
                    description={"Password security"}
                    isHideIcons={true}
                    value={strengthElement}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Website Address"}
                    value={selectedPassword.website}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Folder"}
                    isHideIcons={true}
                    value={selectedPassword.folderName}
                />
                <PasswordDataRow
                    id={selectedPassword.id}
                    description={"Note"}
                    value={selectedPassword.note}
                />
                <PasswordDataRow
                    id={selectedPassword.creationDate}
                    description={"Creation date"}
                    isHideIcons={true}
                    value={selectedPassword.creationDate}
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
            <_RootBox>
                <Typography
                    color="primary"
                    variant="h3"
                    align="center"
                >
                    {selectedPassword.title}
                </Typography>
                {details}
            </_RootBox>
        </Drawer>
    );
};

export default PasswordDetails;