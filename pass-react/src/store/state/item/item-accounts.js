import axios from "../../../axios-pass";
import {itemApi} from "../../../utils/UrlUtils";
import {itemActions} from "./item-slice";

export const fetchItems = () => {
    return async (dispatch) => {
        axios.get(itemActions.get.getAll)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setPasswords(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchPasswordsByFolder = (folderId) => {
    return async (dispatch) => {
        axios.get(`${itemActions.get.getAllByFolder}${folderId}`)
            .then(response => {
                const {data} = response;
                dispatch(itemActions.setPasswordsByFolder(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const savePassword = (password) => {
    return async (dispatch) => {
        axios.post(`${itemActions.post.create}`, password)
            .then(response => {
                const {data} = response;
                dispatch(fetchPasswords());
                dispatch(itemActions.resetEditablePassword());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updatePassword = (password) => {
    return async (dispatch) => {
        axios.put(`${itemActions.put.update}`, password)
            .then(response => {
                const {data} = response;
                dispatch(fetchPasswords());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const deletePassword = (id) => {
    return async (dispatch) => {
        axios.delete(`${itemActions.delete.delete}${id}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchPasswords());
            })
            .catch(error => {
                console.log(error);
            });
    };
};