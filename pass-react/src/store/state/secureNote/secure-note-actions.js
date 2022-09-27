import axios from "../../../axios-pass";
import {secureNoteApi} from "../../../utils/UrlUtils";
import {secureNoteActions} from "./secure-note-slice";

export const fetchSecureNotes = () => {
    return async (dispatch) => {
        axios.get(secureNoteApi.get.getAll)
            .then(response => {
                const {data} = response;
                dispatch(secureNoteActions.setSecureNotes(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchSecureNotesByFolder = (folderId) => {
    return async (dispatch) => {
        axios.get(`${secureNoteApi.get.getAllByFolder}${folderId}`)
            .then(response => {
                const {data} = response;
                dispatch(secureNoteActions.setSecureNotesByFolder(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const saveSecureNote = (secureNote) => {
    return async (dispatch) => {
        axios.post(`${secureNoteApi.post.create}`, secureNote)
            .then(response => {
                const {data} = response;
                dispatch(fetchSecureNotes());
                dispatch(secureNoteActions.resetEditableSecureNote());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateSecureNote = (secureNote) => {
    return async (dispatch) => {
        axios.put(`${secureNoteApi.put.update}`, secureNote)
            .then(response => {
                const {data} = response;
                dispatch(fetchSecureNotes());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const deleteSecureNote = (id) => {
    return async (dispatch) => {
        axios.delete(`${secureNoteApi.delete.delete}${id}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchSecureNotes());
            })
            .catch(error => {
                console.log(error);
            });
    };
};