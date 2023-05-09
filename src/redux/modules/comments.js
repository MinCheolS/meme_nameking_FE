import { createSlice } from "@reduxjs/toolkit";


// 초기값
const initialState = [
        {
            id: 1,
            nickname: "홍길동",
            comment: '댓글'
        },
        {
            id: 2,
            nickname: "홍길동",
            comment: '댓글2'
        }
    ];


const commentsSlice = createSlice({
    name:"mySlice",
    initialState,
    reducers: {
        addComment: (state, action) => {
            return [...state, action.payload]
        },
        deleteComment: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
            
        } 
    }
})

export const {addComment, deleteComment} = commentsSlice.actions;
export default commentsSlice.reducer;