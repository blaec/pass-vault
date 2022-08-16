import React from 'react';

import {FormControlLabel, Switch} from "@mui/material";


const _formControl = {mt: 1};
const _switch = {marginLeft: 'auto'};


const SymbolSwitch = (props) => {
    const {label, isChecked, onChange} = props;


    return (
        <FormControlLabel
            sx={_formControl}
            labelPlacement="start"
            control={
                <Switch
                    sx={_switch}
                    checked={isChecked}
                    onChange={onChange}
                />
            }
            label={label}
        />
    );
};

export default SymbolSwitch;