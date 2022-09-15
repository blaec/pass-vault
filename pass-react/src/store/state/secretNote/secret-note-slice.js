import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    secretNotes: {secretNotes: '', isSecretNotesLoaded: false},
    secretNotesByFolder: {secretNotes: '', isSecretNotesLoaded: false},
    editableSecretNote: {editableSecretNote: ''}
};

const secretNoteSlice = createSlice({
    name: 'secretNote',
    initialState,
    reducers: {
        setSecretNotes(state, action) {
            state.secretNotes = {secretNotes: action.payload, isSecretNotesLoaded: true};
        },
        setSecretNotesByFolder(state, action) {
            state.secretNotesByFolder = {secretNotes: action.payload, isSecretNotesLoaded: true};
        },
        setEditableSecretNote(state, action) {
            state.editableSecretNote = {editableSecretNote: action.payload};
        },
        resetEditableSecretNote(state, action) {
            state.editableSecretNote = {editableSecretNote: ''};
        },
    }
});

export const secretNoteActions = secretNoteSlice.actions;
export default secretNoteSlice.reducer;