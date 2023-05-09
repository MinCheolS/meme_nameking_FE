import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage"
import FullPage from "../pages/FullPage"
import DetailPage from "../pages/DetailPage"
import PostPage from "../pages/PostPage"
import SignupPage from "../pages/SignupPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/detail" element={<DetailPage />}/>
                <Route path="/fullpage" element={<FullPage />}/>
                <Route path="/post" element={<PostPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;