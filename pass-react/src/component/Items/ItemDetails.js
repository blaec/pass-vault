import React from 'react';

import {drawer, passwordSideBar} from "../../utils/Constants";
import ItemControls from "./component/itemControls/ItemControls";

import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Avatar, Drawer, Table, TableContainer} from "@mui/material";
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
const _inline = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily: 'Just Another Hand'
};
const _title = {ml: 1};
const _avatar = {ml: 2};


const ItemDetails = (props) => {
    const {itemId, itemTitle, itemDetails, showDetails, type, icon, onEdit, onClose} = props;

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

    let avatar = null
    if (icon) {
        avatar = (
            <Box sx={_avatar}>
                <Avatar
                    alt={`${icon}/favicon.ico`}
                    src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${icon}&size=64`}
                    variant="rounded"
                />
            </Box>
        );
    }


    return (
        <Drawer
            anchor='right'
            open={showDetails}
            onClose={onClose}
        >
            <Toolbar/>
            <ItemControls
                id={itemId}
                type={type}
                onEdit={onEdit}
                onClose={onClose}
            />
            <_RootBox>
                <Typography
                    sx={_inline}
                    color="primary"
                    variant="h3"
                >
                    {avatar}
                    <Box sx={_title}>
                        {itemTitle}
                    </Box>
                </Typography>
                {details}
            </_RootBox>
        </Drawer>
    );
};

export default ItemDetails;