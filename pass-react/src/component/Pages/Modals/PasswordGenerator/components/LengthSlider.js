import React from 'react';

import Box from "@mui/material/Box";
import {Grid, Slider} from "@mui/material";
import {styled} from "@mui/material/styles";
import MuiInput from "@mui/material/Input";


const Input = styled(MuiInput)`width: 42px;`;

const _sliderLabel = {ml: 2};
const _slider = {ml: 2, mr: 1};


const LengthSlider = (props) => {
    const {length, passwordMinLength, passwordMaxLength, onSliderChange, onInputChange, onInputBlur} = props;

    const inputProps = {
        step: 1,
        min: passwordMinLength,
        max: passwordMaxLength,
        type: 'number',
    };

    return (
        <Box>
            <Grid
                container
                spacing={2}
                alignItems="center"
            >
                <Grid item sx={_sliderLabel}>
                    Length
                </Grid>
                <Grid item xs sx={_slider}>
                    <Slider
                        value={typeof length === 'number' ? length : passwordMinLength}
                        min={passwordMinLength}
                        max={passwordMaxLength}
                        onChange={onSliderChange}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={length}
                        size="small"
                        inputProps={inputProps}
                        onChange={onInputChange}
                        onBlur={onInputBlur}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LengthSlider;