import React, {useEffect} from 'react';
import ItemDetails from "../ItemDetails";
import ItemDataRow from "./ItemDataRow";
import IconVisibility from "../../../UI/IconButtons/IconVisibility";

const CreditCardDetails = (props) => {
    const {selectedCreditCard, showDetails, onEdit, onClose} = props;
    const [isShowCvv, setIsShowCvv] = React.useState(false);
    const [isShowCardPin, setIsShowCardPin] = React.useState(false);

    const onShowHideCvv = () => {
        setIsShowCvv(!isShowCvv);
    }
    const showHideCvv = (
        <IconVisibility
            isShowPassword={isShowCvv}
            onShowHidePassword={onShowHideCvv}
        />
    );
    const onShowHideCardPin = () => {
        setIsShowCardPin(!isShowCardPin);
    }
    const showHideCardPin = (
        <IconVisibility
            isShowPassword={isShowCardPin}
            onShowHidePassword={onShowHideCardPin}
        />
    );
    useEffect(() => {
        setIsShowCvv(false);
        setIsShowCardPin(false);
    }, [showDetails])

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
            <ItemDataRow
                id={id}
                description={"CVV"}
                value={cvv}
                isHidden={!isShowCvv}
                icon={showHideCvv}
            />
            <ItemDataRow
                id={id}
                description={"Card PIN"}
                value={cardPin}
                isHidden={!isShowCardPin}
                icon={showHideCardPin}
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