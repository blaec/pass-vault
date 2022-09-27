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


const NewSecureNote = (props) => {
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


    let secureNoteInput = {
        titleValue: "",
        noteValue: "",
        folderValue: "",
        creationDateValue: new Date(),
        actionHandler: onSave,
        actionName: "Create"
    };
    let secureNoteItem = () => ({
        itemType: itemType.secureNotes,
        folderId: selectedFolderId,
        title: titleRef?.current?.value,
        note: noteRef?.current?.value,
        creationDate: creationDateRef?.current?.value
    });
    if (isObjectExist(item)) {
        const {id, title, note, folderId, creationDate} = item;
        secureNoteInput = {
            titleValue: title,
            noteValue: note,
            folderValue: selectedFolderId || folderId,
            creationDateValue: creationDate,
            actionHandler: onUpdate,
            actionName: "Update"
        };
        secureNoteItem = () => ({
            itemType: itemType.secureNotes,
            title: titleRef?.current?.value,
            note: noteRef?.current?.value,
            creationDate: creationDateRef?.current?.value,
            id: id,
            folderId: selectedFolderId || folderId
        });
    }

    const titleElement = <TextInputElement
        value={secureNoteInput.titleValue}
        elemRef={titleRef}
        label={"Title"}
        type={"text"}
        autofocus={true}
    />;
    const noteElement = <TextInputElement
        style={_element}
        value={secureNoteInput.noteValue}
        elemRef={noteRef}
        label={"Note"}
        multiline={true}
    />;
    const creationDateElement = <DatePickerElement
        value={secureNoteInput.creationDateValue}
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
            value={selectedFolderId || secureNoteInput.folderValue}
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
                item={secureNoteItem}
                actionName={secureNoteInput.actionName}
                action={secureNoteInput.actionHandler}
                redirect={reactLinks.secureNotes}
                cardContent={cardContent}
                onCancel={onCancel}
            />
        </Grid>
    );
};

export default NewSecureNote;