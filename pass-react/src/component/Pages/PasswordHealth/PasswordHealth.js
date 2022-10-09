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

const _inline = {display: 'inline'};
const _bold = {fontWeight: 800};


const PasswordHealth = () => {

    return (
        <Grid container justifyContent="center">
        <Card sx={{width: actionScreen.width}}>
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
        {/*<Box sx={{ p: 2 , background:'lightGrey'}}>*/}
        {/*    <Grid container spacing={2} sx={{mt: 4}}>*/}
        {/*        <Typography>*/}
        {/*            Change vulnerable passwords to protect your accounts*/}
        {/*        </Typography>*/}
        {/*        <Grid item xs={12}>*/}
        {/*            <Item>Weak Passwords</Item>*/}
        {/*        </Grid>*/}
        {/*        <Grid item xs={12}>*/}
        {/*            <Item>Reused Passwords</Item>*/}
        {/*        </Grid>*/}
        {/*        <Grid item xs={12}>*/}
        {/*            <Item>Old Passwords</Item>*/}
        {/*        </Grid>*/}
        {/*    </Grid>*/}
        {/*</Box>*/}
        </Grid>
    );
};

export default PasswordHealth;