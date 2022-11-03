import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";

import {initialLocation} from "../store/localStorage/actions";
import {itemType, toolbarHeight} from "../utils/Constants";
import {isTrash, reactLinks} from "../utils/UrlUtils";
import {passgenActions} from "../store/state/passgen/passgen-slice";
import {fetchPasswordStrength} from "../store/state/passgen/passgen-actions";
import {itemActions} from "../store/state/item/item-slice";
import DetailsFactory from "../component/Items/DetailsFactory";
import {feedbackActions} from "../store/state/feedback/feedback-slice";
import {filterTypedCollection} from "../utils/Utils";
import TrashDialog from "../UI/dialogs/TrashDialog";

import {DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {Grid, SpeedDial, SpeedDialAction} from "@mui/material";
import Typography from "@mui/material/Typography";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import StickyNote2TwoToneIcon from '@mui/icons-material/StickyNote2TwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import {styled} from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import ClearAllTwoToneIcon from '@mui/icons-material/ClearAllTwoTone';

const _root = {
    height: {
        xs: window.innerHeight - toolbarHeight.mobile - 20,  // TODO fix hardcoding
        sm: window.innerHeight - toolbarHeight.desktop - 88, // TODO fix hardcoding
    },
    width: '100%',
};
const _title = {p: 1};
const _speedDial = {
    position: 'relative',
    mt: 1,
    height: {
        xs: toolbarHeight.mobile,
        sm: toolbarHeight.desktop,
    }
};
const _iconStyle = {opacity: .5};
const icons = {
    [itemType.passwords]: <VpnKeyTwoToneIcon sx={_iconStyle}/>,
    [itemType.secureNotes]: <StickyNote2TwoToneIcon sx={_iconStyle}/>,
    [itemType.creditCards]: <CreditCardTwoToneIcon sx={_iconStyle}/>,
    [itemType.all]: <AppsTwoToneIcon sx={_iconStyle}/>,
};
const columns = [
    {
        field: 'avatar',
        headerName: 'Type',
        width: 60,
        description: 'item type',
        renderCell: (params) => {
            return (
                icons[params.row.type]
            );
        }
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
        description: 'item name',

    },
    {
        field: 'creationDate',
        headerName: 'Creation date',
        width: 130,
        description: 'item creation date',
    },
];
const trashActions = [
    {
        icon: <DeleteSweepTwoToneIcon/>,
        name: 'Empty Trash',
        newItemLink: reactLinks.newPassword,
    },
];

const actions = [
    {
        icon: <VpnKeyTwoToneIcon/>,
        name: 'New Password',
        newItemLink: reactLinks.newPassword,
    },
    {
        icon: <StickyNote2TwoToneIcon/>,
        name: 'New Secure Note',
        newItemLink: reactLinks.newSecureNote,
    },
    {
        icon: <CreditCardTwoToneIcon/>,
        name: 'New Credit Card',
        newItemLink: reactLinks.newCreditCard,
    },
];
const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(1),
        right: theme.spacing(1),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(1),
        left: theme.spacing(1),
    },
}));


