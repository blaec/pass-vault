import {configureStore} from "@reduxjs/toolkit";

import folderReducer from './folder/folder-slice'



const store = configureStore({
    reducer: {
        folder: folderReducer,

    },
});

export default store;