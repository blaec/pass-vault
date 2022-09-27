import React from 'react';

import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";


const AllItems = () => {
    return useItems(itemType.all, 'items');
};

export default AllItems;