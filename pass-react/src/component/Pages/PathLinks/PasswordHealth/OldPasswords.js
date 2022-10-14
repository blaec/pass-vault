import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const OldPasswords = () => {
    return useItems(itemType.passwords, 'oldPasswords');
};

export default OldPasswords;