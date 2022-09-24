import React from 'react';

import PasswordDataRow from "../PasswordDataRow";
import ItemDetails from "../ItemDetails";


const SecretNoteDetails = (props) => {
    const {selectedSecretNote, showDetails, onEdit, onClose} = props;

    const {id, folderName, note, creationDate} = selectedSecretNote;
    const secretNoteDetails = (
        <>
            <PasswordDataRow
                id={id}
                description={"Folder"}
                isHideIcons={true}
                value={folderName}
            />
            <PasswordDataRow
                id={id}
                description={"Note"}
                value={note}
            />
            <PasswordDataRow
                id={creationDate}
                description={"Creation date"}
                isHideIcons={true}
                value={creationDate}
            />
        </>
    );


    return (
        <ItemDetails
            itemId={selectedSecretNote.id}
            itemTitle={selectedSecretNote.title}
            itemDetails={secretNoteDetails}
            showDetails={showDetails}
            onEdit={onEdit}
            onClose={onClose}
        />
    );
};

export default SecretNoteDetails;