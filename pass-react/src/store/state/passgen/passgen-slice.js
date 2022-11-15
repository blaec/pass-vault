import {createSlice} from '@reduxjs/toolkit';

import {passwordStrength} from "../../../utils/Constants";

const initialState = {
    passgen: {
        passgen: '',
        strength: '',
        isPassgenLoaded: false,
        canInsertPassword: false,
        isPassgenInserted: false,
    },
    strength: {
        strength: passwordStrength.weak,
        isStrengthLoaded: false
    }
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
                canInsertPassword: false
            };
        },
        insertPassgen(state, action) {
            state.passgen = {
                passgen: action.payload.passgen,
                strength: action.payload.strength,
                isPassgenLoaded: true,
                canInsertPassword: true
            };
            state.strength = {
                strength: action.payload.strength,
                isStrengthLoaded: true
            };
        },
        setPassgenInserted(state, action) {
            state.passgen = {
                ...state.passgen,
                canInsertPassword: false,
                isPassgenInserted: true
            };
        },
        resetPassgen(state, action) {
            state.passgen = initialState.passgen;
        },
        setStrength(state, action) {
            state.strength = {
                strength: action.payload,
                isStrengthLoaded: true
            };
        },
        resetStrength(state, action) {
            state.strength = initialState.strength;
        },
    }
});

export const passgenActions = passgenSlice.actions;
export default passgenSlice.reducer;