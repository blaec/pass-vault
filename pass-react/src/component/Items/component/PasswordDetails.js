import React from 'react';
import {useSelector} from "react-redux";

import ItemDataRow from "./ItemDataRow";
import PasswordStrength from "../../Pages/Modals/PasswordGenerator/components/PasswordStrength";
import ItemDetails from "../ItemDetails";
import SecretItemDataRow from "./SecretItemDataRow";
import {getAge} from "../../../utils/Utils";

import {CircularProgress} from "@mui/material";


const PasswordDetails = (props) => {
    const {selectedPassword, showDetails, onEdit, onClose} = props;
    const {strength, isStrengthLoaded} = useSelector(state => state.passgen.strength);

    const strengthElement = isStrengthLoaded
        ? <PasswordStrength strength={strength}/>
        : <CircularProgress size={'1rem'}/>;
    const {id, title, folderName, note, creationDate, user, password, website, type, age} = selectedPassword;
    const passwordDetails = (
        <>
            <ItemDataRow
                id={id}
                description={"Email or User"}
                value={user}
            />
            <SecretItemDataRow
                id={id}
                description={"Password"}
                value={password}
                showDetails={showDetails}
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
            <ItemDataRow
                id={id}
                description={"Actual age"}
                isHideIcons={true}
                value={getAge(creationDate)}
                passwordUpdateCounter={age - getAge(creationDate)}
            />
            <ItemDataRow
                id={id}
                description={"Recommended age"}
                isHideIcons={true}
                value={age}
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