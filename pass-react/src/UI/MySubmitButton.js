import React from 'react';

import {Button} from "@material-ui/core";

const colorStyle = {
    success: {color: "primary"},
    danger: {color: "secondary"}
};
const fillStyle = {
    filled: {variant: "contained"},
    empty: {variant: "outlined"}
}


const   mySubmitButton = (props) => {
    let {component, path, disabled, icon, caption, type, fill, buttonStyles, onSubmit} = props;

    type = type === undefined ? "success" : type;
    fill = fill === undefined ? "empty" : fill;


    return (
        <Button
            component={component} to={path}
            sx={buttonStyles}
            variant={fillStyle[fill].variant}
            disabled={disabled}
            color={colorStyle[type].color}
            startIcon={icon}
            onClick={onSubmit}
        >
            {caption}
        </Button>
    );
};

export default mySubmitButton;