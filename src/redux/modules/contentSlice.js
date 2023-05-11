import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { servertUrl } from ".";


const initialState = {
loading: false,
error: null,
data: [],
};



export const ddabongsContents = createAsyncThunk(
    "contents/ddabongsContents",
    async (content) => {
        const response = await axios.post(`http://${servertUrl}/posts/ddabongking`, content);
        // console.log(response)
        // console.log(response.data)
        // console.log(content)
        return response.data;
    }
    );







export const fetchContents = createAsyncThunk(
"contents/fetchContents",
async (contentId) => {
    const response = await axios.get(`http://${servertUrl}/posts/${contentId}/contents`);
    return response.data;
}
);

export const addContent = createAsyncThunk(
"contents/addContent",
async (content) => {
    const response = await axios.post(`http://${servertUrl}/contents/`, content);
    return response.data;
}
);

export const deleteContent = createAsyncThunk(
"contents/deleteContent",
async (contentId) => {
    const response = await axios.delete(`http://${servertUrl}/contents/${contentId}`);
    return response.data;
}
);

export const updateContent = createAsyncThunk(
"contents/updateContent",
async (content) => {
    const response = await axios.put(`http://${servertUrl}/contents/${content.id}`, content);
    return response.data;
}
);

const contentSlice = createSlice({
name: "content",
initialState,
reducers: {},
extraReducers: {
    [fetchContents.pending]: (state) => {
    state.loading = true;
    },
    [fetchContents.fulfilled]: (state, action) => {
    state.loading = false;
    state.error = null;
    state.data = action.payload;
    },
    [fetchContents.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.error.message;
    },
    [addContent.fulfilled]: (state, action) => {
    state.data.push(action.payload);
    },
    [deleteContent.fulfilled]: (state, action) => {
    state.data = state.data.filter(
        (content) => content.id !== action.payload.id
    );
    },
    [updateContent.fulfilled]: (state, action) => {
    const contentIndex = state.data.findIndex(
        (content) => content.id === action.payload.id
    );
    if (contentIndex !== -1) {
        state.data[contentIndex] = action.payload;
    }
    },
},
});

export const selectComments = (state) => state.comments;
export default contentSlice.reducer;




// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { servertUrl } from ".";
// import { instance } from "../../api/login/LoginAxios";

// const initialState = { postList: [] };

// //코멘트 GET요청
// export const _getContentList = createAsyncThunk(
//     "getContentList",
//     async (payload, thunkAPI) => {
//         try {
//             const data = await instance.get(
//                     `http://${servertUrl}/posts/${payload.Id}/comments`,
//                     {
//                         headers: {
//                             Access_Token:localStorage.getItem("id")
//                         },
//                     }
//             );
//             return thunkAPI.fulfillWithValue(data.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

// //코멘트 POST요청
// export const _postContent = createAsyncThunk(
//     "postContent",
//     async (payload, thunkAPI) => {
//         try {
//             const data = await instance.post(
//                 `http://${servertUrl}/comments/`,
//                 payload,
//                 {
//                         headers: {
//                             Access_Token:localStorage.getItem("id")
//                         },
//                 }
//             );
//             return thunkAPI.fulfillWithValue(data.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

// //코멘트 DELETE요청
// export const _deleteContent = createAsyncThunk(
//     "deleteContent",
//     async (payload, thunkAPI) => {
//         try {
//             const data = await instance.delete(
//                 `http://${servertUrl}/${payload.postId}/comment/${payload.contentId}`,
//                 {
//                         headers: {
//                             Access_Token:localStorage.getItem("id")
//                         },
//                 }
//             );

//             return thunkAPI.fulfillWithValue(data.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

// //코멘트 PUT요청
// export const _putcontent = createAsyncThunk(
//     "putcontent",
//     async (payload, thunkAPI) => {
//         try {
//             const data = await instance.put(
//                 `http://${servertUrl}/${payload.postId}/comment/${payload.contentId}`,
//                 payload.editContent,
//                 {
//                         headers: {
//                             Access_Token:localStorage.getItem("id")
//                         },
//                 }
//             );
//             return thunkAPI.fulfillWithValue(data.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

// const contentList = createSlice({
//     name: "contenttSlice",
//     initialState,
//     extraReducers: (builder) => {
//         builder
//             //댓글입력
//             .addCase(_postContent.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(_postContent.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.contentList = action.payload;
//             })
//             .addCase(_postContent.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             //댓글조회
//             .addCase(_getContentList.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(_getContentList.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.contentList = action.payload;
//             })
//             .addCase(_getContentList.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             //댓글삭제
//             .addCase(_deleteContent.fulfilled, (state, action) => {
//                 state.contentList = action.payload;
//             })
//             //코멘트 PUT요청 시 상태에 따른 처리
//             .addCase(_putcontent.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(_putcontent.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.contentList = action.payload;
//             })
//             .addCase(_putcontent.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export const { addCommnet } = contentList.actions;
// export default contentList.reducer;

