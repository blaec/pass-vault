import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import Folder from "./component/Pages/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";

import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";

function App() {
    const {
        passwords,
        settings,
    } = reactLinks;


    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={passwords} element={<Folder/>}/>
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
