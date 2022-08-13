import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchGeneratedPassword} from "../../../../store/state/passgen/passgen-actions";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, Slider, Switch} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import VolumeUp from '@mui/icons-material/VolumeUp';
import MuiInput from '@mui/material/Input';
import {styled} from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';

const PASSWORD_MAX_LENGTH = 30;
const Input = styled(MuiInput)`
  width: 42px;
`;
const _body = {
    display: 'flex',
    flexDirection: 'column',
    m: 'auto',
    width: 'fit-content',
};
const _passDisplay = {
    textAlign: 'center',
    height: 60,
    p: 2,
}
const _formControl = {mt: 1};
const _sliderWidth = {width: 250};
const _inputProps = {
    step: 1,
    min: 0,
    max: PASSWORD_MAX_LENGTH,
    type: 'number',
};

const PasswordGenerator = (props) => {
    const {isOpen, setIsOpen} = props;
    const dispatch = useDispatch();

    const [isUpperCase, setIsUpperCase] = React.useState(false);
    const [isDigits, setIsDigits] = React.useState(false);
    const [isSpecialChars, setIsSpecialChars] = React.useState(false);
    const [value, setValue] = React.useState(8);

    const {passgen} = useSelector(state => state.passgen.passgen);

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
        setIsOpen(false);
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
        } else if (value > PASSWORD_MAX_LENGTH) {
            setValue(PASSWORD_MAX_LENGTH);
        }
    };


    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth={"xs"}
                open={isOpen}
                onClose={handleClose}
            >
                <DialogTitle>Password Generator</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Paper variant="outlined" sx={_passDisplay} >
                            {passgen}
                        </Paper>
                    </DialogContentText>
                    <Button onClick={handleGeneratePassword}><RefreshTwoToneIcon/></Button>
                    <Button onClick={()=>alert("not implemented")}><ContentCopyTwoToneIcon/></Button>
                    <Box
                        noValidate
                        component="form"
                        sx={_body}
                    >
                        <Box sx={_sliderWidth}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <VolumeUp />
                                </Grid>
                                <Grid item xs>
                                    <Slider
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        max={PASSWORD_MAX_LENGTH}
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        value={value}
                                        size="small"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        inputProps={_inputProps}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <FormControlLabel
                            sx={_formControl}
                            control={
                                <Switch checked={isUpperCase} onChange={handleUpperCaseChange} />
                            }
                            label="Use Upper Case"
                        />
                        <FormControlLabel
                            sx={_formControl}
                            control={
                                <Switch checked={isDigits} onChange={handleDigitsChange} />
                            }
                            label="Use Digits"
                        />
                        <FormControlLabel
                            sx={_formControl}
                            control={
                                <Switch checked={isSpecialChars} onChange={handleSpecialCharsChange} />
                            }
                            label="Use Special Chars"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleInsertPassword}>Insert</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default PasswordGenerator;