import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchGeneratedPassword} from "../../../../store/state/passgen/passgen-actions";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";
import IconCopy from "../../../../UI/IconButtons/IconCopy";
import IconRefresh from "../../../../UI/IconButtons/IconRefresh";
import SymbolSwitch from "./components/SymbolSwitch";
import LengthSlider from "./components/LengthSlider";
import PasswordStrength from "./components/PasswordStrength";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import ColorizedPass from "./components/ColorizedPass";


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
const getWithinRange = (value) => Math.max(Math.min(value, PASSWORD_MAX_LENGTH), PASSWORD_MIN_LENGTH);


const PasswordGenerator = (props) => {
    const {isOpen, setIsOpen} = props;

    const [isUpperCase, setIsUpperCase] = React.useState(false);
    const [isDigits, setIsDigits] = React.useState(false);
    const [isSpecialChars, setIsSpecialChars] = React.useState(false);
    const [length, setLength] = React.useState(8);

    const {passgen, strength} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

    useEffect(() => {
        handlePasswordGenerate();
    }, []);

    useEffect(() => {
        const identifier = setTimeout(() => {
            handlePasswordGenerate();
        }, 500)

        return () => clearTimeout(identifier)
    }, [length, isDigits, isUpperCase, isSpecialChars])

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
        dispatch(passgenActions.insertPassgen({
            passgen: passgen,
            strength: strength
        }));
        setIsOpen(false);
    };
    const handleSliderChange = (event, newValue) => {
        setLength(newValue);
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setLength(value === ''
            ? ''
            : getWithinRange(Number(value)));
    };
    const handleInputBlur = () => {
        setLength(getWithinRange(length));
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
                <DialogContentText
                    sx={_passwordDisplay}
                    component={'div'}
                >
                    <Box sx={_passwordText}>
                        <ColorizedPass pass={passgen}/>
                    </Box>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <PasswordStrength strength={strength}/>
                        </Grid>
                        <Grid item>
                            <IconRefresh onGenerate={handlePasswordGenerate}/>
                            <IconCopy copyValue={passgen}/>
                        </Grid>
                    </Grid>
                </DialogContentText>
                <Box
                    sx={_body}
                    component="form"
                    noValidate
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