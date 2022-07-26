import React from 'react';
import {useParams} from "react-router-dom";

const FolderItems = () => {
    const {folderId} = useParams();
    return (
        <div>
            {folderId}
        </div>
    );
};

export default FolderItems;