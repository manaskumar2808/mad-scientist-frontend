import { REPORT_FAILURE, REPORT_SUCCESSFUL } from '../action-types';

const initState = {
    err: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case REPORT_SUCCESSFUL:
            return {
                err: null,
                ...state,
            }
        case REPORT_FAILURE:
            return {
                err: action.err,
                ...state,
            }
        default:
            return state;
    }
}

export { reducer as reportReducer };