import { USER_FAILURE, SET_USERS } from '../action-types';
import axios from '../../axios-config';

export const fetchUsers = () => {
    return async dispatch => {
        try {
            const response = await axios.get('api/user');
            console.log(response.data);
            const { users } = response.data;
            dispatch(setUsers(users));
        } catch (err) {
            dispatch(userFailure(err.response.data.message));
            throw err;
        }
    }
}

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    };
}

const userFailure = (err) => {
    return {
        type: USER_FAILURE,
        err,
    }
}
