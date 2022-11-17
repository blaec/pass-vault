import React from 'react';

import {actionScreen} from "../../../../utils/Constants";
import {initialLocation} from "../../../../store/localStorage/actions";
import MySubmitButton from "../../../../UI/MySubmitButton";

import {Card, CardActions, Grid, Stack} from "@mui/material";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import DoDisturbAltTwoToneIcon from '@mui/icons-material/DoDisturbAltTwoTone';

const _root = {
    width: actionScreen.width,
    mt: 1
};


const NewItem = (props) => {
    const{item, actionName, onAction, onCancel, cardContent, canSubmit} = props;
    let redirect = initialLocation.get();

    return (
            <Card
                variant="elevation"
                sx={_root}
            >
                {cardContent}
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                    >
                        <Stack direction="row" spacing={1}>
                            <MySubmitButton
                                caption="Cancel"
                                icon={<DoDisturbAltTwoToneIcon/>}
                                type="danger"
                                onSubmit={() => onCancel(redirect)}
                            />
                            <MySubmitButton
                                caption={actionName}
                                disabled={!canSubmit}
                                icon={<AddCircleTwoToneIcon/>}
                                type="success"
                                fill="filled"
                                onSubmit={() => onAction(item, redirect)}
                            />
                        </Stack>
                    </Grid>
                </CardActions>
            </Card>
    );
};

export default NewItem;