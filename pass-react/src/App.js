import React, {useEffect} from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import NewPassword from "./component/Pages/NewPassword/NewPassword";
import Password from "./component/Pages/Password/Passwords";
import Folder from "./component/Pages/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";

import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";
import {fetchFolders} from "./store/state/folder/folder-actions";
import {useDispatch} from "react-redux";
import {fetchPasswords} from "./store/state/password/password-actions";

function App() {
    const {
        passwords,
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
                <Route path={newPassword} element={<NewPassword/>}/>
                <Route path={folders} element={<Folder/>}/>
                <Route path={settings} element={<Settings/>}/>
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
