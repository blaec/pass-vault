import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'
import itemReducer from './item/item-slice'
import passgenReducer from './passgen/passgen-slice'


const store = configureStore({
    reducer: {
        folder: folderReducer,
        item: itemReducer,
        passgen: passgenReducer,
    },
});

export default store;