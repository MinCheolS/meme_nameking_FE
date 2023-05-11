import axios from "axios";

// 댓글 추가 액션 타입 정의
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";


// 댓글 추가 액션 생성 함수
export const addCommentRequest = () => ({
  type: ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = (data) => ({
  type: ADD_COMMENT_SUCCESS,
  data: data.data
});

export const addCommentFailure = (error) => ({
  type: ADD_COMMENT_FAILURE,
  error,
});


// 댓글 추가 thunk 함수
export const addComment = (id, content) => async (dispatch) => {
    if (!id) {
        console.error('id is undefined');
        return;
      }
    try {
    dispatch(addCommentRequest());

    const response = await axios.post(`http://52.79.197.197:8080/comments/`, {
        postId : id,
        content
    });

    dispatch(addCommentSuccess(response.data));
  } catch (error) {
    dispatch(addCommentFailure(error));
  }
};


// 댓글 추가 리듀서
const initialState = {
  Comment : [],
  addingComment: false,
  addCommentErrorReason: "",
  commentAdded: false,
};


const addCommentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COMMENT_REQUEST:
        return {
          ...state,
          addingComment: true,
          addCommentErrorReason: "",
          commentAdded: false,
        };
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          addingComment: false,
          commentAdded: true,
        };
      case ADD_COMMENT_FAILURE:
        return {
          ...state,
          addingComment: false,
          addCommentErrorReason: action.error.response.data,
        };
      default:
        return state;
    }
  };

export default addCommentReducer;
