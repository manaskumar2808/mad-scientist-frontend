import { POST_FAILURE, SET_POSTS } from '../action-types';
import axios from '../../axios-config';

export const fetchPosts = () => {
    return async dispatch => {
        try {
            const response = await axios.get('api/post');
            const { posts } = response.data;
            dispatch(setPosts(posts));
        } catch (err) {
            dispatch(postFailure(err.response.data.message));
            throw err;
        }
    }
}

const setPosts = (posts) => {
    const loadedPosts = [];
    for (let key in posts) {
        loadedPosts.push(posts[key]);
    }
    return {
        type: SET_POSTS,
        posts: loadedPosts,
    };
}

const postFailure = (err) => {
    return {
        type: POST_FAILURE,
        err,
    }
}
