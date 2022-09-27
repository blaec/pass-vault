import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'
import itemReducer from './item/item-slice'
import passgenReducer from './passgen/passgen-slice'
import secureNoteReducer from './secureNote/secure-note-slice'


const store = configureStore({
    reducer: {
        folder: folderReducer,
        item: itemReducer,
        passgen: passgenReducer,
        secureNote: secureNoteReducer,
    },
});

export default store;