import axios from "../../../axios-pass";
import {feedbackActions} from "../feedback/feedback-slice";
import {authApi} from "../../../utils/UrlUtils";
import {authActions} from "./auth-slice";
import {productionEnv} from "../../localStorage/actions";

export const fetchAuthenticationToken = (credentials) => {
    return async (dispatch) => {
        axios.post(authApi.post.createAuthenticationToken, credentials)
            .then(response => {
                const {data} = response;
                dispatch(authActions.setToken(data));
                productionEnv.set(data.prod);
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
