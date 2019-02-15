import {
    FETCH_PHONES_REQUEST,
    FETCH_PHONES_FAILED,
    FETCH_PHONES_SUCCES
} from '../constants/actionTypes';

const initialState = {
    phones: [],
    isLoading: false
};

export default reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_PHONES_REQUEST: {
            return {
                ...state,
                isLoading: true,
                phones: [],
            }
        }
        case FETCH_PHONES_SUCCES: {
            return {
                ...state,
                isLoading: false,
                phones: [...payload]
            }
        }
        case FETCH_PHONES_FAILED: {
            return {
                ...state,
                isLoading: false,
                phones: []
            }
        }
    }

    return state
}