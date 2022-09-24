import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import useItems from "../../../../hooks/use-items";
import {fetchItemsInFolder} from "../../../../store/state/item/item-actions";
import {itemType} from "../../../../utils/Constants";


const ItemsInFolder = () => {
    const {folderId} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItemsInFolder(folderId));
    }, [folderId])

    return useItems(itemType.passwords, "itemsInFolder", folderId);
};

export default ItemsInFolder;