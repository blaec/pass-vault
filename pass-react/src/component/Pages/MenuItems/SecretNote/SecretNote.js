import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const SecretNote = () => {
    return useItems(itemType.secretNotes, 'items');
};

export default SecretNote;