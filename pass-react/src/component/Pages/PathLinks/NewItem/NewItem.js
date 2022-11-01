import React from 'react';

import {actionScreen} from "../../../../utils/Constants";
import {initialLocation} from "../../../../store/localStorage/actions";

import {Card, CardActions, Grid} from "@mui/material";
import Button from "@mui/material/Button";

const _root = {
    width: actionScreen.width,
    mt: 1
};


const NewItem = (props) => {
    const{item, actionName, action, onCancel, cardContent} = props;
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
                        <Button onClick={() => onCancel(redirect)}>
                            Cancel
                        </Button>
                        <Button onClick={() => action(item, redirect)}>
                            {actionName}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
    );
};

export default NewItem;