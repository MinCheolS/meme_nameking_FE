import axios from "axios";

// 수정
const EDIT_COMMENT_REQUEST = "EDIT_COMMENT_REQUEST";
const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS";
const EDIT_COMMENT_FAILURE = "EDIT_COMMENT_FAILURE";

export const editCommentRequest = () => ({
    type: EDIT_COMMENT_REQUEST,
  });
  
  export const editCommentSuccess = (data) => ({
    type: EDIT_COMMENT_SUCCESS,
    data,
  });
  
  export const editCommentFailure = (error) => ({
    type: EDIT_COMMENT_FAILURE,
    error,
  });

  
  export const editComment = (id, user, content) => async (dispatch) => {
    if (!id) {
      console.error('postId is undefined');
      return;
    }
    try {
      dispatch(editCommentRequest());
  
      const response = await axios.put(`http://52.79.197.197:8080/posts/${user.id}`, {
        content,
      });
  
      dispatch(editCommentSuccess(response.data));
    } catch (error) {
      dispatch(editCommentFailure(error));
    }
  };

  const initialState = {
    editingComment: false,
    editCommentErrorReason: "",
    commentEdited: false,
  };
  
  const editCommentReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_COMMENT_REQUEST:
        return {
          ...state,
          editingComment: true,
          editCommentErrorReason: "",
          commentEdited: false,
        };
      case EDIT_COMMENT_SUCCESS:
        return {
          ...state,
          editingComment: false,
          commentEdited: true,
        };
      case EDIT_COMMENT_FAILURE:
        return {
          ...state,
          editingComment: false,
          editCommentErrorReason: action.error.response.data,
        };
      default:
        return state;
    }
  };
  
  export default editCommentReducer;
  