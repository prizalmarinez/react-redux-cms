import { FETCH_ALL_POSTS, ADD_POST } from './types'
// api
import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: FETCH_ALL_POSTS,
        payload: response.data.slice(0, 10)
    })
}

export const addPost = value => async dispatch => {
    const newPost = value;
    const response = await jsonPlaceholder.post('/posts', newPost);
    dispatch({
        type: ADD_POST,
        payload: response.data
    })
}