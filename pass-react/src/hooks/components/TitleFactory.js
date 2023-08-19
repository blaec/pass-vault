import React from 'react';
import {useSelector} from "react-redux";

import {Chip, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const _root = {mt: 0.5};


const TitleFactory = (props) => {
    const {typedTitle, folders, folderId, itemKey, size} = props;
    const {prod} = useSelector(state => state.auth.auth);

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
                <Stack direction="row" spacing={1}>
                    <Typography sx={_root} variant="h5">
                        {title[itemKey]()}
                    </Typography>
                    {!prod && <Chip label="DEV" color="error"/>}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default TitleFactory;