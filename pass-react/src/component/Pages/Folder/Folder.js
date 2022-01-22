import React from 'react';
import {Avatar, Grid, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Folder = () => {
    const dense = false;
    const secondary = false;

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid item xs={12} md={6}>
                <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                    Avatar with text and icon
                </Typography>
                <List dense={dense}>
                    {generate(
                        <ListItem
                            secondaryAction={
                                <Box>
                                    <IconButton edge="end" sx={{ml: 2, color: 'green'}}>
                                        <EditTwoToneIcon/>
                                    </IconButton>
                                    <IconButton edge="end" sx={{ml: 2, color: 'red'}}>
                                        <DeleteTwoToneIcon/>
                                    </IconButton>
                                </Box>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderTwoToneIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Single-line item"
                                secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>,
                    )}
                </List>
            </Grid>
        </Box>
    );
};

export default Folder;