import { configureStore } from "@reduxjs/toolkit";
import { isDev } from "../modules";
import comments from "../modules/comments";

const store = configureStore({
    reducer : {
        comments
    },
    devTools : isDev,
})

export default store