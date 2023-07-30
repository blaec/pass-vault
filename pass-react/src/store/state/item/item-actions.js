import axios from "../../../axios-pass";
import {itemActions} from "./item-slice";
import {itemApi} from "../../../utils/UrlUtils";
import {authentication, currentFolder} from "../../localStorage/actions";
import {feedbackActions} from "../feedback/feedback-slice";

export const fetchActiveItems = () => {
    let headers = {headers: {"Authorization": `Bearer ${authentication.get()}`}}
    return async (dispatch) => {
        axios.get(itemApi.get.getAllActive, headers)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setItems(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch active items`,
                    type: 'error'
                }));
            });
    };
};

export const fetchDeletedItems = () => {
    let headers = {headers: {"Authorization": `Bearer ${authentication.get()}`}}
    return async (dispatch) => {
        axios.get(itemApi.get.getAllDeleted, headers)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setDeletedItems(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch deleted items`,
                    type: 'error'
                }));
            });
    };
};

export const fetchItemsInFolder = (folderId) => {
    let headers = {headers: {"Authorization": `Bearer ${authentication.get()}`}}
    return async (dispatch) => {
        axios.get(`${itemApi.get.getAllInFolder}${folderId}`, headers)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setItemsInFolder(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to items from folder id: ${folderId}`,
                    type: 'error'
                }));
            });
    };
};

export const fetchHealthItems = () => {
    let headers = {headers: {"Authorization": `Bearer ${authentication.get()}`}}
    return async (dispatch) => {
        axios.get(itemApi.get.getAllHealthItems, headers)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setHealthItems(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch health items`,
                    type: 'error'
                }));
            });
    };
};

export const saveItem = (item) => {
    return async (dispatch) => {
        axios.post(`${itemApi.post.create}`, item)
            .then(response => {
                const {data} = response;
                reload(dispatch);
                dispatch(itemActions.setResult(data));
                dispatch(itemActions.resetEditableItem());
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to save item ${item.itemType}`,
                    type: 'error'
                }));
            });
    };
};

export const updateItem = (item) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.update}`, item)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to update item ${item.itemType}`,
                    type: 'error'
                }));
            });
    };
};

export const restoreItemFromTrash = (type, id) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.restore}${type}/${id}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to restore item from trash ${type}`,
                    type: 'error'
                }));
            });
    };
};

export const moveItemToTrash = (type, id) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.moveToTrash}${type}/${id}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to move item to trash ${type}`,
                    type: 'error'
                }));
            });
    };
};

export const deleteItem = (type, id) => {
    return async (dispatch) => {
        axios.delete(`${itemApi.delete.delete}${type}/${id}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to delete item ${type}`,
                    type: 'error'
                }));
            });
    };
};

export const emptyTrash = () => {
    return async (dispatch) => {
        axios.delete(`${itemApi.delete.emptyTrash}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setResult(data));
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to empty trash`,
                    type: 'error'
                }));
            });
    };
};

const reload = (dispatch) => {
    dispatch(fetchActiveItems());
    dispatch(fetchDeletedItems());
    dispatch(fetchHealthItems());
    const folderId = currentFolder.get();
    if (folderId !== null) {
        dispatch(fetchItemsInFolder(folderId));
    }
};