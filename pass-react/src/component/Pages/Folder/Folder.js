import React from 'react';


import {Box, Button, TextField} from "@material-ui/core";
import {Stack} from "@mui/material";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';


const Folder = () => {
    return (
        <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CreateNewFolderTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Folder name" variant="standard"/>
        </Box>
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" endIcon={<SaveTwoToneIcon />} color="primary">
                Send
            </Button>
        </Stack>
        </React.Fragment>
    );
};

export default Folder;