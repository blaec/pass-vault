import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchGeneratedPassword} from "../../../../store/state/passgen/passgen-actions";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";
import IconCopy from "../../../../UI/IconButtons/IconCopy";
import IconRefresh from "../../../../UI/IconButtons/IconRefresh";
import SymbolSwitch from "./components/SymbolSwitch";
import LengthSlider from "./components/LengthSlider";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import PasswordStrength from "./components/PasswordStrength";


const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 60;
const _body = {
    display: 'flex',
    flexDirection: 'column',
    m: 'auto',
};
const _passwordDisplay = {
    background: "whitesmoke",
    mb: 5
};
const _passwordText = {
    height: 80,
    p: 2,
    fontWeight: 'bold',
    wordBreak: 'break-all',
};


const PasswordGenerator = (props) => {
    const {isOpen, setIsOpen} = props;

    const [isUpperCase, setIsUpperCase] = React.useState(false);
    const [isDigits, setIsDigits] = React.useState(false);
    const [isSpecialChars, setIsSpecialChars] = React.useState(false);
    const [length, setLength] = React.useState(8);

    const {passgen} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

    useEffect(() => {
        handlePasswordGenerate();
    }, []);

    const handleClose = () => setIsOpen(false);
    const handleUpperCaseSwitch = () => setIsUpperCase(!isUpperCase);
    const handleDigitsSwitch = () => setIsDigits(!isDigits);
    const handleSpecialCharsSwitch = () => setIsSpecialChars(!isSpecialChars);
    const handlePasswordGenerate = () => {
        const settings = {
            length: length,
            isUseUpperCase: isUpperCase,
            isUseDigits: isDigits,
            isUseSpecialChars: isSpecialChars,
        }
        dispatch(fetchGeneratedPassword(settings));
    };
    const handlePasswordInsert = () => {
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
    const handleInputBlur = () => {
        if (length < PASSWORD_MIN_LENGTH) {
            setLength(PASSWORD_MIN_LENGTH);
        } else if (length > PASSWORD_MAX_LENGTH) {
            setLength(PASSWORD_MAX_LENGTH);
        }
    };


    return (
        <Dialog
            fullWidth
            maxWidth={"xs"}
            open={isOpen}
            onClose={handleClose}
        >
            <DialogTitle>Password Generator</DialogTitle>
            <DialogContent>
                <DialogContentText sx={_passwordDisplay}>
                    <Box sx={_passwordText}>
                        {passgen}
                    </Box>
                    <Box>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <PasswordStrength/>
                            </Grid>
                            <Grid item>
                                <IconRefresh onGenerate={handlePasswordGenerate}/>
                                <IconCopy copyValue={passgen}/>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContentText>
                <Box
                    noValidate
                    component="form"
                    sx={_body}
                >
                    <LengthSlider
                        length={length}
                        passwordMinLength={PASSWORD_MIN_LENGTH}
                        passwordMaxLength={PASSWORD_MAX_LENGTH}
                        onSliderChange={handleSliderChange}
                        onInputChange={handleInputChange}
                        onInputBlur={handleInputBlur}
                    />
                    <SymbolSwitch
                        label="Use capital letters (A-Z)"
                        isChecked={isUpperCase}
                        onChange={handleUpperCaseSwitch}
                    />
                    <SymbolSwitch
                        label="Use Digits (0-9)"
                        isChecked={isDigits}
                        onChange={handleDigitsSwitch}
                    />
                    <SymbolSwitch
                        label="Use symbols (!@#$%&*)"
                        isChecked={isSpecialChars}
                        onChange={handleSpecialCharsSwitch}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handlePasswordInsert}>Insert</Button>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PasswordGenerator;