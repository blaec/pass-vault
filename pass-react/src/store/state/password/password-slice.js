import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passwords: {passwords: '', isPasswordsLoaded: false},
};

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPasswords(state, action) {
            state.passwords = {passwords: action.payload, isFoldersLoaded: true};
        },
    }
});

export const passwordActions = passwordSlice.actions;
export default passwordSlice.reducer;