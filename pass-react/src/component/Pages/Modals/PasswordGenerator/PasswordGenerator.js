import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchGeneratedPassword} from "../../../../store/state/passgen/passgen-actions";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";
import IconCopy from "../../../Items/IconCopy";
import IconRefresh from "../../../Items/IconRefresh";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, Slider, Switch} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import MuiInput from '@mui/material/Input';
import {styled} from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import ShortTextTwoToneIcon from '@mui/icons-material/ShortTextTwoTone';


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

    const [isUpperCase, setIsUpperCase] = React.useState(false);
    const [isDigits, setIsDigits] = React.useState(false);
    const [isSpecialChars, setIsSpecialChars] = React.useState(false);
    const [length, setLength] = React.useState(8);

    const {passgen} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

    const handleClose = () => setIsOpen(false);
    const handleUpperCaseChange = () => setIsUpperCase(!isUpperCase);
    const handleDigitsChange = () => setIsDigits(!isDigits);
    const handleSpecialCharsChange = () => setIsSpecialChars(!isSpecialChars);
    const handleGeneratePassword = () => {
        const settings = {
            length: length,
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
        setLength(newValue);
    };
    const handleInputChange = (event) => {
        setLength(event.target.value === ''
            ? ''
            : Number(event.target.value));
    };
    const handleBlur = () => {
        if (length < 0) {
            setLength(0);
        } else if (length > PASSWORD_MAX_LENGTH) {
            setLength(PASSWORD_MAX_LENGTH);
        }
    };

    useEffect(() => {
        handleGeneratePassword();
    }, []);


    return (
        <Dialog
            fullWidth
            maxWidth={"xs"}
            open={isOpen}
            onClose={handleClose}
        >
            <DialogTitle>Password Generator</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Paper variant="outlined" sx={_passDisplay}>
                        {passgen}
                    </Paper>
                </DialogContentText>
                <Box sx={{textAlign: 'right',}}>
                    <IconRefresh onGenerate={handleGeneratePassword}/>
                    <IconCopy copyValue={passgen}/>
                </Box>
                <Box
                    noValidate
                    component="form"
                    sx={_body}
                >
                    <Box sx={_sliderWidth}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <ShortTextTwoToneIcon/>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    value={typeof length === 'number' ? length : 0}
                                    onChange={handleSliderChange}
                                    max={PASSWORD_MAX_LENGTH}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={length}
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
                            <Switch checked={isUpperCase} onChange={handleUpperCaseChange}/>
                        }
                        label="Use Upper Case"
                    />
                    <FormControlLabel
                        sx={_formControl}
                        control={
                            <Switch checked={isDigits} onChange={handleDigitsChange}/>
                        }
                        label="Use Digits"
                    />
                    <FormControlLabel
                        sx={_formControl}
                        control={
                            <Switch checked={isSpecialChars} onChange={handleSpecialCharsChange}/>
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
    );
};

export default PasswordGenerator;