import React from 'react';
import {NavLink} from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Grid, Tooltip} from "@mui/material";

const _inline = {display: 'inline'};
const _bold = {fontWeight: 800};


const HealthCard = (props) => {
    const {color, icon, title, subtitle, count, link} = props;

    const _avatar = {bgcolor: color};
    const accountText = ` account${count !== 1 ? 's' : ''}`;
    const action = count === 0 ?
        null :
        (
            <Tooltip title="More details" placement="right">
                <IconButton
                    component={NavLink}
                    to={link}
                >
                    <NavigateNextTwoToneIcon/>
                </IconButton>
            </Tooltip>
        );

    return (
        <Grid item>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={_avatar}>
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
                        <Box sx={_inline}>{accountText}</Box>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default HealthCard;