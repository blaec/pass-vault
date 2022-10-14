import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const ReusedPasswords = () => {
    return useItems(itemType.passwords, 'reusedPasswords');
};

export default ReusedPasswords;