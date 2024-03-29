import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";

import Password from "./component/Pages/MenuItems/Password/Passwords";
import Folder from "./component/Pages/MenuItems/Folder/Folder";
import PasswordHealth from "./component/Pages/MenuItems/PasswordHealth/PasswordHealth";
import ItemsInFolder from "./component/Pages/PathLinks/ItemsInFolder/ItemsInFolder";
import SecureNote from "./component/Pages/MenuItems/SecureNote/SecureNote";
import CreditCard from "./component/Pages/MenuItems/CreditCard/CreditCard";
import NewItemFactory from "./component/Pages/PathLinks/NewItem/NewItemFactory";
import AllItems from "./component/Pages/MenuItems/allItems/AllItems";
import Trash from "./component/Pages/MenuItems/Trash/Trash";
import WeakPasswords from "./component/Pages/PathLinks/PasswordHealth/WeakPasswords";
import ReusedPasswords from "./component/Pages/PathLinks/PasswordHealth/ReusedPasswords";
import OldPasswords from "./component/Pages/PathLinks/PasswordHealth/OldPasswords";
import Layout from "./hoc/Layout";
import {reactLinks} from "./utils/UrlUtils";
import {fetchFolders} from "./store/state/folder/folder-actions";
import {
    fetchActiveItems,
    fetchDeletedItems,
    fetchHealthItems,
    fetchItemsInFolder
} from "./store/state/item/item-actions";
import {itemType} from "./utils/Constants";
import {currentFolder} from "./store/localStorage/actions";
import ProtectedRoute from "./component/Pages/Login/ProtectedRoute";
import Login from "./component/Pages/Login/Login";
import PasswordHistory from "./component/Pages/PathLinks/PasswordHistory/PasswordHistory";

function App() {
    const {
        home,
        login,
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
        passwordHistory,
        folders,
        passwordHealth,
        weakPassword,
        reusedPassword,
        oldPassword,
    } = reactLinks;
    const {pathname} = useLocation();

    const {authToken} = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authToken) {
            dispatch(fetchFolders());
            dispatch(fetchActiveItems());
            dispatch(fetchDeletedItems());
            dispatch(fetchHealthItems());
            const folderId = currentFolder.get();
            if (folderId !== null) {
                dispatch(fetchItemsInFolder(folderId));
            }
        }
    }, [authToken]);

    useEffect(() => {
        if (pathname.includes(reactLinks.folderItemsEndpoint)) {
            const folderId = pathname.replace(reactLinks.folderItemsEndpoint, '');
            currentFolder.set(folderId);
        } else {
            currentFolder.remove();
        }
    }, [pathname])

    const layout = (
        <Layout>
            <Routes>
                <Route index element={<Login />} />
                <Route path={login} element={<Login />} />

                <Route element={<ProtectedRoute/>}>
                    {/* Menu items */}
                    <Route path={allItems} exact element={<AllItems/>}/>
                    <Route path={passwords} exact element={<Password/>}/>
                    <Route path={secureNotes} exact element={<SecureNote/>}/>
                    <Route path={creditCards} exact element={<CreditCard/>}/>
                    <Route path={folders} exact element={<Folder/>}/>
                    <Route path={trash} exact element={<Trash/>}/>
                    <Route path={passwordHealth} exact element={<PasswordHealth/>}/>

                    {/* Path links */}
                    <Route path={newPassword} exact element={<NewItemFactory type={itemType.passwords}/>}/>
                    <Route path={editPassword} exact element={<NewItemFactory type={itemType.passwords}/>}/>
                    <Route path={newSecureNote} exact element={<NewItemFactory type={itemType.secureNotes}/>}/>
                    <Route path={editSecureNote} exact element={<NewItemFactory type={itemType.secureNotes}/>}/>
                    <Route path={newCreditCard} exact element={<NewItemFactory type={itemType.creditCards}/>}/>
                    <Route path={editCreditCard} exact element={<NewItemFactory type={itemType.creditCards}/>}/>
                    <Route path={passwordHistory} exact element={<PasswordHistory/>}/>
                    <Route path={folderItems} exact element={<ItemsInFolder/>}/>
                    <Route path={weakPassword} exact element={<WeakPasswords/>}/>
                    <Route path={reusedPassword} exact element={<ReusedPasswords/>}/>
                    <Route path={oldPassword} exact element={<OldPasswords/>}/>
                </Route>

                <Route path="*" element={<Navigate replace to={home}/>}/>
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
