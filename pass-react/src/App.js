import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import Password from "./component/Pages/MenuItems/Password/Passwords";
import Folder from "./component/Pages/MenuItems/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";
import ItemsInFolder from "./component/Pages/PathLinks/ItemsInFolder/ItemsInFolder";
import SecretNote from "./component/Pages/MenuItems/SecretNote/SecretNote";
import NewItemFactory from "./component/Pages/PathLinks/NewPassword/NewItemFactory";
import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";
import {fetchFolders} from "./store/state/folder/folder-actions";
import {fetchItems} from "./store/state/item/item-actions";
import {itemType} from "./utils/Constants";

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
        updatePassword,
        newSecretNote,
        updateSecretNote,
        newCreditCard,
        updateCreditCard,
        folders,
        settings,
    } = reactLinks;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFolders());
        dispatch(fetchItems());
    }, []);

    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={passwords} exact element={<Password/>}/>
                <Route path={secureNotes} exact element={<SecretNote/>}/>
                <Route path={folders} exact element={<Folder/>}/>
                <Route path={settings} exact element={<Settings/>}/>

                {/* Path links */}
                <Route path={newPassword} exact element={<NewItemFactory type={itemType.passwords}/>}/>
                <Route path={updatePassword} exact element={<NewItemFactory type={itemType.passwords}/>}/>
                <Route path={newSecretNote} exact element={<NewItemFactory type={itemType.secretNotes}/>}/>
                <Route path={updateSecretNote} exact element={<NewItemFactory type={itemType.secretNotes}/>}/>
                <Route path={newCreditCard} exact element={<NewItemFactory type={itemType.creditCards}/>}/>
                <Route path={updateCreditCard} exact element={<NewItemFactory type={itemType.creditCards}/>}/>
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
