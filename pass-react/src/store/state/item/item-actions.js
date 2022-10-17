import axios from "../../../axios-pass";
import {itemActions} from "./item-slice";
import {itemApi} from "../../../utils/UrlUtils";

export const fetchActiveItems = () => {
    return async (dispatch) => {
        axios.get(itemApi.get.getAllActive)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setItems(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchDeletedItems = () => {
    return async (dispatch) => {
        axios.get(itemApi.get.getAllDeleted)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setDeletedItems(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchItemsInFolder = (folderId) => {
    return async (dispatch) => {
        axios.get(`${itemApi.get.getAllInFolder}${folderId}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setItemsInFolder(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchHealthItems = () => {
    return async (dispatch) => {
        axios.get(itemApi.get.getAllHealthItems)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setHealthItems(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const saveItem = (item) => {
    return async (dispatch) => {
        axios.post(`${itemApi.post.create}`, item)
            .then(response => {
                const {data} = response;
                reload(dispatch);
                dispatch(itemActions.resetEditableItem());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateItem = (item) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.update}`, item)
            .then(response => {
                const {data} = response;
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const restoreItemFromTrash = (type, id) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.restore}${type}/${id}`)
            .then(response => {
                const {data} = response;
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const moveItemToTrash = (type, id) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.moveToTrash}${type}/${id}`)
            .then(response => {
                const {data} = response;
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const deleteItem = (type, id) => {
    return async (dispatch) => {
        axios.delete(`${itemApi.delete.delete}${type}/${id}`)
            .then(response => {
                const {data} = response;
                reload(dispatch);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

const reload = (dispatch) => {
    dispatch(fetchActiveItems());
    dispatch(fetchDeletedItems());
    dispatch(fetchHealthItems());
    const folderId = localStorage.getItem("currentFolder");
    if (folderId !== null) {
        dispatch(fetchItemsInFolder(folderId));
    }
};