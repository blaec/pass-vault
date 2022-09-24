import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import {itemType, toolbarHeight} from "../utils/Constants";
import PasswordDetails from "../component/Items/PasswordDetails";
import {reactLinks} from "../utils/UrlUtils";
import {passgenActions} from "../store/state/passgen/passgen-slice";
import {fetchPasswordStrength} from "../store/state/passgen/passgen-actions";
import {itemActions} from "../store/state/item/item-slice";

import {DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const columns = [
    {
        field: 'title',
        headerName: 'Title',
        width: 260,
        description: 'item name',

    },
    {
        field: 'creationDate',
        headerName: 'Creation date',
        width: 130,
        description: 'item creation date',
    },
];

const useItems = (type, itemKey, folderId) => {
    const [isShowDetails, setIsShowDetails] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState({});
    const [isShowSecretInput, setIsShowSecretInput] = React.useState(false);

    const {passwords, secretNotes, creditCards, isLoaded} = useSelector(state => state.item[itemKey]);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const store = {
        [itemType.passwords]: {
            items: passwords,
            active: type === itemType.passwords,
            newItemLink: reactLinks.newPassword,
            title: 'Passwords',
        },
        [itemType.secretNotes]: {
            items: secretNotes,
            active: type === itemType.secretNotes,
            newItemLink: reactLinks.newSecretNote,
            title: 'Secret Notes',
        },
        [itemType.creditCards]: {
            items: creditCards,
            active: type === itemType.creditCards,
            newItemLink: reactLinks.newPassword,
            title: 'Credit Cards',
        }
    };

    const _root = {
        height: window.innerHeight - toolbarHeight.desktop,
        width: '100%',
    };
    const _title = {p: 2};

    const handleRowClick = (params) => {
        const {row: {id}} = params;
        const {items, active} = store[type];

        const selected = items.find(item => item.id === id);
        setIsShowDetails(true);
        setSelectedItem(selected);
        dispatch(itemActions.setEditableItem(selected));
        if (active) {
            dispatch(fetchPasswordStrength(selected.password));
        }
    };

    const handleEditItem = () => {
        navigate(store[type].newItemLink);
    };

    const handleCloseDetails = () => {
        setIsShowDetails(false);
        dispatch(itemActions.resetEditableItem());
        setIsShowSecretInput(false);
    };

    const handleShowSecretInput = () => {
        setIsShowSecretInput(!isShowSecretInput);
    };

    const handleAddNewItem = () => {
        dispatch(itemActions.resetEditableItem());
    };

    useEffect(() => {
        if (store[type].active) {
            dispatch(passgenActions.resetStrength());
        }
    }, []);

    let table = null;
    let folderName;
    if (isLoaded && isFoldersLoaded) {
        table = (
            <>
                <DataGrid
                    rows={store[type].items}
                    columns={columns}
                    hideFooterPagination={true}
                    disableSelectionOnClick={true}
                    onRowClick={handleRowClick}
                />
                <PasswordDetails
                    selectedPassword={selectedItem}
                    showDetails={isShowDetails}
                    isShowPassword={isShowSecretInput}
                    onEdit={handleEditItem}
                    onShowHidePassword={handleShowSecretInput}
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
                    {folderName ?? store[type].title}
                </Typography>
                <Button
                    variant="outlined"
                    component={NavLink}
                    onClick={handleAddNewItem}
                    to={`${reactLinks.newPassword}`}
                >
                    Add Password
                </Button>
            </Grid>
            {table}
        </Box>
    );
};

export default useItems;