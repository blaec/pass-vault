import axios from "../../../axios-pass";
import {folderActions} from "./folder-slice";
import {authHeader, folderApi} from "../../../utils/UrlUtils";
import {fetchActiveItems} from "../item/item-actions";
import {feedbackActions} from "../feedback/feedback-slice";
import {itemActions} from "../item/item-slice";

export const fetchFolders = () => {
    return async (dispatch) => {
        axios.get(folderApi.get.getAll, authHeader)
            .then(response => {
                const {data} = response;
                dispatch(folderActions.setFolders(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch folders`,
                    type: 'error'
                }));
            });
    };
}

export const saveFolder = (folder) => {
    return async (dispatch) => {
        axios.post(`${folderApi.post.save}${folder}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                dispatch(fetchFolders());
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to save folder ${folder.name}`,
                    type: 'error'
                }));
            });
    };
};

export const updateFolder = (folder) => {
    return async (dispatch) => {
        axios.put(`${folderApi.put.update}`, folder)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                dispatch(fetchFolders());
                dispatch(fetchActiveItems());
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to update folder ${folder.name}`,
                    type: 'error'
                }));
            });
    };
};

export const deleteFolder = (id) => {
    return async (dispatch) => {
        axios.delete(`${folderApi.delete.delete}${id}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                dispatch(fetchFolders());
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to delete folder id: ${id}`,
                    type: 'error'
                }));
            });
    };
};