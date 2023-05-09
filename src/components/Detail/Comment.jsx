// import React, { useState } from 'react'
// import { addComent, deleteComent, chageComment } from '../../redux/modules/comments'
// import { useDispatch, useSelector } from 'react-redux';
// // import { StyledComponent } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import flex from '../../styles/flex'


// // 댓글 작성, 등록하기 버튼, 닉네임, 댓글, 댓글 수정, 댓글 삭제, 댓글 좋아요 버튼, 댓글 좋아요 수



// function Comment() {
//     const [comment, setComment] = useState("");

//     const commentChangeHandler = (e) => {
//         setComment(e.target.value);
//     }

//     const commentDeleteHandler = (id) => {
//         dispatch(deleteComent(id));
//     }

//     const dispatch = useDispatch();

//     const commentAddHandler = () => {
//         const newComment = {
//             // id: id,
//             // comment,
//             // nickname
//         }
//         dispatch(addComent(newComment));
//     }

//     return (
//         <div>
//             {/* 댓글 입력 */}
//             <label className='form-label'>댓글 입력창</label>
//             <div className='listAdd'>
//                 <div className='input-group'>
//                     <input />
//                 </div>
//                 <button className='add-button' onClick={commentAddHandler}>등록하기</button>
//             </div>

//             {/* 댓글 */}
//             <div className='list'>
//                 <div className='Nickname'>닉네임</div>
//                 <div className='BestComment'>댓글</div>

//                 <div className='Heart'>
//                     <button>♥︎</button>
//                     <div className='HeartAmount'>12</div>
//                 </div>

//                 <button onClick={commentChangeHandler}>댓글 수정</button>
//                 <button onClick={commentDeleteHandler}>댓글 삭제</button>

//             </div>

//         </div>



//     )
// }

// export default Comment