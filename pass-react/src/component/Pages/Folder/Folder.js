import React from 'react';

import FolderItem from "./FolderItem";

import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const generate = (element) => {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const folders = {
    site: 'site',
    app: 'application',

};

const Folder = () => {
    const dense = false;

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid item xs={12} md={6}>
                <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                    Avatar with text and icon
                </Typography>
                <List dense={dense}>
                    {generate(<FolderItem/>)}
                </List>
            </Grid>
        </Box>
    );
};

export default Folder;