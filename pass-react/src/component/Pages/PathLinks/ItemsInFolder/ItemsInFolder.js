import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchPasswordsByFolder} from "../../../../store/state/password/password-actions";
import Test from "./Test";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {reactLinks} from "../../../../utils/UrlUtils";


const ItemsInFolder = () => {
    const {folderId} = useParams();
    const {passwordsByFolder, isPasswordsByFolderLoaded} = useSelector(state => state.password.passwordsByFolder);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPasswordsByFolder(folderId));
    },[folderId])

    let passTitle = null;
    // useEffect(() => {
        if (isPasswordsByFolderLoaded) {
            passTitle = <Test passwords={passwordsByFolder} isPasswordsLoaded={true}/>;
        }
    // }, [passwordsByFolder])


    return <>{passTitle}</>
    };

export default ItemsInFolder;