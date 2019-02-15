import {
    FETCH_PHONES_REQUEST,
    FETCH_PHONES_FAILED,
    FETCH_PHONES_SUCCES
} from '../constants/actionTypes';

import {getPhonesFromApi} from "../services/requests";

export const getPhonesActions = (data) => ({type: FETCH_PHONES_REQUEST});
export const getPhonesSuccess = (data) => ({type: FETCH_PHONES_SUCCES, payload: data});
export const getPhonesFailed = (error) => ({type: FETCH_PHONES_FAILED, payload: error});

export function getPhones() {
    return function (dispatch) {
        dispatch(getPhonesActions());
        return getPhonesFromApi()
            .then(res => dispatch(getPhonesSuccess(res.data)))
            .catch(err => dispatch(getPhonesFailed(err)));
    };
}

