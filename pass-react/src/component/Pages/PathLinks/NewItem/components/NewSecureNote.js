import React from 'react';

import {isObjectExist} from "../../../../../utils/Utils";
import CreationDateElement from "./elements/CreationDateElement";
import {itemDefaults, itemType} from "../../../../../utils/Constants";
import NewItem from "../NewItem";

import {CardContent, Grid} from "@mui/material";
import TitleElement from "./elements/TitleElement";
import NoteElement from "./elements/NoteElement";
import FolderElement from "./elements/FolderElement";


const NewSecureNote = (props) => {
    const {
        item,
        elementStyle,
        titleRef,
        noteRef,
        creationDateRef,
        selectedFolderId,
        onFolderChange,
        onSave,
        onUpdate,
        onCancel
    } = props;


    let secureNoteInput = {
        titleValue: "",
        noteValue: "",
        folderValue: "",
        creationDateValue: itemDefaults.creationDate(),
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

    const titleElement = (
        <TitleElement
            value={secureNoteInput.titleValue}
            elemRef={titleRef}
        />
    );
    const noteElement = (
        <NoteElement
            style={elementStyle}
            value={secureNoteInput.noteValue}
            elemRef={noteRef}
        />
    );
    const creationDateElement = (
        <CreationDateElement
            style={elementStyle}
            value={secureNoteInput.creationDateValue}
            elemRef={creationDateRef}
        />
    );
    const folderSelect = (
        <FolderElement
            style={elementStyle}
            value={selectedFolderId || secureNoteInput.folderValue}
            onChange={onFolderChange}
        />
    );
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
                cardContent={cardContent}
                onCancel={onCancel}
            />
        </Grid>
    );
};

export default NewSecureNote;