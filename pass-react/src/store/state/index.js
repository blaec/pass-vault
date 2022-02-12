import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'
import passwordReducer from './password/password-slice'



const store = configureStore({
    reducer: {
        folder: folderReducer,
        password: passwordReducer,
    },
});

export default store;