import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passwords: {passwords: '', isPasswordsLoaded: false},
    editablePassword: {password: ''}
};

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPasswords(state, action) {
            state.passwords = {passwords: action.payload, isPasswordsLoaded: true};
        },
        setEditablePassword(state, action) {
            state.editablePassword = {password: action.payload};
        },
        resetEditablePassword(state, action) {
            state.editablePassword = {password: ''};
        },
    }
});

export const passwordActions = passwordSlice.actions;
export default passwordSlice.reducer;