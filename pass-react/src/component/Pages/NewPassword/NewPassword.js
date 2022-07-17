import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import {isArrayExist} from "../../../utils/Utils";
import {savePassword} from "../../../store/state/password/password-actions";
import {reactLinks} from "../../../utils/UrlUtils";
import TextInputElement from "./components/TextInputElement";
import PasswordInputElement from "./components/PasswordInputElement";

import {Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {passwordActions} from "../../../store/state/password/password-slice";


const NewPassword = () => {
    const [folder, setFolder] = React.useState('');
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
    const {editablePassword} = useSelector(state => state.password.editablePassword);
    const navigate = useNavigate();
    const titleRef = React.useRef();
    const userRef = React.useRef();
    const passwordRef = React.useRef();
    const websiteRef = React.useRef();
    const noteRef = React.useRef();

    const dispatch = useDispatch();

    console.log(editablePassword);

    const _root = {
        width: 350,
        mt: 1
    };
    const _caption = {mt: 5};
    const _element = {mt: 1};

    const handleChange = (event) => {
        setFolder(event.target.value);
    };

    const handleCancel = () => {
        navigate(reactLinks.passwords);
        dispatch(passwordActions.resetEditablePassword());
    };

    const handleSave = () => {
        const password = {
            folderId: folder,
            title: titleRef.current.value,
            user: userRef.current.value,
            password: passwordRef.current.value,
            website: websiteRef.current.value,
            note: noteRef.current.value
        };
        dispatch(savePassword(password));
        navigate(reactLinks.passwords);
    };

    const handleGeneratePassword = () => {
        alert("Generate Password");
    };

    let label = "Create folders";
    let folderItems = [];
    if (isFoldersLoaded && isArrayExist(folders)) {
        label = "Folder";
        folderItems = folders;
    }
    const menuItems = folderItems.map(fi => <MenuItem key={fi.id} value={fi.id}>{fi.name}</MenuItem>)

    return (
        <Grid container justifyContent="center">
            <Card
                variant="elevation"
                sx={_root}
            >
                <CardContent>
                    <TextInputElement
                        elemRef={titleRef}
                        label={"Title"}
                        type={"text"}
                        autofocus={true}
                    />
                    <Box sx={_caption}>
                        Login Details
                    </Box>
                    <TextInputElement
                        style={_element}
                        elemRef={userRef}
                        label={"User"}
                        type={"text"}
                    />
                    <PasswordInputElement
                        style={_element}
                        elemRef={passwordRef}
                        label={"Password"}
                    />
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <Button onClick={handleGeneratePassword}>Generate password</Button>
                    </Grid>
                    <TextInputElement
                        style={_element}
                        elemRef={websiteRef}
                        label={"Website"}
                        type={"text"}
                    />
                    <Box sx={_caption}>
                        Other
                    </Box>
                    <FormControl fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Select
                            value={folder}
                            onChange={handleChange}
                        >
                            {menuItems}
                        </Select>
                    </FormControl>
                    <TextInputElement
                        style={_element}
                        elemRef={noteRef}
                        label={"Note"}
                        multiline={true}
                    />
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
                        <Button onClick={handleSave}>
                            Save
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewPassword;