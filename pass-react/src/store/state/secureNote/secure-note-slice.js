import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    secureNotes: {secureNotes: '', isSecureNotesLoaded: false},
    secureNotesByFolder: {secureNotes: '', isSecureNotesLoaded: false},
    editableSecureNote: {editableSecureNote: ''}
};

const secureNoteSlice = createSlice({
    name: 'secureNote',
    initialState,
    reducers: {
        setSecureNotes(state, action) {
            state.secureNotes = {secureNotes: action.payload, isSecureNotesLoaded: true};
        },
        setSecureNotesByFolder(state, action) {
            state.secureNotesByFolder = {secureNotes: action.payload, isSecureNotesLoaded: true};
        },
        setEditableSecureNote(state, action) {
            state.editableSecureNote = {editableSecureNote: action.payload};
        },
        resetEditableSecureNote(state, action) {
            state.editableSecureNote = {editableSecureNote: ''};
        },
    }
});

export const secureNoteActions = secureNoteSlice.actions;
export default secureNoteSlice.reducer;