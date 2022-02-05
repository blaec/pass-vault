import React from 'react';
import {useSelector} from "react-redux";

import FolderItem from "./FolderItem";

import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const Folder = () => {
    const root = {flexGrow: 1, maxWidth: 752};
    const header = {mt: 4, mb: 2};

    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

    let folderItems = null;
    if (isFoldersLoaded) {
        folderItems = folders.map(folder => (
            <FolderItem
                key={folder.id}
                id={folder.id}
                folder={folder.name}
            />
        ));
        folderItems.push(
            <FolderItem
                key='0'
                id='0'
                folder="Create new folder..."
                isNew={true}
            />
        )
    }

    return (
        <Box sx={root}>
            <Grid item xs={12} md={6}>
                <Typography sx={header} variant="h6" component="div">
                    Folders list
                </Typography>
                <List>
                    {folderItems}
                </List>
            </Grid>
        </Box>
    );
};

export default Folder;