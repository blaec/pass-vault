import React from 'react';
import {useSelector} from "react-redux";

import PasswordGenerator from "../../../Modals/PasswordGenerator/PasswordGenerator";
import {itemType} from "../../../../../utils/Constants";
import NewItem from "../NewItem";
import {isArrayExist, isObjectExist} from "../../../../../utils/Utils";
import TextInputElement from "./elements/TextInputElement";
import PasswordInputElement from "./elements/PasswordInputElement";
import DatePickerElement from "./elements/DatePickerElement";
import PasswordStrength from "../../../Modals/PasswordGenerator/components/PasswordStrength";
import {reactLinks} from "../../../../../utils/UrlUtils";

import {CardContent, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const _element = {mt: 1};
const _loader = {mt: 1};
const _caption = {mt: 5};


const NewPassword = (props) => {
    const {
        item,
        titleRef,
        noteRef,
        creationDateRef,
        userRef,
        passwordRef,
        websiteRef,
        selectedFolderId,
        onFolderChange,
        onSave,
        onUpdate,
        onCancel
    } = props;
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
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
        creationDateValue: new Date(),
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
        creationDate: creationDateRef?.current?.value
    });
    if (isObjectExist(item)) {
        const {id, title, user, password, website, note, folderId, creationDate} = item;
        passwordInput = {
            titleValue: title,
            userValue: user,
            passwordValue: password,
            websiteValue: website,
            noteValue: note,
            folderValue: selectedFolderId || folderId,
            creationDateValue: creationDate,
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
            id: id,
            folderId: selectedFolderId || folderId
        });
    }

    const titleElement = <TextInputElement
        value={passwordInput.titleValue}
        elemRef={titleRef}
        label={"Title"}
        type={"text"}
        autofocus={true}
    />;
    const userElement = <TextInputElement
        style={_element}
        value={passwordInput.userValue}
        elemRef={userRef}
        label={"User"}
        type={"text"}
    />;
    const passwordElement = <PasswordInputElement
        style={_element}
        value={passwordInput.passwordValue}
        elemRef={passwordRef}
        label={"Password"}
    />;
    const websiteElement = <TextInputElement
        style={_element}
        value={passwordInput.websiteValue}
        elemRef={websiteRef}
        label={"Website"}
        type={"text"}
    />;
    const noteElement = <TextInputElement
        style={_element}
        value={passwordInput.noteValue}
        elemRef={noteRef}
        label={"Note"}
        multiline={true}
    />;
    const creationDateElement = <DatePickerElement
        value={passwordInput.creationDateValue}
        style={_element}
        elemRef={creationDateRef}
    />;

    let label = "Create folders";
    let folderItems = [];
    if (isFoldersLoaded && isArrayExist(folders)) {
        label = "Folder";
        folderItems = folders;
    }
    const menuItems = folderItems.map(fi => <MenuItem key={fi.id} value={fi.id}>{fi.name}</MenuItem>)
    const folderSelect = <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
            value={selectedFolderId || passwordInput.folderValue}
            onChange={onFolderChange}
        >
            {menuItems}
        </Select>
    </FormControl>;

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
        </CardContent>
    );

    return (
        <Grid container justifyContent="center">
            <NewItem
                item={passwordItem}
                actionName={passwordInput.actionName}
                action={passwordInput.actionHandler}
                redirect={reactLinks.passwords}
                cardContent={cardContent}
                onCancel={onCancel}
            />
            <PasswordGenerator isOpen={isGeneratorOpen} setIsOpen={handleGeneratorOpen}/>
        </Grid>
    );
};

export default NewPassword;