import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    folders: {folders: '', isFoldersLoaded: false},
};

const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        setFolders(state, action) {
            state.folders = {folders: action.payload, isFoldersLoaded: true};
        },
    }
});

export const folderActions = folderSlice.actions;
export default folderSlice.reducer;