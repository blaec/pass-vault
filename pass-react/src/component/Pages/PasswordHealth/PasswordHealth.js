import * as React from 'react';

import {actionScreen} from "../../../utils/Constants";
import HealthCard from "./HealthCard";

import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';

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
                <HealthCard
                    color="error.light"
                    icon={<GppBadTwoToneIcon/>}
                    title="Weak Passwords"
                    subtitle="Easy to guess"
                    count={1}
                />
                <HealthCard
                    color="warning.light"
                    icon={<ContentCopyTwoToneIcon/>}
                    title="Reused Passwords"
                    subtitle="Used for multiple accounts"
                    count={5}
                />
                <HealthCard
                    color="secondary.main"
                    icon={<WatchLaterTwoToneIcon/>}
                    title="Old Passwords"
                    subtitle="Over 180 days old"
                    count={0}
                />
            </Grid>
        </Box>
    );
};

export default PasswordHealth;