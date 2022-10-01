import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const CreditCard = () => {
    return useItems(itemType.creditCards, 'items');
};

export default CreditCard;