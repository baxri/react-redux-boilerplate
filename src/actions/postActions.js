import axios from "axios";
import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPosts() {
    return function (dispatch) {

        axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
            dispatch({
                type: FETCH_POSTS,
                payload: data,
            });
        });

    }
}

export function createPost(post) {
    return function (dispatch) {
        axios.post('https://jsonplaceholder.typicode.com/posts', post).then(({ data }) => {
            dispatch({
                type: NEW_POSTS,
                payload: data,
            });
        });

    }
}


