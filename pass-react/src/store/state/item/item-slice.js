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
    weakPasswords: {
        passwords: [],
        secureNotes: [],
        creditCards: [],
        isLoaded: false,
        isWeakLoaded: false
    },
    reusedPasswords: {
        passwords: [],
        secureNotes: [],
        creditCards: [],
        isLoaded: false,
        isReusedLoaded: false
    },
    oldPasswords: {
        passwords: [],
        secureNotes: [],
        creditCards: [],
        isLoaded: false,
        isOldLoaded: false
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
                isWeakLoaded: true,
                isLoaded: true
            };
            state.reusedPasswords = {
                ...state.reusedPasswords,
                passwords: action.payload.reused,
                isReusedLoaded: true,
                isLoaded: true
            };
            state.oldPasswords = {
                ...state.oldPasswords,
                passwords: action.payload.old,
                isOldLoaded: true,
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