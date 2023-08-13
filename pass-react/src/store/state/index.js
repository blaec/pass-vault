import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'
import itemReducer from './item/item-slice'
import passgenReducer from './passgen/passgen-slice'
import feedbackReducer from "./feedback/feedback-slice";
import filterReducer from "./filter/filter-slice";
import authReducer from "./authentication/auth-slice";
import passwordHistoryReducer from "./passwordHistory/passwordHistory-slice";


const store = configureStore({
    reducer: {
        folder: folderReducer,
        item: itemReducer,
        passgen: passgenReducer,
        feedback: feedbackReducer,
        filter: filterReducer,
        auth: authReducer,
        passwordHistory: passwordHistoryReducer,
    },
});

export default store;