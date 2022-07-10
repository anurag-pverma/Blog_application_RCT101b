import * as types from  './actionType';

import axios from 'axios';

const fetchBlogPostRequest = (payload)=>{
    return {
        type: types.FETCH_BLOG_POSTS_REQUEST,
        payload
    }
}
const fetchBlogPostSuccess = (payload)=>{
    return {
        type: types.FETCH_BLOG_POSTS_SUCCESS,
        payload
    }
}
const fetchBlogPostFailure = (payload)=>{
    return {
        type: types.FETCH_BLOG_POSTS_FAILURE,
        payload
    }
}

// WE WILL define fuction that will help make that axios call

const fetchBlogPost = (payload)=> (dispatch)=>{
    dispatch(fetchBlogPostRequest());
    axios.get('/blogs')
    .then((r)=> dispatch(fetchBlogPostSuccess(r.data)))
    .catch((e)=> dispatch(fetchBlogPostFailure(e.data)))
};


export {fetchBlogPost};