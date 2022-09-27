import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import {itemType, toolbarHeight} from "../utils/Constants";
import {reactLinks} from "../utils/UrlUtils";
import {passgenActions} from "../store/state/passgen/passgen-slice";
import {fetchPasswordStrength} from "../store/state/passgen/passgen-actions";
import {itemActions} from "../store/state/item/item-slice";
import DetailsFactory from "../component/Items/DetailsFactory";

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
    const [isShowSecureInput, setIsShowSecureInput] = React.useState(false);

    const {passwords, secureNotes, creditCards, isLoaded} = useSelector(state => state.item[itemKey]);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const typedPasswords = passwords.map(p => ({...p, type: itemType.passwords}));
    const typedSecureNotes = secureNotes.map(p => ({...p, type: itemType.secureNotes}));
    const typedCreditCards = creditCards.map(p => ({...p, type: itemType.creditCards}));
    const store = {
        [itemType.passwords]: {
            items: typedPasswords,
            active: type === itemType.passwords,
            newItemLink: reactLinks.newPassword,
            editItemLink: reactLinks.editPassword,
            title: 'Passwords',
        },
        [itemType.secureNotes]: {
            items: typedSecureNotes,
            active: type === itemType.secureNotes,
            newItemLink: reactLinks.newSecureNote,
            editItemLink: reactLinks.editSecureNote,
            title: 'Secure Notes',
        },
        [itemType.creditCards]: {
            items: typedCreditCards,
            active: type === itemType.creditCards,
            newItemLink: reactLinks.newCreditCard,
            editItemLink: reactLinks.editCreditCard,
            title: 'Credit Cards',
        },
        [itemType.all]: {
            items: typedPasswords.concat(typedSecureNotes, typedCreditCards),
            active: type === itemType.all,
            newItemLink: reactLinks.newPassword,
            editItemLink: reactLinks.editCreditCard,
            title: 'All items',
        },
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
        navigate(store[type].editItemLink);
    };

    const handleCloseDetails = () => {
        setIsShowDetails(false);
        dispatch(itemActions.resetEditableItem());
        setIsShowSecureInput(false);
    };

    const handleShowSecureInput = () => {
        setIsShowSecureInput(!isShowSecureInput);
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
                <DetailsFactory
                    type={type}
                    selectedItem={selectedItem}
                    showDetails={isShowDetails}
                    isShowSecureInput={isShowSecureInput}
                    onEdit={handleEditItem}
                    handleShowSecureInput={handleShowSecureInput}
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
                    to={`${store[type].newItemLink}`}
                >
                    Add Item
                </Button>
            </Grid>
            {table}
        </Box>
    );
};

export default useItems;