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




// ***************************************
const fetchSingleBlogPostRequest = (payload)=>{
    return {
        type: types.FETCH_SINGLE_BLOG_REQUEST,
        payload
    }
}
const fetchSingleBlogPostSuccess = (payload)=>{
    return {
        type: types.FETCH_SINGLE_BLOG_SUCCESS,
        payload
    }
}
const fetchSingleBlogPostFailure = (payload)=>{
    return {
        type: types.FETCH_SINGLE_BLOG_FAILURE,
        payload
    }
}

 const fetchSingleBlogPost = (payload)=> (dispatch)=>{
    dispatch(fetchSingleBlogPostRequest());
    axios.get(`/blogs/${payload}`)
    .then(r=> dispatch(fetchSingleBlogPostSuccess(r.data)))
    .catch(e => dispatch(fetchSingleBlogPostFailure(e.data)))

 }


 // CREATE APPLICATION OR BLOGS 
 const createBlogPostRequest = (payload)=>{
    return {
        type: types.CREATE_BLOG_POST_REQUEST,
    payload,
    }
}
const createBlogPostSuccess = (payload)=>{
    return {
        type: types.CREATE_BLOG_POST_SUCCESS,
        payload
    }
}
const createBlogPostFailure = (payload)=>{
    return {
        type: types.CREATE_BLOG_POST_FAILURE,
        payload
    }
}


const createBlogPost = (payload)=> dispatch =>{
dispatch(createBlogPostRequest());
axios.post('/blogs', payload)
.then(r=> createBlogPostSuccess(r.data))
.catch(e=> createBlogPostFailure(e.data))

}

export {fetchBlogPost, fetchSingleBlogPost, createBlogPost};