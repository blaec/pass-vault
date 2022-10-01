import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import Password from "./component/Pages/MenuItems/Password/Passwords";
import Folder from "./component/Pages/MenuItems/Folder/Folder";
import Settings from "./component/Pages/Settings/Settings";
import ItemsInFolder from "./component/Pages/PathLinks/ItemsInFolder/ItemsInFolder";
import SecureNote from "./component/Pages/MenuItems/SecureNote/SecureNote";
import CreditCard from "./component/Pages/MenuItems/CreditCard/CreditCard";
import NewItemFactory from "./component/Pages/PathLinks/NewItem/NewItemFactory";
import AllItems from "./component/Pages/MenuItems/allItems/AllItems";
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
        editPassword,
        newSecureNote,
        editSecureNote,
        newCreditCard,
        editCreditCard,
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
                <Route path={allItems} exact element={<AllItems/>}/>
                <Route path={passwords} exact element={<Password/>}/>
                <Route path={secureNotes} exact element={<SecureNote/>}/>
                <Route path={creditCards} exact element={<CreditCard/>}/>
                <Route path={folders} exact element={<Folder/>}/>
                <Route path={settings} exact element={<Settings/>}/>

                {/* Path links */}
                <Route path={newPassword} exact element={<NewItemFactory type={itemType.passwords}/>}/>
                <Route path={editPassword} exact element={<NewItemFactory type={itemType.passwords}/>}/>
                <Route path={newSecureNote} exact element={<NewItemFactory type={itemType.secureNotes}/>}/>
                <Route path={editSecureNote} exact element={<NewItemFactory type={itemType.secureNotes}/>}/>
                <Route path={newCreditCard} exact element={<NewItemFactory type={itemType.creditCards}/>}/>
                <Route path={editCreditCard} exact element={<NewItemFactory type={itemType.creditCards}/>}/>
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
