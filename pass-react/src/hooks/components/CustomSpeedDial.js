import React from 'react';
import {NavLink} from "react-router-dom";

import {reactLinks} from "../../utils/UrlUtils";
import {toolbarHeight} from "../../utils/Constants";

import Box from "@mui/material/Box";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import ClearAllTwoToneIcon from "@mui/icons-material/ClearAllTwoTone";
import {SpeedDial, SpeedDialAction} from "@mui/material";
import {styled} from "@mui/material/styles";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import StickyNote2TwoToneIcon from "@mui/icons-material/StickyNote2TwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";

const _speedDial = {
    position: 'relative',
    mt: 1,
    height: {
        xs: toolbarHeight.mobile,
        sm: toolbarHeight.desktop,
    }
};
const trashActions = [
    {
        icon: <DeleteSweepTwoToneIcon/>,
        name: 'Empty Trash',
        newItemLink: reactLinks.newPassword,
    },
];
const itemActions = [
    {
        icon: <VpnKeyTwoToneIcon/>,
        name: 'New Password',
        newItemLink: reactLinks.newPassword,
    },
    {
        icon: <StickyNote2TwoToneIcon/>,
        name: 'New Secure Note',
        newItemLink: reactLinks.newSecureNote,
    },
    {
        icon: <CreditCardTwoToneIcon/>,
        name: 'New Credit Card',
        newItemLink: reactLinks.newCreditCard,
    },
];
const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(1),
        right: theme.spacing(1),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(1),
        left: theme.spacing(1),
    },
}));


const CustomSpeedDial = (props) => {
    const {isTrash, onTrashClick, onItemClick} = props;

    let speedDial;
    if (isTrash) {
        speedDial = (
            <Box sx={_speedDial}>
                <StyledSpeedDial
                    ariaLabel="removed items SpeedDial"
                    icon={<SpeedDialIcon openIcon={<ClearAllTwoToneIcon/>}/>}
                    direction={'left'}
                >
                    {trashActions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={onTrashClick}
                        />
                    ))}
                </StyledSpeedDial>
            </Box>
        );
    } else {
        speedDial = (
            <Box sx={_speedDial}>
                <StyledSpeedDial
                    ariaLabel="active items SpeedDial"
                    icon={<SpeedDialIcon/>}
                    direction={'left'}
                >
                    {itemActions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            component={NavLink}
                            onClick={onItemClick}
                            to={action.newItemLink}
                        />
                    ))}
                </StyledSpeedDial>
            </Box>
        );
    }


    return speedDial;
};

export default CustomSpeedDial;