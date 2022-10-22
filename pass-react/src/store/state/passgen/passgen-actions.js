import axios from "../../../axios-pass";
import {passgenActions} from "./passgen-slice";
import {passgenApi} from "../../../utils/UrlUtils";
import {feedbackActions} from "../feedback/feedback-slice";


export const fetchGeneratedPassword = (settings) => {
    return async (dispatch) => {
        axios.post(`${passgenApi.post.create}`, settings)
            .then(response => {
                const {data} = response;
                dispatch(passgenActions.setPassgen(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch generated password`,
                    type: 'error'
                }));
            });
    };
};

export const fetchPasswordStrength = (password) => {
    return async (dispatch) => {
        axios.post(`${passgenApi.post.strength}`, {password: password})
            .then(response => {
                const {data} = response;
                dispatch(passgenActions.setStrength(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch password strength`,
                    type: 'error'
                }));
            });
    };
};