import { instance } from "./LoginAxios";


export const postLogin = async (post) => {
  try {
    const data = await instance.post("/login", post);
    return data;
  } catch (error) {
    window.alert("error", error.response.data.msg);
  }
};

export const postSignup = async (post) => {
  try {
    const data = await instance.post("/signup", post);
    window.alert("success", "회원가입 성공");
    return data;
  } catch (error) {
    window.alert("error", error.response.data.msg);
  }
};
