import axios from "../../../axios-pass";
import {passwordApi} from "../../../utils/UrlUtils";
import {passwordActions} from "./password-slice";

export const fetchPasswords = () => {
    return async (dispatch) => {
        axios.get(passwordApi.get.getAll)
            .then(response => {
                const {data} = response;
                dispatch(passwordActions.setPasswords(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export const savePassword = (password) => {
    return async (dispatch) => {
        axios.post(`${passwordApi.post.save}${password}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchPasswords());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateFolder = (password) => {
    return async (dispatch) => {
        axios.put(`${passwordApi.put.update}`, password)
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
        axios.delete(`${passwordApi.delete.delete}${id}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchPasswords());
            })
            .catch(error => {
                console.log(error);
            });
    };
};