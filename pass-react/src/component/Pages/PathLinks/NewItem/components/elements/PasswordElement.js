import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchPasswordStrength} from "../../../../../../store/state/passgen/passgen-actions";
import SecretElement from "./SecretElement";
import {passgenActions} from "../../../../../../store/state/passgen/passgen-slice";


const PasswordElement = (props) => {
    const {style, value, elemRef} = props;
    const [typedPassword, setTypedPassword] = React.useState('');
    const {passgen, isPassgenLoaded, canInsertPassword, isPassgenInserted} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

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
            label="Password"
            value={value}
            isFocused={isPassgenInserted}
            isRequired={true}
            elemRef={elemRef}
            onChange={handleOnChange}
        />
    );
};

export default PasswordElement;