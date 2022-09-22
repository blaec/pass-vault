import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import usePasswords from "../../../../hooks/use-passwords";
import {fetchItemsInFolder} from "../../../../store/state/item/item-actions";


const ItemsInFolder = () => {
    const {folderId} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItemsInFolder(folderId));
    }, [folderId])

    return usePasswords("itemsInFolder", folderId);
};

export default ItemsInFolder;