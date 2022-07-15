import * as types from "./actionType";

const initialState = {
  blogs: [],
  loading: false,
  currentBlog: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // eslint - disable -next line default-case
  switch (type) {
    case types.FETCH_BLOG_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: payload,
        error: "",
      };
    case types.FETCH_BLOG_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    // ********************** we are define three action types here
    case types.FETCH_SINGLE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        currentBlog: {...payload},
        error: "",
      };
    case types.FETCH_SINGLE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