const useItems = (type, itemKey, folderId) => {
    const {pathname} = useLocation();
    initialLocation.set(pathname);

    const [isShowDetails, setIsShowDetails] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState({});
    const [dialog, setDialog] = React.useState({
        title: 'Empty Trash?',
        ok: 'Empty Trash',
        message: 'This will delete all items in your Trash and you will no longer be able to restore them',
        isOpen: false
    });

    const {passwords, secureNotes = [], creditCards = [], isLoaded} = useSelector(state => state.item[itemKey]);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
    const {response, hasResponse} = useSelector(state => state.item.result);
    const {search} = useSelector(state => state.filter.search);
    const onSetSnackbar = (snackbar) => dispatch(feedbackActions.setSnackbar(snackbar));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const typedPasswords = filterTypedCollection(passwords, itemType.passwords, search);
    const typedSecureNotes = filterTypedCollection(secureNotes, itemType.secureNotes, search);
    const typedCreditCards = filterTypedCollection(creditCards, itemType.creditCards, search);
    const store = {
        [itemType.passwords]: {
            items: typedPasswords,
            editItemLink: reactLinks.editPassword,
            title: 'Passwords',
        },
        [itemType.secureNotes]: {
            items: typedSecureNotes,
            editItemLink: reactLinks.editSecureNote,
            title: 'Secure Notes',
        },
        [itemType.creditCards]: {
            items: typedCreditCards,
            editItemLink: reactLinks.editCreditCard,
            title: 'Credit Cards',
        },
        [itemType.all]: {
            items: typedPasswords.concat(typedSecureNotes, typedCreditCards),
            // editItemLink: reactLinks.editPassword,   // todo find solution for this
            title: 'All items',
        },
    };
    const title = {
        ["items"]: {
            title: () => store[type].title,
        },
        ["deletedItems"]: {
            title: () => "Trash",
        },
        ['itemsInFolder']: {
            title: () => `Folder: ${folders.find(folder => folder.id === parseInt(folderId))?.name}`,
        },
        ['weakPasswords']: {
            title: () => "Weak Passwords",
        },
        ['reusedPasswords']: {
            title: () => "Reused Passwords",
        },
        ['oldPasswords']: {
            title: () => "Old Passwords",
        },
    };

    const handleRowClick = (params) => {
        const {row: {id}} = params;
        const {items} = store[type];

        const selected = items.find(item => item.id === id);
        setIsShowDetails(true);
        setSelectedItem(selected);
        dispatch(itemActions.setEditableItem(selected));
        if (selected.type === itemType.passwords) {
            dispatch(fetchPasswordStrength(selected.password));
        }
    };

    const handleEditItem = () => {
        const selectedType = selectedItem?.type || type;
        navigate(store[selectedType].editItemLink);
    };

    const handleCloseDetails = () => {
        setIsShowDetails(false);
        dispatch(itemActions.resetEditableItem());
    };

    const handleCloseDialog = () => {
        setDialog({...dialog, isOpen: false})
    };

    const handleAddNewItem = () => {
        dispatch(itemActions.resetEditableItem());
    };

    const handlePrepareEmptyTrash = () => {
        setDialog({...dialog, isOpen: true});
    };

    const handleEmptyTrash = () => {
        alert("not implemented");
        handleCloseDialog();
    };

    useEffect(() => {
        if (store[type].useStrength) {
            dispatch(passgenActions.resetStrength());
        }
    }, []);

    useEffect(() => {
        if (hasResponse) {
            const {message, success} = response;
            const type = success ? 'success' : 'error';
            onSetSnackbar({message, type});
            dispatch(itemActions.resetResult());
        }
    }, [hasResponse]);

    useEffect(() => {
        if (store[type].items.length === 0) {
            dispatch(feedbackActions.setSnackbar({message: 'Nothing found', type: 'warning'}));
        }
    }, [search]);

    let table = null;
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
                    onEdit={handleEditItem}
                    onClose={handleCloseDetails}
                />
                <TrashDialog
                    dialog={dialog}
                    onCancel={handleCloseDialog}
                    onDelete={handleEmptyTrash}
                />
            </>
        );
    }
    const titleElement = (
        <Grid
            item
            container
            direction="row"
            spacing={1}
        >
            <Grid item>
                <Typography variant={"h5"}>
                    {title[itemKey].title()}
                </Typography>
            </Grid>
            <Grid item>
                <Avatar>
                    {store[type].items.length}
                </Avatar>
            </Grid>
        </Grid>
    );
    const actionElement =
        isTrash(pathname)
            ? (
                <Box sx={_speedDial}>
                    <StyledSpeedDial
                        ariaLabel="new items SpeedDial"
                        icon={<SpeedDialIcon openIcon={<ClearAllTwoToneIcon />}/>}
                        direction={'left'}
                    >
                        {trashActions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={handlePrepareEmptyTrash}
                            />
                        ))}
                    </StyledSpeedDial>
                </Box>
            )
            : (
                <Box sx={_speedDial}>
                    <StyledSpeedDial
                        ariaLabel="new items SpeedDial"
                        icon={<SpeedDialIcon/>}
                        direction={'left'}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                component={NavLink}
                                onClick={handleAddNewItem}
                                to={action.newItemLink}
                            />
                        ))}
                    </StyledSpeedDial>
                </Box>
            );


    return (
        <Box sx={_root}>
            <Grid
                sx={_title}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                {titleElement}
                {actionElement}
            </Grid>
            {table}
        </Box>
    );
};

export default useItems;