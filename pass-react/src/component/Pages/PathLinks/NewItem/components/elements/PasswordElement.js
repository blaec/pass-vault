import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchPasswordStrength} from "../../../../../../store/state/passgen/passgen-actions";
import SecretElement from "./SecretElement";


const PasswordElement = (props) => {
    const {style, value, elemRef} = props;
    const [typedPassword, setTypedPassword] = React.useState('');
    const {passgen, isPassgenLoaded, isInsertPassword} = useSelector(state => state.passgen.passgen);

    const dispatch = useDispatch();

    let isFocused = false;
    if (isInsertPassword && isPassgenLoaded && elemRef?.current) {
        elemRef.current.value = passgen;
        isFocused = true;
    }

    const handleOnChange = () => {
        setTypedPassword(elemRef?.current?.value);
    };
    useEffect(() => {
        const identifier = setTimeout(() => {
            dispatch(fetchPasswordStrength(elemRef?.current?.value));
        }, 500);

        return () => clearTimeout(identifier)
    }, [typedPassword])


    return (
        <SecretElement
            style={style}
            label={"Password"}
            value={value}
            isFocused={isFocused}
            elemRef={elemRef}
            onChange={handleOnChange}
        />
    );
};

export default PasswordElement;