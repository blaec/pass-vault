import {createSlice} from '@reduxjs/toolkit';
import {itemType} from "../../../utils/Constants";

const initialState = {
    items: {
        passwords: [],
        secureNotes: [],
        creditCards: [],
        isLoaded: false
    },
    itemsInFolder: {
        passwords: [],
        secureNotes: [],
        creditCards: [],
        isLoaded: false
    },
    editableItem: {editableItem: {}}
};

const {passwords, secureNotes, creditCards} = itemType;

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = {
                passwords: action.payload[passwords],
                secureNotes: action.payload[secureNotes],
                creditCards: action.payload[creditCards] || initialState.items.creditCards, // todo remove initialState
                isLoaded: true
            };
        },
        setItemsInFolder(state, action) {
            state.itemsInFolder = {
                passwords: action.payload[passwords],
                secureNotes: action.payload[secureNotes],
                creditCards: action.payload[creditCards] || initialState.items.creditCards, // todo remove initialState
                isLoaded: true
            };
        },
        setEditableItem(state, action) {
            state.editableItem = {editableItem: action.payload};
        },
        resetEditableItem(state, action) {
            state.editableItem = initialState.editableItem;
        },
    }
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;