import React from 'react';

import ItemDataRow from "./ItemDataRow";
import ItemDetails from "../ItemDetails";


const SecureNoteDetails = (props) => {
    const {selectedSecureNote, showDetails, onEdit, onClose} = props;

    const {id, title, folderName, note, creationDate, type} = selectedSecureNote;
    const secureNoteDetails = (
        <>
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
                id={creationDate}
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
            itemDetails={secureNoteDetails}
            showDetails={showDetails}
            type={type}
            onEdit={onEdit}
            onClose={onClose}
        />
    );
};

export default SecureNoteDetails;