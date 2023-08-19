import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    auth: {authToken: '', authHeader: '', prod: false, isTokenLoaded: false},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            const {token, prod} = action.payload;
            state.auth = {
                authToken: token,
                authHeader: {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                },
                prod: prod,
                isTokenLoaded: true,
            };
        },
        resetToken(state, action) {
            state.auth = initialState.auth;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;