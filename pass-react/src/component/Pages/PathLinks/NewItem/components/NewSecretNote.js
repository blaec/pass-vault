import React from 'react';
import {useSelector} from "react-redux";

import {isArrayExist, isObjectExist} from "../../../../../utils/Utils";
import DatePickerElement from "./elements/DatePickerElement";
import TextInputElement from "./elements/TextInputElement";
import {itemType} from "../../../../../utils/Constants";
import NewItem from "../NewItem";
import {reactLinks} from "../../../../../utils/UrlUtils";

import {CardContent, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";

const _element = {mt: 1};


const NewSecretNote = (props) => {
    const {
        item,
        titleRef,
        noteRef,
        creationDateRef,
        selectedFolderId,
        onFolderChange,
        onSave,
        onUpdate,
        onCancel
    } = props;
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);


    let passwordInput = {
        titleValue: "",
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
        note: noteRef?.current?.value,
        creationDate: creationDateRef?.current?.value
    });
    if (isObjectExist(item)) {
        const {id, title, note, folderId, creationDate} = item;
        passwordInput = {
            titleValue: title,
            noteValue: note,
            folderValue: selectedFolderId || folderId,
            creationDateValue: creationDate,
            actionHandler: onUpdate,
            actionName: "Update"
        };
        passwordItem = () => ({
            itemType: itemType.passwords,
            title: titleRef?.current?.value,
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

    const cardContent = (
        <CardContent>
            {titleElement}
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
                redirect={reactLinks.secretNotes}
                cardContent={cardContent}
                onCancel={onCancel}
            />
        </Grid>
    );
};

export default NewSecretNote;