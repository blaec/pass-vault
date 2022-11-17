import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {isObjectExist} from "../../../../utils/Utils";
import {saveItem, updateItem} from "../../../../store/state/item/item-actions";
import {passgenActions} from "../../../../store/state/passgen/passgen-slice";
import {itemType} from "../../../../utils/Constants";
import NewSecureNote from "./components/NewSecureNote";
import NewPassword from "./components/NewPassword";
import {itemActions} from "../../../../store/state/item/item-slice";
import NewCreditCard from "./components/NewCreditCard";

const _element = {mt: 1};


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
    const ageRef = React.useRef();

    // credit card fields
    const cardholderNameRef = React.useRef();
    const cardNumberRef = React.useRef();
    const expirationDateRef = React.useRef();
    const cvvRef = React.useRef();
    const cardPinRef = React.useRef();

    useEffect(() => {
        if (isObjectExist(editableItem)) {
            const {folderId} = editableItem;
            setSelectedFolderId(folderId);
        }
    }, [editableItem]);

    const handleFolderChange = (id) => {
        setSelectedFolderId(id);
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
                elementStyle={_element}
                titleRef={titleRef}
                noteRef={noteRef}
                creationDateRef={creationDateRef}
                userRef={userRef}
                passwordRef={passwordRef}
                websiteRef={websiteRef}
                ageRef={ageRef}
                selectedFolderId={selectedFolderId}
                onFolderChange={handleFolderChange}
                onSave={handleSaveItem}
                onUpdate={handleUpdateItem}
                onCancel={handleCancel}
            />
        ),
        [itemType.secureNotes]: (
            <NewSecureNote
                item={editableItem}
                elementStyle={_element}
                titleRef={titleRef}
                noteRef={noteRef}
                creationDateRef={creationDateRef}
                selectedFolderId={selectedFolderId}
                onFolderChange={handleFolderChange}
                onSave={handleSaveItem}
                onUpdate={handleUpdateItem}
                onCancel={handleCancel}
            />
        ),
        [itemType.creditCards]: (
            <NewCreditCard
                item={editableItem}
                elementStyle={_element}
                titleRef={titleRef}
                noteRef={noteRef}
                creationDateRef={creationDateRef}
                cardholderNameRef={cardholderNameRef}
                cardNumberRef={cardNumberRef}
                expirationDateRef={expirationDateRef}
                cvvRef={cvvRef}
                cardPinRef={cardPinRef}
                selectedFolderId={selectedFolderId}
                onFolderChange={handleFolderChange}
                onSave={handleSaveItem}
                onUpdate={handleUpdateItem}
                onCancel={handleCancel}
            />
        ),
    };


    return item[type];
};

export default NewItemFactory;