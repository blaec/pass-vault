import React from 'react';

import {itemDefaults, itemType} from "../../../../../utils/Constants";
import {expirationDateToDate, isObjectExist} from "../../../../../utils/Utils";
import TitleElement from "./elements/TitleElement";
import NoteElement from "./elements/NoteElement";
import CreationDateElement from "./elements/CreationDateElement";
import FolderElement from "./elements/FolderElement";
import NewItem from "../NewItem";
import CardholderNameElement from "./elements/CardholderNameElement";
import CardNumberElement from "./elements/CardNumberElement";
import ExpirationDateElement from "./elements/ExpirationDateElement";
import SecretElement from "./elements/SecretElement";

import {CardContent, Grid} from "@mui/material";
import Box from "@mui/material/Box";


const _caption = {mt: 5};


const NewCreditCard = (props) => {
    const {
        item,
        elementStyle,
        titleRef,
        noteRef,
        creationDateRef,
        cardholderNameRef,
        cardNumberRef,
        expirationDateRef,
        cvvRef,
        cardPinRef,
        selectedFolderId,
        onFolderChange,
        onSave,
        onUpdate,
        onCancel
    } = props;
    const [isTitleValid, setIsTitleValid] = React.useState(false);

    const handleValidTitle = (isValid) => {
        setIsTitleValid(isValid);
    };

    let creditCardInput = {
        titleValue: "",
        cardholderName: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        cardPin: "",
        noteValue: "",
        folderValue: "",
        creationDateValue: itemDefaults.creationDate(),
        actionHandler: onSave,
        actionName: "Create"
    };
    let creditCardItem = () => ({
        itemType: itemType.creditCards,
        folderId: selectedFolderId,
        title: titleRef?.current?.value,
        cardholderName: cardholderNameRef?.current?.value,
        cardNumber: cardNumberRef?.current?.value,
        expirationDate: expirationDateToDate(expirationDateRef?.current?.value),
        cvv: cvvRef?.current?.value,
        cardPin: cardPinRef?.current?.value,
        note: noteRef?.current?.value,
        creationDate: creationDateRef?.current?.value
    });
    if (isObjectExist(item)) {
        const {id, title, cardholderName, cardNumber, expirationDate, cvv, cardPin, note, folderId, creationDate} = item;
        creditCardInput = {
            titleValue: title,
            cardholderNameValue: cardholderName,
            cardNumberValue: cardNumber,
            expirationDateValue: expirationDate,
            cvvValue: cvv,
            cardPinValue: cardPin,
            noteValue: note,
            folderValue: selectedFolderId || folderId,
            creationDateValue: creationDate,
            actionHandler: onUpdate,
            actionName: "Update"
        };
        creditCardItem = () => ({
            itemType: itemType.creditCards,
            title: titleRef?.current?.value,
            cardholderName: cardholderNameRef?.current?.value,
            cardNumber: cardNumberRef?.current?.value,
            expirationDate: expirationDateToDate(expirationDateRef?.current?.value),
            cvv: cvvRef?.current?.value,
            cardPin: cardPinRef?.current?.value,
            note: noteRef?.current?.value,
            creationDate: creationDateRef?.current?.value,
            id: id,
            folderId: selectedFolderId || folderId
        });
    }

    const titleElement = (
        <TitleElement
            value={creditCardInput.titleValue}
            elemRef={titleRef}
            onValid={(isValid) => {handleValidTitle(isValid)}}
        />
    );
    const cardholderNameElement = (
        <CardholderNameElement
            style={elementStyle}
            value={creditCardInput.cardholderNameValue}
            elemRef={cardholderNameRef}
        />
    );
    const cardNumberElement = (
        <CardNumberElement
            style={elementStyle}
            value={creditCardInput.cardNumberValue}
            elemRef={cardNumberRef}
        />
    );
    const expirationDateElement = (
        <ExpirationDateElement
            style={elementStyle}
            value={creditCardInput.expirationDateValue}
            elemRef={expirationDateRef}
        />
    );
    const cvvElement = (
        <SecretElement
            style={elementStyle}
            label={"CVV"}
            value={creditCardInput.cvvValue}
            elemRef={cvvRef}
        />
    );
    const cardPinElement = (
        <SecretElement
            style={elementStyle}
            label={"Card PIN"}
            value={creditCardInput.cardPinValue}
            elemRef={cardPinRef}
        />
    );
    const noteElement = (
        <NoteElement
            style={elementStyle}
            value={creditCardInput.noteValue}
            elemRef={noteRef}
        />
    );
    const creationDateElement = (
        <CreationDateElement
            style={elementStyle}
            value={creditCardInput.creationDateValue}
            elemRef={creationDateRef}
        />
    );
    const folderSelect = (
        <FolderElement
            value={selectedFolderId || creditCardInput.folderValue}
            onChange={onFolderChange}
        />
    );

    const cardContent = (
        <CardContent>
            {titleElement}
            <Box sx={_caption}>
                Card Details
            </Box>
            {cardholderNameElement}
            {cardNumberElement}
            {expirationDateElement}
            {cvvElement}
            {cardPinElement}
            <Box sx={_caption}>
                Other
            </Box>
            {folderSelect}
            {noteElement}
            {creationDateElement}
        </CardContent>
    );
    const canSubmit = isTitleValid;


    return (
        <Grid container justifyContent="center">
            <NewItem
                item={creditCardItem}
                actionName={creditCardInput.actionName}
                action={creditCardInput.actionHandler}
                cardContent={cardContent}
                onCancel={onCancel}
                canSubmit={canSubmit}
            />
        </Grid>
    );};

export default NewCreditCard;