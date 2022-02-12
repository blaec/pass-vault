import React from 'react';
import {useSelector} from "react-redux";

import {isArrayExist} from "../../../utils/Utils";

import {Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Password = () => {
    const [folder, setFolder] = React.useState('');
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
    const titleRef = React.useRef();
    const userRef = React.useRef();
    const passwordRef = React.useRef();
    const websiteRef = React.useRef();
    const noteRef = React.useRef();

    const handleChange = (event) => {
        setFolder(event.target.value);
    };

    const handleCancel = () => {
        setFolder('');
        titleRef.current.reset();
        userRef.current.reset();
        passwordRef.current.reset();
        websiteRef.current.reset();
        noteRef.current.reset();
    };

    const handleSave = () => {
        alert(`New password: title ${titleRef.current.value} | user: ${userRef.current.value} | password: ${passwordRef.current.value} | website: ${websiteRef.current.value} | note: ${noteRef.current.value} | to folder: ${folder}`);
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
        <Card variant="elevation" sx={{width: 300}}>
            <CardContent>
                <TextField
                    inputRef={titleRef}
                    autoFocus
                    label="Title"
                    type="text"
                    fullWidth
                    variant="filled"
                />
                <Box sx={{mt:5}}>
                    Login Details
                </Box>
                <TextField
                    sx={{mt:1}}
                    inputRef={userRef}
                    autoFocus
                    label="User"
                    type="text"
                    fullWidth
                    variant="filled"
                />
                <TextField
                    sx={{mt:1}}
                    inputRef={passwordRef}
                    autoFocus
                    label="Password"
                    type="password"
                    fullWidth
                    variant="filled"
                />
                <Button onClick={handleGeneratePassword}>Generate password</Button>
                <TextField
                    sx={{mt:1}}
                    inputRef={websiteRef}
                    autoFocus
                    label="Website"
                    type="text"
                    fullWidth
                    variant="filled"
                />
                <Box sx={{mt:5}}>
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
                <TextField
                    sx={{mt:1}}
                    inputRef={noteRef}
                    label="Note"
                    multiline
                    rows={4}
                    fullWidth
                    variant="filled"
                />
            </CardContent>
            <CardActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </CardActions>
        </Card>
    );
};

export default Password;