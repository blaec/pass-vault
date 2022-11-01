import React from 'react';
import {useSelector} from "react-redux";

import PasswordGenerator from "../../../Modals/PasswordGenerator/PasswordGenerator";
import {itemDefaults, itemType} from "../../../../../utils/Constants";
import NewItem from "../NewItem";
import {isObjectExist} from "../../../../../utils/Utils";
import PasswordElement from "./elements/PasswordElement";
import CreationDateElement from "./elements/CreationDateElement";
import PasswordStrength from "../../../Modals/PasswordGenerator/components/PasswordStrength";
import TitleElement from "./elements/TitleElement";
import NoteElement from "./elements/NoteElement";
import FolderElement from "./elements/FolderElement";
import UserElement from "./elements/UserElement";
import WebsiteElement from "./elements/WebsiteElement";
import AgeElement from "./elements/AgeElement";

import {CardContent, CircularProgress, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const _loader = {mt: 1};
const _caption = {mt: 5};


const NewPassword = (props) => {
    const {
        item,
        elementStyle,
        titleRef,
        noteRef,
        creationDateRef,
        ageRef,
        userRef,
        passwordRef,
        websiteRef,
        selectedFolderId,
        onFolderChange,
        onSave,
        onUpdate,
        onCancel
    } = props;
    const {strength, isStrengthLoaded} = useSelector(state => state.passgen.strength);
    const [isGeneratorOpen, setIsGeneratorOpen] = React.useState(false);


    const handleGeneratePassword = () => {
        setIsGeneratorOpen(true);
    };
    const handleGeneratorOpen = (value) => {
        setIsGeneratorOpen(value);
    }

    let passwordInput = {
        titleValue: "",
        userValue: "",
        passwordValue: "",
        websiteValue: "",
        noteValue: "",
        folderValue: "",
        creationDateValue: itemDefaults.creationDate,
        ageValue: itemDefaults.age,
        actionHandler: onSave,
        actionName: "Create"
    };
    let passwordItem = () => ({
        itemType: itemType.passwords,
        folderId: selectedFolderId,
        title: titleRef?.current?.value,
        user: userRef?.current?.value,
        password: passwordRef?.current?.value,
        website: websiteRef?.current?.value,
        note: noteRef?.current?.value,
        creationDate: creationDateRef?.current?.value,
        age: ageRef?.current?.value,
    });
    if (isObjectExist(item)) {
        const {id, title, user, password, website, note, folderId, creationDate, age} = item;
        passwordInput = {
            titleValue: title,
            userValue: user,
            passwordValue: password,
            websiteValue: website,
            noteValue: note,
            folderValue: selectedFolderId || folderId,
            creationDateValue: creationDate,
            ageValue: age,
            actionHandler: onUpdate,
            actionName: "Update"
        };
        passwordItem = () => ({
            itemType: itemType.passwords,
            title: titleRef?.current?.value,
            user: userRef?.current?.value,
            password: passwordRef?.current?.value,
            website: websiteRef?.current?.value,
            note: noteRef?.current?.value,
            creationDate: creationDateRef?.current?.value,
            age: ageRef?.current?.value,
            id: id,
            folderId: selectedFolderId || folderId
        });
    }

    const titleElement = (
        <TitleElement
            value={passwordInput.titleValue}
            elemRef={titleRef}
        />
    );
    const userElement = (
        <UserElement
            style={elementStyle}
            value={passwordInput.userValue}
            elemRef={userRef}
        />
    );
    const passwordElement = (
        <PasswordElement
            style={elementStyle}
            value={passwordInput.passwordValue}
            elemRef={passwordRef}
        />
    );
    const websiteElement = (
        <WebsiteElement
            style={elementStyle}
            value={passwordInput.websiteValue}
            elemRef={websiteRef}
        />
    );
    const noteElement = (
        <NoteElement
            style={elementStyle}
            value={passwordInput.noteValue}
            elemRef={noteRef}
        />
    );
    const creationDateElement = (
        <CreationDateElement
            style={elementStyle}
            value={passwordInput.creationDateValue}
            elemRef={creationDateRef}
        />
    );
    const ageElement = (
        <AgeElement
            style={elementStyle}
            value={passwordInput.ageValue}
            elemRef={ageRef}
        />
    );
    const folderSelect = (
        <FolderElement
            value={selectedFolderId || passwordInput.folderValue}
            onChange={onFolderChange}
        />
    );

    const strengthElement = isStrengthLoaded
        ? <PasswordStrength strength={strength}/>
        : <CircularProgress size={'1rem'} sx={_loader}/>;
    const cardContent = (
        <CardContent>
            {titleElement}
            <Box sx={_caption}>
                Login Details
            </Box>
            {userElement}
            {passwordElement}
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                {strengthElement}
                <Button
                    size="small"
                    onClick={handleGeneratePassword}
                >
                    Generate password
                </Button>
            </Grid>
            {websiteElement}
            <Box sx={_caption}>
                Other
            </Box>
            {folderSelect}
            {noteElement}
            {creationDateElement}
            {ageElement}
        </CardContent>
    );

    return (
        <Grid container justifyContent="center">
            <NewItem
                item={passwordItem}
                actionName={passwordInput.actionName}
                action={passwordInput.actionHandler}
                cardContent={cardContent}
                onCancel={onCancel}
            />
            <PasswordGenerator isOpen={isGeneratorOpen} setIsOpen={handleGeneratorOpen}/>
        </Grid>
    );
};

export default NewPassword;