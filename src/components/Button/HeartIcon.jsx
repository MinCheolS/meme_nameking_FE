// 자식 컴포넌트

// import React, { useState, useEffect } from "react";

// import styled from "styled-components";
// import HeartImg from "../assets/heart.png";
// import EmptyHeartImg from "../assets/empty-heart.png";

// const Heart = styled.img`
//     // css
//     }
// `;

// const HeartButton = ({ like, onClick }) => {
//     return (
//         <Heart src={like?HeartImg:EmptyHeartImg} onClick={onClick} />
//     );
// };

// export default HeartButton;

// 부모 컴포넌트 -  하트 아이콘이 들어가는 페이지

// const Post = (props) => {

//     const [like, setLike] = useState(false)

//     ...
    
//     useEffect(async () => {
//       const fetchData = async () => {
//         const res = await axios.get(...)
//         if (res.data.type === 'liked') setLike(true)
//       }
//       fetchData()
//     }, []);
    
//     const toggleLike = async (e) => {
//       const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름 -> DB 갱신
//       setLike(!like)
//     }

//     return (
//     <>
//       <HeartButton like={like} onClick={toggleLike}/>
//       ...
//       <Detail content={content} />
//     </>
//     );
// };

// export default Post;