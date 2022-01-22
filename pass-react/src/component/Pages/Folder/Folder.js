import React from 'react';

import FolderItem from "./FolderItem";

import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const folders = ['Site', 'Application'];

const Folder = () => {
    const folderItems = folders.map(folder => <FolderItem folder={folder}/>);
    folderItems.push(<FolderItem folder="Create new folder..." isNew={true}/>)

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