import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'
import itemReducer from './item/item-slice'
import passwordReducer from './password/password-slice'
import passgenReducer from './passgen/passgen-slice'
import secretNoteReducer from './secretNote/secret-note-slice'



const store = configureStore({
    reducer: {
        folder: folderReducer,
        item: itemReducer,
        password: passwordReducer,
        passgen: passgenReducer,
        secretNote: secretNoteReducer,
    },
});

export default store;