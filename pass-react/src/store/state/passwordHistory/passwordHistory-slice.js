import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passwordHistory: {passwordHistory: [], isPasswordHistoryLoaded: false},
};

const passwordHistorySlice = createSlice({
    name: 'passwordHistory',
    initialState,
    reducers: {
        setPasswordHistory(state, action) {
            state.passwordHistory = {passwordHistory: action.payload, isPasswordHistoryLoaded: true};
        },
        resetPasswordHistory(state, action) {
            state.passwordHistory = initialState.passwordHistory;
        },
    }
});

export const passwordHistoryActions = passwordHistorySlice.actions;
export default passwordHistorySlice.reducer;