import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passwords: {passwords: '', isPasswordsLoaded: false},
    passwordsByFolder: {passwords: '', isPasswordsLoaded: false},
    editablePassword: {editablePassword: ''}
};

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPasswords(state, action) {
            state.passwords = {passwords: action.payload, isPasswordsLoaded: true};
        },
        setPasswordsByFolder(state, action) {
            state.passwordsByFolder = {passwords: action.payload, isPasswordsLoaded: true};
        },
        setEditablePassword(state, action) {
            state.editablePassword = {editablePassword: action.payload};
        },
        resetEditablePassword(state, action) {
            state.editablePassword = {editablePassword: ''};
        },
    }
});

export const passwordActions = passwordSlice.actions;
export default passwordSlice.reducer;