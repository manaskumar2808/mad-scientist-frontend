import { POST_FAILURE, SET_POSTS } from '../action-types';

const initState = {
    posts: [],
    err: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        case POST_FAILURE:
            return {
                ...state,
                err: action.err,
            }
        default:
            return state;
    }
}

export { reducer as postReducer };