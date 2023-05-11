import { configureStore } from "@reduxjs/toolkit";
import { isDev } from "../modules";
import comments from "../modules/comments";
import postList from "../modules/fullSlice"

const store = configureStore({
    reducer : {
        comments,
        postList
    },
    devTools : isDev,
})

export default store