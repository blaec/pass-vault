import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import {isArrayExist, isObjectExist} from "../../../../../utils/Utils";
import {reactLinks} from "../../../../../utils/UrlUtils";
import {secretNoteActions} from "../../../../../store/state/secretNote/secret-note-slice";
import {saveSecretNote, updateSecretNote} from "../../../../../store/state/secretNote/secret-note-actions";
import DatePickerElement from "./elements/DatePickerElement";
import TextInputElement from "./elements/TextInputElement";

import {Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";


const _loader = {mt: 1};
const _root = {
    width: 400,
    mt: 1
};
const _caption = {mt: 5};
const _element = {mt: 1};


const NewSecretNote = () => {
    const [folderId, setFolderId] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
    const {editableSecretNote} = useSelector(state => state.secretNote.editableSecretNote);
    const navigate = useNavigate();
    const titleRef = React.useRef();
    const noteRef = React.useRef();
    const creationDateRef = React.useRef();

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setFolderId(event.target.value);
    };

    const handleCancel = () => {
        navigate(reactLinks.secureNotes);
        dispatch(secretNoteActions.resetEditableSecretNote());
    };

    const handleSave = () => {
        const secretNote = {
            folderId: folderId,
            title: titleRef.current.value,
            note: noteRef.current.value,
            creationDate: creationDateRef.current.value
        };
        dispatch(saveSecretNote(secretNote));
        navigate(reactLinks.secureNotes);
    };

    const handleUpdate = () => {
        const secretNote = {
            secretNoteId: editableSecretNote.id,
            folderId: folderId,
            title: titleRef.current.value,
            note: noteRef.current.value,
            creationDate: creationDateRef.current.value
        };
        dispatch(updateSecretNote(secretNote));
        navigate(reactLinks.secureNotes);
    };

    const handleOpen = (value) => {
        setOpen(value);
    }

    useEffect(() => {
        if (isObjectExist(editableSecretNote)) {
            const {folder} = editableSecretNote;
            setFolderId(folder.id);
        }
    }, [editableSecretNote]);

    let label = "Create folders";
    let folderItems = [];
    if (isFoldersLoaded && isArrayExist(folders)) {
        label = "Folder";
        folderItems = folders;
    }
    const menuItems = folderItems.map(fi => <MenuItem key={fi.id} value={fi.id}>{fi.name}</MenuItem>)

    let secretNoteInput = {
        titleValue: "",
        noteValue: "",
        folderValue: "",
        creationDateValue: new Date(),
        actionHandler: handleSave,
        action: "Create"
    };
    if (isObjectExist(editableSecretNote)) {
        const {title, note, folder, creationDate} = editableSecretNote;
        secretNoteInput = {
            titleValue: title,
            noteValue: note,
            folderValue: folderId || folder.id,
            creationDateValue: creationDate,
            actionHandler: handleUpdate,
            action: "Update"
        };
    }

    const titleElement = <TextInputElement
        value={secretNoteInput.titleValue}
        elemRef={titleRef}
        label={"Title"}
        type={"text"}
        autofocus={true}
    />;
    const folderSelect = <FormControl fullWidth sx={{mt:1}}>
        <InputLabel>{label}</InputLabel>
        <Select
            value={folderId || secretNoteInput.folderValue}
            onChange={handleChange}
        >
            {menuItems}
        </Select>
    </FormControl>;
    const noteElement = <TextInputElement
        style={_element}
        value={secretNoteInput.noteValue}
        elemRef={noteRef}
        label={"Note"}
        multiline={true}
    />;
    const creationDateElement = <DatePickerElement
        value={secretNoteInput.creationDateValue}
        style={_element}
        elemRef={creationDateRef}
    />;


    return (
        <Grid container justifyContent="center">
            <Card
                variant="elevation"
                sx={_root}
            >
                <CardContent>
                    {titleElement}
                    {folderSelect}
                    {noteElement}
                    {creationDateElement}
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                    >
                        <Button onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button onClick={secretNoteInput.actionHandler}>
                            {secretNoteInput.action}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewSecretNote;