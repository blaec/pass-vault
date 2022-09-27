import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const Passwords = () => {
    return useItems(itemType.passwords, 'items');
};

export default Passwords;