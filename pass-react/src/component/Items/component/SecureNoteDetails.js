import React from 'react';

import ItemDataRow from "./ItemDataRow";
import ItemDetails from "../ItemDetails";


const SecureNoteDetails = (props) => {
    const {selectedSecureNote, showDetails, onEdit, onClose} = props;

    const {id, folderName, note, creationDate} = selectedSecureNote;
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
            itemId={selectedSecureNote.id}
            itemTitle={selectedSecureNote.title}
            itemDetails={secureNoteDetails}
            showDetails={showDetails}
            onEdit={onEdit}
            onClose={onClose}
        />
    );
};

export default SecureNoteDetails;