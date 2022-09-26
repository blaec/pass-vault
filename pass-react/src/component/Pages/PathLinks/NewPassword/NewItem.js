import React from 'react';

import {reactLinks} from "../../../../utils/UrlUtils";

import {Card, CardActions, Grid} from "@mui/material";
import Button from "@mui/material/Button";

const _root = {
    width: 400,
    mt: 1
};


const NewItem = (props) => {
    const{item, actionName, action, onCancel, cardContent} = props;


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
                        <Button onClick={() => onCancel(reactLinks.passwords)}>
                            Cancel
                        </Button>
                        <Button onClick={() => action(item, reactLinks.passwords)}>
                            {actionName}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
    );
};

export default NewItem;