import React from 'react';
import {useSelector} from "react-redux";

import ItemDataRow from "./ItemDataRow";
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
    const {id, title, folderName, note, creationDate, user, password, website, type} = selectedPassword;
    const passwordDetails = (
        <>
            <ItemDataRow
                id={id}
                description={"Email or User"}
                value={user}
            />
            <ItemDataRow
                id={id}
                description={"Password"}
                value={password}
                isHidden={!isShowPassword}
                icon={showHidePasswordIcon}
            />
            <ItemDataRow
                id={id}
                description={"Password security"}
                isHideIcons={true}
                value={strengthElement}
            />
            <ItemDataRow
                id={id}
                description={"Website Address"}
                value={website}
            />
            <ItemDataRow
                id={id}
                description={"Folder"}
                isHideIcons={true}
                value={folderName}
            />
            <ItemDataRow
                id={id}
                description={"Note"}
                value={note}
            />
            <ItemDataRow
                id={id}
                description={"Creation date"}
                isHideIcons={true}
                value={creationDate}
            />
        </>
    );


    return (
        <ItemDetails
            itemId={id}
            itemTitle={title}
            itemDetails={passwordDetails}
            showDetails={showDetails}
            type={type}
            onEdit={onEdit}
            onClose={onClose}
        />
    );
};

export default PasswordDetails;