import * as React from 'react';

import {actionScreen} from "../../../utils/Constants";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';

import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const _inline = {display: 'inline'};
const _bold = {fontWeight: 800};

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                <GppBadTwoToneIcon/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <NavigateNextTwoToneIcon/>
                            </IconButton>
                        }
                        title="Weak Passwords"
                        subheader="Easy to guess"
                    />
                    <CardContent>
                        <Typography variant="h4" color="text.secondary">
                            <Box sx={[_inline, _bold]}>2</Box>
                            <Box sx={_inline}> accounts</Box>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                <ContentCopyTwoToneIcon/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <NavigateNextTwoToneIcon/>
                            </IconButton>
                        }
                        title="Reused Passwords"
                        subheader="Easy to guess"
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
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                <WatchLaterTwoToneIcon/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <NavigateNextTwoToneIcon/>
                            </IconButton>
                        }
                        title="Old Passwords"
                        subheader="Easy to guess"
                    />
                    <CardContent>
                        <Typography variant="h4" color="text.secondary">
                            <Box sx={[_inline, _bold]}>1</Box>
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