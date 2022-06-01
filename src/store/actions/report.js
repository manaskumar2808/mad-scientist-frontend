import { REPORT_FAILURE, REPORT_SUCCESSFUL } from '../action-types';
import axios from '../../axios-config';

export const submitReport = (data) => {
    return async dispatch => {
        try {
            await axios.post('api/report', data);
            dispatch(reportSuccess());
        } catch (err) {
            dispatch(reportFailure(err.response.data.message));
        }
    }
}

const reportSuccess = () => {
    return {
        type: REPORT_SUCCESSFUL
    }
}

const reportFailure = (err) => {
    return {
        type: REPORT_FAILURE,
        err,
    }
}