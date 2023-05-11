import axios from "axios";

// 댓글 삭제 액션 타입
const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

// 댓글 삭제 액션 생성 함수
const deleteCommentRequest = () => ({
     type: DELETE_COMMENT_REQUEST,
   });
   
   const deleteCommentSuccess = (commentId) => ({
     type: DELETE_COMMENT_SUCCESS,
     payload: commentId,
   });
   
   const deleteCommentFailure = (error) => ({
     type: DELETE_COMMENT_FAILURE,
     payload: error,
   });


// 댓글 삭제 비동기 액션 생성 함수
export const deleteComment = (data) => async (dispatch) => {
     dispatch(deleteCommentRequest());
     try {
       const response = await axios.delete(`http://52.79.197.197:8080/comments/${data.id}`);
       dispatch(deleteCommentSuccess(data));
       console.log(response)
       console.log(data.id)
     } catch (error) {
       dispatch(deleteCommentFailure(error.message));
     }
   };

   
// 댓글 삭제 초기 상태
const initialState = {
     deleting: false,
     deletedCommentId: null,
     deleteError: null,
   };
 
 
 
 // 삭제 리듀서
 const commentReducer = (state = initialState, action) => {
     switch (action.type) {
       case DELETE_COMMENT_REQUEST:
         return {
           ...state,
           deleting: true,
           deletedCommentId: null,
           deleteError: null,
         };
       case DELETE_COMMENT_SUCCESS:
         return {
           ...state,
           deleting: false,
           deletedCommentId: action.payload,
           deleteError: null,
         };
       case DELETE_COMMENT_FAILURE:
         return {
           ...state,
           deleting: false,
           deletedCommentId: null,
           deleteError: action.payload,
         };
       default:
         return state;
     }
   };
   
export default commentReducer;