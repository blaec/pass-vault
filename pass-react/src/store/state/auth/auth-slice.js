import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: '',
        password: 'success',
    },
};

const feedbackSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            const {name, password} = action.payload;
            state.snackbar.name = name;
            state.snackbar.password = password;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;