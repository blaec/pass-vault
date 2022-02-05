import axios from "../../../axios-pass";
import {folderActions} from "./folder-slice";
import {folderApi} from "../../../utils/UrlUtils";

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
        console.log(folder);
        axios.post(`${folderApi.post.saveFolder}${folder}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchFolders());
            })
            .catch(error => {
                console.log(error);
            });
    };
};