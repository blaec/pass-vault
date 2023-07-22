import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    auth: {authToken: '', authHeader: '', isTokenLoaded: false},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.auth = {
                authToken: action.payload,
                authHeader: {
                    headers: {
                        Authorization: 'Bearer ' + action.payload
                    }
                },
                isTokenLoaded: true
            };
        },
        resetToken(state, action) {
            state.auth = initialState.auth;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;