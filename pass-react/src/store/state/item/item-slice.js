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

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems(state, action) {
            state.passwords = {
                passwords: action.payload[itemType.passwords],
                secretNotes: action.payload[itemType.secretNotes],
                creditCards: action.payload[itemType.creditCards],
                isLoaded: true
            };
        },
        setItemsInFolder(state, action) {
            state.itemsInFolder = {
                passwords: action.payload[itemType.passwords],
                secretNotes: action.payload[itemType.secretNotes],
                creditCards: action.payload[itemType.creditCards],
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