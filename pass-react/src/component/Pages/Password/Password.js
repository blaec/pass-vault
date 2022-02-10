import React from 'react';
import {Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useSelector} from "react-redux";
import {isArrayExist} from "../../../utils/Utils";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Password = () => {
    const [age, setAge] = React.useState('');
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

    const handleChange = (event) => {
        setAge(event.target.value);
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
                <FormControl fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        value={age}
                        onChange={handleChange}
                    >
                        {menuItems}
                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="User"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Website"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    label="Note"
                    multiline
                    rows={4}
                    fullWidth
                    variant="standard"
                />
            </CardContent>
            <CardActions>
                <Button>Cancel</Button>
                <Button>Save</Button>
            </CardActions>
        </Card>
    );
};

export default Password;