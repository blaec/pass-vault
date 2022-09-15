import axios from "../../../axios-pass";
import {secretNoteApi} from "../../../utils/UrlUtils";
import {secretNoteActions} from "./secret-note-slice";

export const fetchSecretNotes = () => {
    return async (dispatch) => {
        axios.get(secretNoteApi.get.getAll)
            .then(response => {
                const {data} = response;
                dispatch(secretNoteActions.setSecretNotes(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchSecretNotesByFolder = (folderId) => {
    return async (dispatch) => {
        axios.get(`${secretNoteApi.get.getAllByFolder}${folderId}`)
            .then(response => {
                const {data} = response;
                dispatch(secretNoteActions.setSecretNotesByFolder(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const saveSecretNote = (secretNote) => {
    return async (dispatch) => {
        axios.post(`${secretNoteApi.post.create}`, secretNote)
            .then(response => {
                const {data} = response;
                dispatch(fetchSecretNotes());
                dispatch(secretNoteActions.resetEditableSecretNote());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateSecretNote = (secretNote) => {
    return async (dispatch) => {
        axios.put(`${secretNoteApi.put.update}`, secretNote)
            .then(response => {
                const {data} = response;
                dispatch(fetchSecretNotes());
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const deleteSecretNote = (id) => {
    return async (dispatch) => {
        axios.delete(`${secretNoteApi.delete.delete}${id}`)
            .then(response => {
                const {data} = response;
                dispatch(fetchSecretNotes());
            })
            .catch(error => {
                console.log(error);
            });
    };
};