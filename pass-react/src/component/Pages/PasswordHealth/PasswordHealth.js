import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {actionScreen} from "../../../utils/Constants";
import HealthCard from "./HealthCard";
import {fetchHealthItems} from "../../../store/state/item/item-actions";
import {reactLinks} from "../../../utils/UrlUtils";

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
    const {passwords: weakPasswords, isWeakLoaded} = useSelector(state => state.item.weakPasswords);
    const {passwords: reusedPasswords, isReusedLoaded} = useSelector(state => state.item.reusedPasswords);
    const {passwords: oldPasswords, isOldLoaded} = useSelector(state => state.item.oldPasswords);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHealthItems());
    }, []);

    let weakCard = null;
    if (isWeakLoaded) {
        weakCard = (
            <HealthCard
                color="error.light"
                icon={<GppBadTwoToneIcon/>}
                title="Weak Passwords"
                subtitle="Easy to guess"
                count={weakPasswords.length}
                link={reactLinks.weakPassword}
            />
        );
    }
    let reusedCard = null;
    if (isReusedLoaded) {
        reusedCard = (
            <HealthCard
                color="warning.light"
                icon={<ContentCopyTwoToneIcon/>}
                title="Reused Passwords"
                subtitle="Used for multiple accounts"
                count={reusedPasswords.length}
                link={reactLinks.reusedPassword}
            />
        );
    }
    let oldCard = null;
    if (isOldLoaded) {
        oldCard = (
            <HealthCard
                color="secondary.main"
                icon={<WatchLaterTwoToneIcon/>}
                title="Old Passwords"
                subtitle="Over 180 days old"
                count={oldPasswords.length}
                link={reactLinks.oldPassword}
            />
        );
    }


    return (
        <Box sx={_root}>
            <Grid
                container
                direction="column"
                spacing={2}
            >
                {weakCard}
                {reusedCard}
                {oldCard}
            </Grid>
        </Box>
    );
};

export default PasswordHealth;