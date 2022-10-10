import React from 'react';

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

const _inline = {display: 'inline'};
const _bold = {fontWeight: 800};


const HealthCard = (props) => {
    const {color, icon, title, subtitle, count} = props;

    const _avatar = {bgcolor: color};
    const account = ` account${count !== 1 ? 's' : ''}`;
    const action = count === 0 ?
        null :
        (
            <IconButton aria-label="settings">
                <NavigateNextTwoToneIcon/>
            </IconButton>
        );


    return (
        <Grid item>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={_avatar}
                            aria-label="recipe"
                        >
                            {icon}
                        </Avatar>
                    }
                    action={action}
                    sx={{color: color}}
                    title={title}
                    subheader={subtitle}
                />
                <CardContent>
                    <Typography
                        variant="h4"
                        color="text.secondary"
                    >
                        <Box sx={[_inline, _bold]}>{count}</Box>
                        <Box sx={_inline}>{account}</Box>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default HealthCard;