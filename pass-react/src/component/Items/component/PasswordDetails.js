import React from 'react';
import {useSelector} from "react-redux";

import PasswordDataRow from "../PasswordDataRow";
import IconVisibility from "../../../UI/IconButtons/IconVisibility";
import PasswordStrength from "../../Pages/Modals/PasswordGenerator/components/PasswordStrength";
import ItemDetails from "../ItemDetails";

import {CircularProgress} from "@mui/material";


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, isShowPassword, onEdit, onShowHidePassword, onClose} = props;
    const {strength, isStrengthLoaded} = useSelector(state => state.passgen.strength);

    const showHidePasswordIcon = (
        <IconVisibility
            isShowPassword={isShowPassword}
            onShowHidePassword={onShowHidePassword}
        />
    );

    const strengthElement = isStrengthLoaded
        ? <PasswordStrength strength={strength}/>
        : <CircularProgress size={'1rem'}/>;
    const passwordDetails = (
        <>
            <PasswordDataRow
                id={selectedPassword.id}
                description={"Email or User"}
                value={selectedPassword.user}
            />
            <PasswordDataRow
                id={selectedPassword.id}
                description={"Password"}
                value={selectedPassword.password}
                isHidden={!isShowPassword}
                icon={showHidePasswordIcon}
            />
            <PasswordDataRow
                id={selectedPassword.id}
                description={"Password security"}
                isHideIcons={true}
                value={strengthElement}
            />
            <PasswordDataRow
                id={selectedPassword.id}
                description={"Website Address"}
                value={selectedPassword.website}
            />
            <PasswordDataRow
                id={selectedPassword.id}
                description={"Folder"}
                isHideIcons={true}
                value={selectedPassword.folderName}
            />
            <PasswordDataRow
                id={selectedPassword.id}
                description={"Note"}
                value={selectedPassword.note}
            />
            <PasswordDataRow
                id={selectedPassword.creationDate}
                description={"Creation date"}
                isHideIcons={true}
                value={selectedPassword.creationDate}
            />
        </>
    );


    return (
        <ItemDetails
            itemId={selectedPassword.id}
            itemTitle={selectedPassword.title}
            itemDetails={passwordDetails}
            showDetails={showDetails}
            onEdit={onEdit}
            onClose={onClose}
        />
    );
};

export default PasswordDetails;