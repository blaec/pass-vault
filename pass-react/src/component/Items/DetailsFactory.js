import React from 'react';

import PasswordDetails from "./component/PasswordDetails";
import {itemType} from "../../utils/Constants";
import SecretNoteDetails from "./component/SecretNoteDetails";


const DetailsFactory = (props) => {
    const {
        type,
        selectedItem,
        showDetails,
        isShowSecretInput,
        onEdit,
        handleShowSecretInput,
        onClose
    } = props;

    const details = {
        [itemType.passwords]: (
            <PasswordDetails
                selectedPassword={selectedItem}
                showDetails={showDetails}
                isShowPassword={isShowSecretInput}
                onEdit={onEdit}
                onShowHidePassword={handleShowSecretInput}
                onClose={onClose}
            />
        ),
        [itemType.secretNotes]: (
            <SecretNoteDetails
                selectedSecretNote={selectedItem}
                showDetails={showDetails}
                onEdit={onEdit}
                onClose={onClose}
            />
        ),
        [itemType.creditCards]: (
            <></>
        )
    };


    return details[type];
};

export default DetailsFactory;