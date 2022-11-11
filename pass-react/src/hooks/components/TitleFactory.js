import React from 'react';

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";


const TitleFactory = (props) => {
    const {typedTitle, folders, folderId, itemKey, size} = props;

    const title = {
        ['items']: () => typedTitle,
        ['deletedItems']: () => "Trash",
        ['itemsInFolder']: () => `Folder: ${folders.find(folder => folder.id === parseInt(folderId))?.name}`,
        ['weakPasswords']: () => "Weak Passwords",
        ['reusedPasswords']: () => "Reused Passwords",
        ['oldPasswords']: () => "Old Passwords",
    };


    return (
        <Grid
            item
            container
            direction="row"
            spacing={1}
        >
            <Grid item>
                <Avatar>
                    {size}
                </Avatar>
            </Grid>
            <Grid item>
                <Typography variant={"h5"}>
                    {title[itemKey]()}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default TitleFactory;