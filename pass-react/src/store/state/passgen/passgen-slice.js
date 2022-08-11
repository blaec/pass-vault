import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passgen: {passgen: '', isPassgenLoaded: false, isInsertPassword: false},
};

const passgenSlice = createSlice({
    name: 'passgen',
    initialState,
    reducers: {
        setPassgen(state, action) {
            state.passgen = {passgen: action.payload, isPassgenLoaded: true, isInsertPassword: false};
        },
        insertPassgen(state, action) {
            state.passgen = {passgen: action.payload, isPassgenLoaded: true, isInsertPassword: true};
        },
        resetPassgen(state, action) {
            state.passgen = {passgen: '', isPassgenLoaded: false, isInsertPassword: false};
        },
    }
});

export const passgenActions = passgenSlice.actions;
export default passgenSlice.reducer;