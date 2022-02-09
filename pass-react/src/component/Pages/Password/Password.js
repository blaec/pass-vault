import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {isArrayExist} from "../../../utils/Utils";

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
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        value={age}
                        onChange={handleChange}
                    >
                        {menuItems}
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export default Password;