import React from 'react';

import PasswordDetails from "./component/PasswordDetails";
import {itemType} from "../../utils/Constants";
import SecureNoteDetails from "./component/SecureNoteDetails";
import {isObjectExist} from "../../utils/Utils";
import CreditCardDetails from "./component/CreditCardDetails";


const DetailsFactory = (props) => {
    const {
        selectedItem,
        showDetails,
        onEdit,
        onClose
    } = props;

    const details = {
        [itemType.passwords]: (
            <PasswordDetails
                selectedPassword={selectedItem}
                showDetails={showDetails}
                onEdit={onEdit}
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
            <CreditCardDetails
                selectedCreditCard={selectedItem}
                showDetails={showDetails}
                onEdit={onEdit}
                onClose={onClose}
            />
        ),
    };


    return isObjectExist(selectedItem)
        ? details[selectedItem.type]
        : <></>;
};

export default DetailsFactory;