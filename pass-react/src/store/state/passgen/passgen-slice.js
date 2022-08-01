import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passgen: {passgen: '', isPassgenLoaded: false},
};

const passgenSlice = createSlice({
    name: 'passgen',
    initialState,
    reducers: {
        setPassgen(state, action) {
            state.passgen = {passgen: action.payload, isPassgenLoaded: true};
        },
        resetPassgen(state, action) {
            state.passgen = {passgen: '', isPassgenLoaded: false};
        },
    }
});

export const passgenActions = passgenSlice.actions;
export default passgenSlice.reducer;