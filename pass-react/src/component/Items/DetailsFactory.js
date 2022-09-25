import React from 'react';

import PasswordDetails from "./component/PasswordDetails";
import {itemType} from "../../utils/Constants";
import SecretNoteDetails from "./component/SecretNoteDetails";
import {isObjectExist} from "../../utils/Utils";


const DetailsFactory = (props) => {
    const {
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
        ),
    };


    return isObjectExist(selectedItem)
        ? details[selectedItem.type]
        : <></>;
};

export default DetailsFactory;