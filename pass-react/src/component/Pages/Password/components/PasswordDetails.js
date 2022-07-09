import React from 'react';

import {isObjectExist} from "../../../../utils/Utils";
import PasswordDataRow from "./PasswordDataRow";
import PasswordControls from "./PasswordControls";

import {Drawer, Table, TableContainer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";


const PasswordDetails = (props) => {
    const {selectedPassword: {isEditable, passwordData}, showDetails, onClose, onEdit} = props;

    const _root = {width: 1250, m: 2};

    let details = null;
    if (isObjectExist(passwordData)) {
        const {id, user, password, website, folder, note} = passwordData;
        const passwordDetails = (
            <>
                <PasswordDataRow
                    id={id}
                    description={"Email or User"}
                    value={user}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                    isEdit={isEditable}
                />
                <PasswordDataRow
                    id={id}
                    description={"Password"}
                    value={password}
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
                    isEdit={isEditable}
                />
                <PasswordDataRow
                    id={id}
                    description={"Website Address"}
                    value={website}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                    isEdit={isEditable}
                />
                <PasswordDataRow
                    id={id}
                    description={"Folder"}
                    value={folder.name}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                />
                <PasswordDataRow
                    id={id}
                    description={"Note"}
                    value={note}
                    icons={
                        <IconButton>
                            <ContentCopyTwoToneIcon/>
                        </IconButton>
                    }
                    isEdit={isEditable}
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

    // TODO password may be undefined
    return (
        <Drawer
            anchor='right'
            open={showDetails}
            onClose={onClose}
        >
            <Toolbar/>
            <PasswordControls
                id={passwordData.id}
                onEdit={onEdit}
                onClose={onClose}
            />
            <Box sx={_root}>
                <Typography
                    color="primary"
                    variant="h3"
                    align="center"
                >
                    {passwordData.title}
                </Typography>
                {details}
            </Box>
        </Drawer>
    );
};

export default PasswordDetails;