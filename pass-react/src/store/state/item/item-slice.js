import {createSlice} from '@reduxjs/toolkit';
import {itemType} from "../../../utils/Constants";

const initialState = {
    items: {
        passwords: [],
        secretNotes: [],
        creditCards: [],
        isLoaded: false
    },
    itemsInFolder: {
        passwords: [],
        secretNotes: [],
        creditCards: [],
        isLoaded: false
    },
    editableItem: {editableItem: ''}
};

const {passwords, secretNotes, creditCards} = itemType;

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = {
                passwords: action.payload[passwords],
                secretNotes: action.payload[secretNotes],
                creditCards: action.payload[creditCards],
                isLoaded: true
            };
        },
        setItemsInFolder(state, action) {
            state.itemsInFolder = {
                passwords: action.payload[passwords],
                secretNotes: action.payload[secretNotes],
                creditCards: action.payload[creditCards],
                isPasswordsLoaded: true
            };
        },
        setEditableItem(state, action) {
            state.editableItem = {editableItem: action.payload};
        },
        resetEditableItem(state, action) {
            state.editableItem = {editableItem: ''};
        },
    }
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;