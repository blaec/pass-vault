import React from 'react';
import {useNavigate} from "react-router-dom";

import HistoryData from "./HistoryData";
import MySubmitButton from "../../../../UI/MySubmitButton";
import {actionScreen} from "../../../../utils/Constants";
import {initialLocation, selectedItemTitle} from "../../../../store/localStorage/actions";

import {Card, CardActions, CardContent, Grid, Stack} from "@mui/material";
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import CardHeader from "@mui/material/CardHeader";

const _root = {
    width: actionScreen.width,
    mt: 1,
    margin: 'auto',
};


const PasswordHistory = () => {
    let redirect = initialLocation.get();
    const navigate = useNavigate();

    const handleBack = (redirectLink) => {
        selectedItemTitle.remove();
        navigate(redirectLink);
    };


    return (
        <Card
            variant="elevation"
            sx={_root}
        >
            <CardHeader
                title="Password History"
                subheader={selectedItemTitle.get()}
            />
            <CardContent>
                <HistoryData/>
            </CardContent>
            <CardActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                >
                    <Stack direction="row" spacing={1}>
                        <MySubmitButton
                            caption="Back"
                            icon={<ArrowBackIosNewTwoToneIcon/>}
                            type="danger"
                            onSubmit={() => handleBack(redirect)}
                        />
                    </Stack>
                </Grid>
            </CardActions>
        </Card>
    );
};

export default PasswordHistory;