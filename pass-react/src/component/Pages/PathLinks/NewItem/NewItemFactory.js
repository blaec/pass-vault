import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {isObjectExist} from "../../../../utils/Utils";
import {saveItem, updateItem} from "../../../../store/state/item/item-actions";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";
import {itemType} from "../../../../utils/Constants";
import NewSecretNote from "./components/NewSecretNote";
import NewPassword from "./components/NewPassword";
import {itemActions} from "../../../../store/state/item/item-slice";


const NewItemFactory = (props) => {
    const {type} = props;
    const [selectedFolderId, setSelectedFolderId] = React.useState(undefined);
    const {editableItem} = useSelector(state => state.item.editableItem);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // common fields
    const titleRef = React.useRef();
    const noteRef = React.useRef();
    const creationDateRef = React.useRef();

    // password fields
    const userRef = React.useRef();
    const passwordRef = React.useRef();
    const websiteRef = React.useRef();

    // credit card fields

    useEffect(() => {
        if (isObjectExist(editableItem)) {
            const {folderId} = editableItem;
            setSelectedFolderId(folderId);
        }
    }, [editableItem]);

    const handleFolderChange = (event) => {
        setSelectedFolderId(event.target.value);
    };

    const handleSaveItem = (item, redirectLink) => {
        dispatch(saveItem(item()));
        dispatch(passgenActions.resetPassgen());
        navigate(redirectLink);
    };

    const handleUpdateItem = (item, redirectLink) => {
        dispatch(updateItem(item()));
        navigate(redirectLink);
    };

    const handleCancel = (redirectLink) => {
        dispatch(itemActions.resetEditableItem());
        dispatch(passgenActions.resetPassgen());
        navigate(redirectLink);
    };


    const item = {
        [itemType.passwords]: (
            <NewPassword
                item={editableItem}
                titleRef={titleRef}
                noteRef={noteRef}
                creationDateRef={creationDateRef}
                userRef={userRef}
                passwordRef={passwordRef}
                websiteRef={websiteRef}
                selectedFolderId={selectedFolderId}
                onFolderChange={handleFolderChange}
                onSave={handleSaveItem}
                onUpdate={handleUpdateItem}
                onCancel={handleCancel}
            />
        ),
        [itemType.secretNotes]: (
            <NewSecretNote
                item={editableItem}
                titleRef={titleRef}
                noteRef={noteRef}
                creationDateRef={creationDateRef}
                selectedFolderId={selectedFolderId}
                onFolderChange={handleFolderChange}
                onSave={handleSaveItem}
                onUpdate={handleUpdateItem}
            />
        ),
        [itemType.creditCards]: (
            <></>
        ),
    };


    return item[type];
};

export default NewItemFactory;