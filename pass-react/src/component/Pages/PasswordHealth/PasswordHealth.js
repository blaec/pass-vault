import * as React from 'react';

import {actionScreen} from "../../../utils/Constants";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';


const _inline = {display: 'inline'};
const _bold = {fontWeight: 800};

const _root = {
    width: actionScreen.width,
    pt: 1,
    margin: 'auto',
};

const PasswordHealth = () => {

    return (
        <Box sx={_root}>
        <Grid
            container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: 'error.light'}} aria-label="recipe">
                                <GppBadTwoToneIcon/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <NavigateNextTwoToneIcon/>
                            </IconButton>
                        }
                        sx={{color: 'error.light'}}
                        title="Weak Passwords"
                        subheader="Easy to guess"
                    />
                    <CardContent>
                        <Typography variant="h4" color="text.secondary">
                            <Box sx={[_inline, _bold]}>1</Box>
                            <Box sx={_inline}> account</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: 'warning.light'}} aria-label="recipe">
                                <ContentCopyTwoToneIcon/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <NavigateNextTwoToneIcon/>
                            </IconButton>
                        }
                        sx={{color: 'warning.light'}}
                        title="Reused Passwords"
                        subheader="Used for multiple accounts"
                    />
                    <CardContent>
                        <Typography variant="h4" color="text.secondary">
                            <Box sx={[_inline, _bold]}>5</Box>
                            <Box sx={_inline}> accounts</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: 'secondary.main'}} aria-label="recipe">
                                <WatchLaterTwoToneIcon/>
                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <NavigateNextTwoToneIcon/>
                        //     </IconButton>
                        // }
                        sx={{color: 'secondary.main'}}
                        title="Old Passwords"
                        subheader="Over 180 days old"
                    />
                    <CardContent>
                        <Typography variant="h4" color="text.secondary">
                            <Box sx={[_inline, _bold]}>0</Box>
                            <Box sx={_inline}> accounts</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Box>
    );
};

export default PasswordHealth;