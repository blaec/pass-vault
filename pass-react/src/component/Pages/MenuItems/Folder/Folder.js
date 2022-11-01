import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import FolderItem from "./FolderItem";
import {feedbackActions} from "../../../../store/state/feedback/feedback-slice";
import {itemActions} from "../../../../store/state/item/item-slice";
import {actionScreen} from "../../../../utils/Constants";

import {Card, Grid} from "@mui/material";
import List from "@mui/material/List";

const _root = {
    flexGrow: 1,
    maxWidth: actionScreen.width
};


const Folder = () => {
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
    const {response, hasResponse} = useSelector(state => state.item.result);
    const onSetSnackbar = (snackbar) => dispatch(feedbackActions.setSnackbar(snackbar));

    const dispatch = useDispatch();

    useEffect(() => {
        if (hasResponse) {
            const {message, success} = response;
            const type = success ? 'success' : 'error';
            onSetSnackbar({message, type});
            dispatch(itemActions.resetResult());
        }
    }, [hasResponse])

    let folderItems = null;
    if (isFoldersLoaded) {
        folderItems = folders.map(folder => (
            <FolderItem
                key={folder.id}
                id={folder.id}
                folder={folder.name}
            />
        ));
        folderItems.unshift(
            <FolderItem
                key='0'
                id='0'
                folder="Create new folder..."
                isNew={true}
            />
        )
    }


    return (
        <Grid container justifyContent="center">
            <Grid item sx={_root}>
                <Card>
                    <List>
                        {folderItems}
                    </List>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Folder;