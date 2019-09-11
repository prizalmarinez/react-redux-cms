import { FETCH_ALL_POSTS, ADD_POST } from '../actions/types'

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_ALL_POSTS:
            return {
                ...state, ...payload
            }
        case ADD_POST:
            return {
                ...state, payload
            }
        default:
            return state
    }
}