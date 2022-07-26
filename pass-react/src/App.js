import React, {useEffect} from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import NewPassword from "./component/Pages/PathLinks/NewPassword/NewPassword";
import Password from "./component/Pages/MenuItems/Password/Passwords";
import Folder from "./component/Pages/MenuItems/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";

import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";
import {fetchFolders} from "./store/state/folder/folder-actions";
import {useDispatch} from "react-redux";
import {fetchPasswords} from "./store/state/password/password-actions";

function App() {
    const {
        home,
        allItems,
        passwords,
        passwordsByFolder,
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
                <Route path={passwords} element={<Password/>}/>
                <Route path={folders} element={<Folder/>}/>
                <Route path={settings} element={<Settings/>}/>

                {/* Path links */}
                <Route path={passwordsByFolder} exact element={<Password/>}/>

                {/* Links */}
                <Route path={newPassword} element={<NewPassword/>}/>
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
