import axios from "../../../axios-pass";
import {passgenActions} from "./passgen-slice";
import {passgenApi} from "../../../utils/UrlUtils";

export const fetchGeneratedPassword = (settings) => {
    return async (dispatch) => {
        axios.post(`${passgenApi.post.create}`, settings)
            .then(response => {
                const {data} = response;
                dispatch(passgenActions.setPassgen(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};