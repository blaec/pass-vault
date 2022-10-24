import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    search: {search: '', hasSearch: false},
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSearch(state, action) {
            const {payload} = action;
            state.search = {search: payload.toLowerCase(), hasSearch: payload.length > 0};
        },
    }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;