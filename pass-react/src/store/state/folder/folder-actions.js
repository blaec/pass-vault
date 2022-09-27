import axios from "../../../axios-pass";
import {folderActions} from "./folder-slice";
import {folderApi} from "../../../utils/UrlUtils";
import {fetchItems} from "../item/item-actions";

export const fetchFolders = () => {
    return async (dispatch) => {
        axios.get(folderApi.get.getAll)
            .then(response => {
                const {data} = response;
                dispatch(folderActions.setFolders(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export const saveFolder = (folder) => {
    return async (dispatch) => {
        axios.post(`${folderApi.post.save}${folder}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchFolders());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateFolder = (folder) => {
    return async (dispatch) => {
        axios.put(`${folderApi.put.update}`, folder)
            .then(response => {
                const {data} = response;
                dispatch(fetchFolders());
                dispatch(fetchItems());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const deleteFolder = (id) => {
    return async (dispatch) => {
        axios.delete(`${folderApi.delete.delete}${id}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchFolders());
            })
            .catch(error => {
                console.log(error);
            });
    };
};