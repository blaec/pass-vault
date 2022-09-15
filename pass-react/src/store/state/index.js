import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'
import passwordReducer from './password/password-slice'
import passgenReducer from './passgen/passgen-slice'
import secretNoteReducer from './secretNote/secret-note-slice'



const store = configureStore({
    reducer: {
        folder: folderReducer,
        password: passwordReducer,
        passgen: passgenReducer,
        secretNote: secretNoteReducer,
    },
});

export default store;