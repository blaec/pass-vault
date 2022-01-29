import React from 'react';

import FolderItem from "./FolderItem";

import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const folders = [{name: 'Site', id: 1}, {name: 'Application', id: 2}];

const Folder = () => {
    const folderItems = folders.map(folder => (
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

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid item xs={12} md={6}>
                <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                    Avatar with text and icon
                </Typography>
                <List>
                    {folderItems}
                </List>
            </Grid>
        </Box>
    );
};

export default Folder;