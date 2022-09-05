import {createSlice} from '@reduxjs/toolkit';

import {passwordStrength} from "../../../utils/Constants";

const initialState = {
    passgen: {passgen: '', strength: '', isPassgenLoaded: false, isInsertPassword: false},
    strength: {strength: passwordStrength.weak, isStrengthLoaded: false}
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
        setStrength(state, action) {
            state.strength = {
                strength: action.payload,
                isStrengthLoaded: true
            };
        },
        resetStrength(state, action) {
            state.strength = {
                strength: passwordStrength.weak,
                isStrengthLoaded: false
            };
        },
    }
});

export const passgenActions = passgenSlice.actions;
export default passgenSlice.reducer;