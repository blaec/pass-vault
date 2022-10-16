import React from 'react';
import useItems from "../../../../hooks/use-items";
import {itemType} from "../../../../utils/Constants";

const Trash = () => {
    return useItems(itemType.all, 'deletedItems');
};

export default Trash;