import axios from "../../../axios-pass";
import {passwordHistoryApi} from "../../../utils/UrlUtils";
import {feedbackActions} from "../feedback/feedback-slice";
import {passwordHistoryActions} from "./passwordHistory-slice";

export const fetchPasswordHistory = (passwordId) => {
    return async (dispatch) => {
        axios.get(`${passwordHistoryApi.get.getAllByPasswordId}${passwordId}`)
            .then(response => {
                const {data} = response;
                dispatch(passwordHistoryActions.setPasswordHistory(data));
            })
            .catch(error => {
                console.log(error);
                dispatch(feedbackActions.setSnackbar({
                    message: `${error} | Failed to fetch password history for id: ${passwordId}`,
                    type: 'error'
                }));
            });
    };
};
