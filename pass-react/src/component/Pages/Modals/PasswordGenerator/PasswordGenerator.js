import React, {useEffect} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, Slider, Switch} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import {fetchGeneratedPassword} from "../../../../store/state/passgen/passgen-actions";
import {useDispatch, useSelector} from "react-redux";
import VolumeUp from '@mui/icons-material/VolumeUp';
import MuiInput from '@mui/material/Input';
import {styled} from '@mui/material/styles';
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";


const Input = styled(MuiInput)`
  width: 42px;
`;



const _root = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const _body = {
    display: 'flex',
    flexDirection: 'column',
    m: 'auto',
    width: 'fit-content',
};

const PasswordGenerator = (props) => {
    const {isOpen, setIsOpen} = props;
    const dispatch = useDispatch();

    const [isUpperCase, setIsUpperCase] = React.useState(false);
    const [isDigits, setIsDigits] = React.useState(false);
    const [isSpecialChars, setIsSpecialChars] = React.useState(false);
    const [value, setValue] = React.useState(8);

    const {passgen, isPassgenLoaded} = useSelector(state => state.passgen.passgen);

    const handleClose = () => {
        setIsOpen(false);
    };
    const handleUpperCaseChange = () => setIsUpperCase(!isUpperCase);
    const handleDigitsChange = () => setIsDigits(!isDigits);
    const handleSpecialCharsChange = () => setIsSpecialChars(!isSpecialChars);
    const handleGeneratePassword = () => {
        const settings = {
            length: value,
            isUseUpperCase: isUpperCase,
            isUseDigits: isDigits,
            isUseSpecialChars: isSpecialChars,
        }
        dispatch(fetchGeneratedPassword(settings));
    };
    const handleInsertPassword = () => {
        dispatch(passgenActions.insertPassgen(passgen));
    };
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 30) {
            setValue(30);
        }
    };


    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {passgen}
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={_body}
                    >
                        <Box sx={{ width: 250 }}>
                            <Typography id="input-slider" gutterBottom>
                                Volume
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <VolumeUp />
                                </Grid>
                                <Grid item xs>
                                    <Slider
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        aria-labelledby="input-slider"
                                        max={30}
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        value={value}
                                        size="small"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        inputProps={{
                                            step: 1,
                                            min: 0,
                                            max: 30,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <FormControlLabel
                            sx={{ mt: 1 }}
                            control={
                                <Switch checked={isUpperCase} onChange={handleUpperCaseChange} />
                            }
                            label="Use Upper Case"
                        />
                        <FormControlLabel
                            sx={{ mt: 1 }}
                            control={
                                <Switch checked={isDigits} onChange={handleDigitsChange} />
                            }
                            label="Use Digits"
                        />
                        <FormControlLabel
                            sx={{ mt: 1 }}
                            control={
                                <Switch checked={isSpecialChars} onChange={handleSpecialCharsChange} />
                            }
                            label="Use Special Chars"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleInsertPassword}>Insert</Button>
                </DialogActions>
                <DialogActions>
                    <Button onClick={handleGeneratePassword}>Generate</Button>
                </DialogActions>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default PasswordGenerator;