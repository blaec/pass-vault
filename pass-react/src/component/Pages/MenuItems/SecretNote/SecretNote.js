import React from 'react';
import useSecretNotes from "../../../../hooks/use-secretNotes";

const SecretNote = () => {
    return useSecretNotes('secretNotes');
};

export default SecretNote;