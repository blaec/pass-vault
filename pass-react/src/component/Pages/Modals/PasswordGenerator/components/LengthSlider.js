import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Slider} from "@mui/material";
import {styled} from "@mui/material/styles";
import MuiInput from "@mui/material/Input";


const Input = styled(MuiInput)`width: 42px;`;

const _sliderLabel = {ml: 2};
const _slider = {ml: 2, mr: 1};



const LengthSlider = (props) => {
    const {length, passwordMaxLength, onSliderChange, onInputChange, onInputBlur} = props;

    const inputProps = {
        step: 1,
        min: 0,
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
                        value={typeof length === 'number' ? length : 0}
                        onChange={onSliderChange}
                        max={passwordMaxLength}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={length}
                        size="small"
                        onChange={onInputChange}
                        onBlur={onInputBlur}
                        inputProps={inputProps}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LengthSlider;