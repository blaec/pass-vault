import React from 'react';
import {useSelector} from "react-redux";

import {isArrayExist} from "../../../../../../utils/Utils";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const FolderElement = (props) => {
    const {style, value, onChange} = props;
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

    let label = "Create folders";
    let folderItems = [];
    if (isFoldersLoaded && isArrayExist(folders)) {
        label = "Folder";
        folderItems = folders;
    }
    const menuItems = folderItems.map(fi => <MenuItem key={fi.id} value={fi.id}>{fi.name}</MenuItem>)


    return (
        <FormControl
            sx={style}
            fullWidth
            required={true}
        >
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
            >
                {menuItems}
            </Select>
        </FormControl>
    );
};

export default FolderElement;