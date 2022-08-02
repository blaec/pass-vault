import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import {isArrayExist, isObjectExist} from "../../../../utils/Utils";
import {savePassword, updatePassword} from "../../../../store/state/password/password-actions";
import {reactLinks} from "../../../../utils/UrlUtils";
import TextInputElement from "./components/TextInputElement";
import PasswordInputElement from "./components/PasswordInputElement";
import {passwordActions} from "../../../../store/state/password/password-slice";
import {fetchGeneratedPassword} from "../../../../store/state/passgen/passgen-actions";

import {Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";


const NewPassword = () => {
    const [folderId, setFolderId] = React.useState(undefined);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
    const {editablePassword} = useSelector(state => state.password.editablePassword);
    const navigate = useNavigate();
    const titleRef = React.useRef();
    const userRef = React.useRef();
    const passwordRef = React.useRef();
    const websiteRef = React.useRef();
    const noteRef = React.useRef();

    const dispatch = useDispatch();

    const _root = {
        width: 350,
        mt: 1
    };
    const _caption = {mt: 5};
    const _element = {mt: 1};

    const handleChange = (event) => {
        setFolderId(event.target.value);
    };

    const handleCancel = () => {
        navigate(reactLinks.passwords);
        dispatch(passwordActions.resetEditablePassword());
        dispatch(passgenActions.resetPassgen());
    };

    const handleSave = () => {
        const password = {
            folderId: folderId,
            title: titleRef.current.value,
            user: userRef.current.value,
            password: passwordRef.current.value,
            website: websiteRef.current.value,
            note: noteRef.current.value
        };
        dispatch(savePassword(password));
        dispatch(passgenActions.resetPassgen());
        navigate(reactLinks.passwords);
    };

    const handleUpdate = () => {
        const password = {
            passwordId: editablePassword.id,
            folderId: folderId,
            title: titleRef.current.value,
            user: userRef.current.value,
            password: passwordRef.current.value,
            website: websiteRef.current.value,
            note: noteRef.current.value
        };
        dispatch(updatePassword(password));
        navigate(reactLinks.passwords);
    };

    const handleGeneratePassword = () => {
        const settings = {
            length: 12,
            isUseUpperCase: true,
            isUseDigits: true,
            isUseSpecialChars: true,
        }
        dispatch(fetchGeneratedPassword(settings));
    };

    useEffect(() => {
        if (isObjectExist(editablePassword)) {
            const {folder} = editablePassword;
            setFolderId(folder.id);
        }
    }, [editablePassword]);

    let label = "Create folders";
    let folderItems = [];
    if (isFoldersLoaded && isArrayExist(folders)) {
        label = "Folder";
        folderItems = folders;
    }
    const menuItems = folderItems.map(fi => <MenuItem key={fi.id} value={fi.id}>{fi.name}</MenuItem>)

    let passwordInput = {
        titleValue: "",
        userValue: "",
        passwordValue: "",
        websiteValue: "",
        noteValue: "",
        folderValue: "",
        actionHandler: handleSave,
        action: "Create"
    };
    if (isObjectExist(editablePassword)) {
        const {title, user, password, website, note, folder} = editablePassword;
        passwordInput = {
            titleValue: title,
            userValue: user,
            passwordValue: password,
            websiteValue: website,
            noteValue: note,
            folderValue: folderId || folder.id,
            actionHandler: handleUpdate,
            action: "Update"
        };
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
    const folderSelect = <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
            value={passwordInput.folderValue}
            onChange={handleChange}
        >
            {menuItems}
        </Select>
    </FormControl>;
    const noteElement = <TextInputElement
        style={_element}
        value={passwordInput.noteValue}
        elemRef={noteRef}
        label={"Note"}
        multiline={true}
    />;

    return (
        <Grid container justifyContent="center">
            <Card
                variant="elevation"
                sx={_root}
            >
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
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <Button onClick={handleGeneratePassword}>Generate password</Button>
                    </Grid>
                    {websiteElement}
                    <Box sx={_caption}>
                        Other
                    </Box>
                    {folderSelect}
                    {noteElement}
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
                        <Button onClick={passwordInput.actionHandler}>
                            {passwordInput.action}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewPassword;