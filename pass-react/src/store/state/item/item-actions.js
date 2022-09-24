import axios from "../../../axios-pass";
import {itemActions} from "./item-slice";
import {itemApi} from "../../../utils/UrlUtils";

export const fetchItems = () => {
    return async (dispatch) => {
        axios.get(itemApi.get.getAll)
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

export const saveItem = (password) => {
    return async (dispatch) => {
        axios.post(`${itemApi.post.create}`, password)
            .then(response => {
                const {data} = response;
                dispatch(fetchItems());
                dispatch(itemActions.resetEditableItem());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateItem = (password) => {
    return async (dispatch) => {
        axios.put(`${itemApi.put.update}`, password)
            .then(response => {
                const {data} = response;
                dispatch(fetchItems());
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
                dispatch(fetchItems());
            })
            .catch(error => {
                console.log(error);
            });
    };
};