import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passgen: {passgen: '', strength: '', isPassgenLoaded: false, isInsertPassword: false},
};

const passgenSlice = createSlice({
    name: 'passgen',
    initialState,
    reducers: {
        setPassgen(state, action) {
            state.passgen = {
                passgen: action.payload.password,
                strength: action.payload.strength,
                isPassgenLoaded: true,
                isInsertPassword: false
            };
        },
        insertPassgen(state, action) {
            state.passgen = {
                passgen: action.payload,
                strength: action.payload.strength,
                isPassgenLoaded: true,
                isInsertPassword: true
            };
        },
        resetPassgen(state, action) {
            state.passgen = {
                passgen: '',
                strength: '',
                isPassgenLoaded: false,
                isInsertPassword: false
            };
        },
    }
});

export const passgenActions = passgenSlice.actions;
export default passgenSlice.reducer;