import React from 'react';

import {drawer, passwordSideBar} from "../../utils/Constants";
import ItemControls from "./component/ItemControls";

import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Drawer, Table, TableContainer} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const _RootBox = styled(Box)(({theme}) => ({
    m: 2,
    [theme.breakpoints.down('sm')]: {
        width: window.innerWidth,
    },
    [theme.breakpoints.up('sm')]: {
        width: Math.min(window.innerWidth - drawer.width, passwordSideBar.maxWidth),
    },
}));


const ItemDetails = (props) => {
    const {itemId, itemTitle, itemDetails, showDetails, onEdit, onClose} = props;

    const details = (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {itemDetails}
                </TableBody>
                <TableFooter>
                </TableFooter>
            </Table>
        </TableContainer>
    );


    return (
        <Drawer
            anchor='right'
            open={showDetails}
            onClose={onClose}
        >
            <Toolbar/>
            <ItemControls
                id={itemId}
                onEdit={onEdit}
                onClose={onClose}
            />
            <_RootBox>
                <Typography
                    color="primary"
                    variant="h3"
                    align="center"
                >
                    {itemTitle}
                </Typography>
                {details}
            </_RootBox>
        </Drawer>
    );
};

export default ItemDetails;