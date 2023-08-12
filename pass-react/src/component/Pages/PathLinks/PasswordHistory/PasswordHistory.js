import React from 'react';
import {useNavigate} from "react-router-dom";

import MySubmitButton from "../../../../UI/MySubmitButton";
import {actionScreen} from "../../../../utils/Constants";
import {initialLocation} from "../../../../store/localStorage/actions";

import {Card, CardActions, Grid, Stack} from "@mui/material";
import BasicTable from "./BasicTable";
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

const _root = {
    width: actionScreen.width,
    mt: 1,
    margin: 'auto',
};


const PasswordHistory = () => {
    let redirect = initialLocation.get();
    const navigate = useNavigate();

    const handleBack = (redirectLink) => {
        navigate(redirectLink);
    };


    return (
        <Card
            variant="elevation"
            sx={_root}
        >
            <BasicTable/>
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