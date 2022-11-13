import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchPasswordStrength} from "../../../../../../store/state/passgen/passgen-actions";
import SecretElement from "./templates/SecretElement";
import {passgenActions} from "../../../../../../store/state/passgen/passgen-slice";
import {isStringExist} from "../../../../../../utils/Utils";
import useInput from "../../../../../../hooks/use-input";

const validateValue = (text) => isStringExist(text);


const PasswordElement = (props) => {
    const {style, value, elemRef, onValid} = props;
    const [typedPassword, setTypedPassword] = React.useState('');
    const {passgen, isPassgenLoaded, canInsertPassword, isPassgenInserted} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

    const {
        value: password,
        handleFieldTouch,
        handleTextFieldChange,
        isValid,
        hasError
    } = useInput(value, elemRef, validateValue);

    useEffect(() => {
        onValid(isValid);
    }, [isValid]);

    const isInsertPassgen = canInsertPassword
        && isPassgenLoaded
        && elemRef?.current;
    if (isInsertPassgen) {
        elemRef.current.value = passgen;
    }

    const handleOnChange = () => {
        setTypedPassword(elemRef?.current?.value);
    };
    useEffect(() => {
        const identifier = setTimeout(() => {
            dispatch(fetchPasswordStrength(elemRef?.current?.value));
        }, 500);

        return () => clearTimeout(identifier)
    }, [typedPassword]);
    useEffect(() => {
        if (isInsertPassgen) {
            dispatch(passgenActions.setPassenInserted());
        }
    }, [isInsertPassgen]);


    return (
        <SecretElement
            style={style}
            hasError={hasError}
            label="Password"
            value={password}
            isFocused={isPassgenInserted}
            isRequired={true}
            elemRef={elemRef}
            onChange={handleOnChange}
            onChangeTextField={handleTextFieldChange}
            onInputTouch={handleFieldTouch}
        />
    );
};

export default PasswordElement;