import React from 'react';

import ItemDetails from "../ItemDetails";
import ItemDataRow from "./ItemDataRow";
import SecretItemDataRow from "./SecretItemDataRow";


const CreditCardDetails = (props) => {
    const {selectedCreditCard, showDetails, onEdit, onClose} = props;

    const {
        id,
        title,
        folderName,
        note,
        creationDate,
        type,
        cardholderName,
        cardNumber,
        expirationDate,
        cvv,
        cardPin
    } = selectedCreditCard;
    const creditCardDetails = (
        <>
            <ItemDataRow
                id={id}
                description={"Cardholder Name"}
                value={cardholderName}
            />
            <ItemDataRow
                id={id}
                description={"Card Number"}
                value={cardNumber}
            />
            <ItemDataRow
                id={id}
                description={"Expiration Date"}
                value={expirationDate}
            />
            <SecretItemDataRow
                id={id}
                description={"CVV"}
                value={cvv}
                showDetails={showDetails}
            />
            <SecretItemDataRow
                id={id}
                description={"Card PIN"}
                value={cardPin}
                showDetails={showDetails}
            />
            <ItemDataRow
                id={id}
                description={"Folder"}
                isHideIcons={true}
                value={folderName}
            />
            <ItemDataRow
                id={id}
                description={"Note"}
                value={note}
            />
            <ItemDataRow
                id={id}
                description={"Creation date"}
                isHideIcons={true}
                value={creationDate}
            />
        </>
    );

    return (
        <ItemDetails
            itemId={id}
            itemTitle={title}
            itemDetails={creditCardDetails}
            showDetails={showDetails}
            type={type}
            onEdit={onEdit}
            onClose={onClose}
        />
    );
};

export default CreditCardDetails;