import React from 'react';

import PasswordDetails from "./component/PasswordDetails";
import {itemType} from "../../utils/Constants";
import SecureNoteDetails from "./component/SecureNoteDetails";
import {isObjectExist} from "../../utils/Utils";


const DetailsFactory = (props) => {
    const {
        selectedItem,
        showDetails,
        isShowSecureInput,
        onEdit,
        handleShowSecureInput,
        onClose
    } = props;

    const details = {
        [itemType.passwords]: (
            <PasswordDetails
                selectedPassword={selectedItem}
                showDetails={showDetails}
                isShowPassword={isShowSecureInput}
                onEdit={onEdit}
                onShowHidePassword={handleShowSecureInput}
                onClose={onClose}
            />
        ),
        [itemType.secureNotes]: (
            <SecureNoteDetails
                selectedSecureNote={selectedItem}
                showDetails={showDetails}
                onEdit={onEdit}
                onClose={onClose}
            />
        ),
        [itemType.creditCards]: (
            <></>
        ),
    };


    return isObjectExist(selectedItem)
        ? details[selectedItem.type]
        : <></>;
};

export default DetailsFactory;