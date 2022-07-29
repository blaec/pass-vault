import React, {useEffect} from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import {useDispatch} from "react-redux";

import NewPassword from "./component/Pages/PathLinks/NewPassword/NewPassword";
import Password from "./component/Pages/MenuItems/Password/Passwords";
import Folder from "./component/Pages/MenuItems/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";
import ItemsInFolder from "./component/Pages/PathLinks/ItemsInFolder/ItemsInFolder";

import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";
import {fetchFolders} from "./store/state/folder/folder-actions";
import {fetchPasswords} from "./store/state/password/password-actions";

function App() {
    const {
        home,
        allItems,
        passwords,
        folderItems,
        secureNotes,
        creditCards,
        trash,
        newPassword,
        folders,
        settings,
    } = reactLinks;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFolders());
        dispatch(fetchPasswords());
    }, []);

    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={passwords} exact element={<Password/>}/>
                <Route path={folders} exact element={<Folder/>}/>
                <Route path={settings} exact element={<Settings/>}/>

                {/* Path links */}
                <Route path={newPassword} exact element={<NewPassword/>}/>
                <Route path={folderItems} exact element={<ItemsInFolder/>}/>
            </Routes>
        </Layout>
    );

    return (
        <React.Fragment>
            {layout}
        </React.Fragment>
    );
}

export default App;
