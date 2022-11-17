import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {isArrayExist, isStringExist} from "../../../../../../utils/Utils";
import useSelect from "../../../../../../hooks/use-select";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const validateValue = (text) =>
    isStringExist(`${text}`)
    && Number.isInteger(+text);


const FolderElement = (props) => {
    const {style, value, onChange, onValid} = props;
    const {folders, isFoldersLoaded} = useSelector(state => state.folder.folders);

    const {
        handleFieldTouch,
        isValid,
        hasError
    } = useSelect(value, validateValue);


    let label = "Create folders";
    let folderItems = [];
    if (isFoldersLoaded && isArrayExist(folders)) {
        label = "Folder";
        folderItems = folders;
    }
    const menuItems = folderItems.map(fi => <MenuItem key={fi.id} value={fi.id}>{fi.name}</MenuItem>)

    const handleChange = (event) => {
        onChange(event.target.value);
    };
    useEffect(() => {
        onValid(isValid);
    }, [isValid]);


    return (
        <FormControl
            sx={style}
            fullWidth
            required={true}
        >
            <InputLabel>{label}</InputLabel>
            <Select
                error={hasError}
                value={value}
                onChange={handleChange}
                onBlur={handleFieldTouch}
            >
                {menuItems}
            </Select>
        </FormControl>
    );
};

export default FolderElement;