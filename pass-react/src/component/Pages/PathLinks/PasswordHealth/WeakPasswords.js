import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const WeakPasswords = () => {
    return useItems(itemType.passwords, 'weakPasswords');
};

export default WeakPasswords;