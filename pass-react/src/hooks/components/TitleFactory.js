import React from 'react';

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";


const TitleFactory = (props) => {
    const {typedTitle, folders, folderId, itemKey, size} = props;

    const title = {
        ["items"]: {
            title: () => typedTitle,
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


    return (
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
                    {size}
                </Avatar>
            </Grid>
        </Grid>
    );
};

export default TitleFactory;