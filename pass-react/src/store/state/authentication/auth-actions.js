import axios from "../../../axios-pass";
import {feedbackActions} from "../feedback/feedback-slice";
import {authApi} from "../../../utils/UrlUtils";
import {authActions} from "./auth-slice";

export const fetchAuthenticationToken = (credentials) => {
    return async (dispatch) => {
        axios.post(authApi.post.createAuthenticationToken, credentials)
            .then(response => {
                const {data} = response;
                dispatch(authActions.authenticate(data));
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
