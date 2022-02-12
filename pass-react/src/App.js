import React, {useEffect} from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import NewPassword from "./component/Pages/Password/Passwords";
import Folder from "./component/Pages/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";

import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";
import {fetchFolders} from "./store/state/folder/folder-actions";
import {useDispatch} from "react-redux";

function App() {
    const {
        passwords,
        folders,
        settings,
    } = reactLinks;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFolders());
    }, []);

    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={passwords} element={<NewPassword/>}/>
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
