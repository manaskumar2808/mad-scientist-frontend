import { USER_FAILURE, SET_USERS } from '../action-types';

const initState = {
    users: [],
    err: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case USER_FAILURE:
            return {
                ...state,
                err: action.err,
            }
        default:
            return state;
    }
}

export { reducer as userReducer };