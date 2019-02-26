import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
    item: {},
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, items: action.payload }
            break;
        case NEW_POSTS:
            return { ...state, item: action.payload }
            break;
        default:
            return state;
    }
}