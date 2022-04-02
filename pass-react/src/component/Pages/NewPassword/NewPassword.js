import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import {isArrayExist} from "../../../utils/Utils";
import {savePassword} from "../../../store/state/password/password-actions";
import {reactLinks} from "../../../utils/UrlUtils";
import PasswordElement from "./components/PasswordElement";

import {
    Card,
    CardActions,
    CardContent,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";


const NewPassword = () => {
    const [folder, setFolder] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);
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
        setFolder(event.target.value);
    };

    const handleCancel = () => {
        navigate(reactLinks.passwords);
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
                    <PasswordElement
                        elemRef={titleRef}
                        label={"Title"}
                        type={"text"}
                        autofocus={true}
                    />
                    <Box sx={_caption}>
                        Login Details
                    </Box>
                    <PasswordElement
                        style={_element}
                        elemRef={userRef}
                        label={"User"}
                        type={"text"}
                    />
                    <FormControl fullWidth sx={_element} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            inputRef={passwordRef}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <Button onClick={handleGeneratePassword}>Generate password</Button>
                    </Grid>
                    <PasswordElement
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
                    <PasswordElement
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