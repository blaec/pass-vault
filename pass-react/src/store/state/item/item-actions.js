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
                dispatch(fetchActiveItems());
                dispatch(fetchHealthItems());
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
                dispatch(fetchActiveItems());
                dispatch(fetchHealthItems());
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
                dispatch(fetchActiveItems());
                dispatch(fetchHealthItems());
            })
            .catch(error => {
                console.log(error);
            });
    };
};