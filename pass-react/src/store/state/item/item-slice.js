import {createSlice} from '@reduxjs/toolkit';
import {itemType} from "../../../utils/Constants";

const initialState = {
    items: {
        passwords: [],
        secureNotes: [],
        creditCards: [],
        isLoaded: false
    },
    deletedItems: {
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
    weakPasswords: {
        passwords: [],
        isLoaded: false,
    },
    reusedPasswords: {
        passwords: [],
        isLoaded: false,
    },
    oldPasswords: {
        passwords: [],
        isLoaded: false,
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
                creditCards: action.payload[creditCards],
                isLoaded: true
            };
        },
        setDeletedItems(state, action) {
            state.deletedItems = {
                passwords: action.payload[passwords],
                secureNotes: action.payload[secureNotes],
                creditCards: action.payload[creditCards],
                isLoaded: true
            };
        },
        setItemsInFolder(state, action) {
            state.itemsInFolder = {
                passwords: action.payload[passwords],
                secureNotes: action.payload[secureNotes],
                creditCards: action.payload[creditCards],
                isLoaded: true
            };
        },
        setHealthItems(state, action) {
            state.weakPasswords = {
                ...state.weakPasswords,
                passwords: action.payload.weak,
                isLoaded: true
            };
            state.reusedPasswords = {
                ...state.reusedPasswords,
                passwords: action.payload.reused,
                isLoaded: true
            };
            state.oldPasswords = {
                ...state.oldPasswords,
                passwords: action.payload.old,
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