import *  as types from './actionType';

const initialState = {
    blogs: [],
    loading: false,
    error:''
}

const blogReducer = (state= initialState, action)=>{
    const {type, payload} = action;
    // eslint - disable -next line default-case
    switch(type){
        case types.FETCH_BLOG_POSTS_REQUEST:
            return{
                ... state,
                loading: true,
                error: '',
                
            };
        case types.FETCH_BLOG_POSTS_SUCCESS:
            return{
                ... state,
                loading: false,
                blogs: payload,
                error: '',
                
            };
        case types.FETCH_BLOG_POSTS_FAILURE:
            return{
                ... state,
                loading: false,
                error: payload,
                
            };
        default:
            return state;
    }
   
}

export default blogReducer;