import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {fetchPasswordsByFolder} from "../../../../store/state/password/password-actions";
import usePasswords from "../../../../hooks/use-passwords";


const ItemsInFolder = () => {
    const {folderId} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPasswordsByFolder(folderId));
    }, [folderId])

    return usePasswords("passwordsByFolder", folderId);
};

export default ItemsInFolder;