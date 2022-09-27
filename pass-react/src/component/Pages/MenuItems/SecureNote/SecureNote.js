import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const SecureNote = () => {
    return useItems(itemType.secureNotes, 'items');
};

export default SecureNote;