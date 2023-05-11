import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { set } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/modules/detailSlice';
import { deleteComment } from '../../redux/modules/detailPostSlice';
import { editComment } from '../../redux/modules/commentsSlice';



function Detail() {
  const [content, setContent] = useState([])
  const [contents, setContents] = useState([]);
  const [postData, setPostData] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const { id, postId } = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch()
  
  const [postsup, setPostsup] = useState(null);
  const [postsdown, setPostsdown] = useState(null);

  const onAddHandler = () => {
    dispatch(addComment(id, content))
    setContents([...contents, contents])
    setContent('')
  }

  const onDeleteHandler = () => {
    dispatch(deleteComment(id));
    alert("게시물이 삭제되었습니다.")
    navigation("/fullpage");
  };

  const onUpdate = (url) => {
    dispatch(
      editComment({
        img : url
      })
    );
    setIsOpen(!isOpen);
  };
  
 // 상단 
  const [isId, setIsId] = useState('')
  const [bestComment, setBestComment] = useState('')
  const [postDdabong,setPostDdabong] = useState('')
  const [img,setImg] = useState('')
  
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(
                `http://52.79.197.197:8080/posts/${id}`
            );  
            if (response.status === 200) {
                // postsup(response.data.data);
                setIsId(response.data.data.postData.id);
                setBestComment(response.data.data.bestComment);
                setPostDdabong(response.data.data.postDdabong);
                setImg(response.data.data.postData.imageUrl);
            } 
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, []);



//하단
//   useEffect(() => {
//     async function fetchData() {
//         try {
//             const response = await axios.get(
//                 `http://52.79.197.197:8080/posts/${id}/comments`
//             );
//             if (response.status === 200) {
//               // postsdown(response.data.data);
//               // for(let i = 3; i < response.data.data.comments.length; i++) {
//                 setNickname(response.data.data.comments) 
//                 // [0].nickname);
//                 setIsContent(response.data.data.comments)
//                 // [0].content);
//                 setDdabong(response.data.data.comments) 
//                   // [0].ddabong);
//               // }
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     fetchData();
// }, []);

const [nickname, setNickname] = useState('')
const [isContent, setIsContent] = useState('')
const [ddabong, setDdabong] = useState('')

useEffect(() => {
  async function fetchData() {
      try {
          const response = await axios.get(
              `http://52.79.197.197:8080/posts/${id}/comments`
          );
          if (response.status === 200) {
              const newComments = response.data.data.comments;
              const newNicknames = newComments.map((comment) => comment.nickname);
              const newContents = newComments.map((comment) => comment.content);
              const newDdabongs = newComments.map((comment) => comment.ddabong);
              
              // setComments(newComments);
              setNickname(newNicknames);
              setIsContent(newContents);
              setDdabong(newDdabongs);
          }
      } catch (error) {
          console.error(error);
      }
  }
  fetchData();
}, []);


  
console.log(isId)
console.log(bestComment)
console.log(postDdabong)
console.log(nickname)
console.log(isContent)
console.log(ddabong)


  return (

    <StContainer>
      <Container1>
        {/* 상단 : 이미지, 게시글 수정, 게시글 삭제, 제목, 게시글 좋아요 수 */}
        <DetailArea align="center">
          {/* 짤 이미지 ------------------------------------------------------ */}
          <Image>
            <img src={img}></img>
            {/* 이미지 */}
          </Image>
        </DetailArea>
        <PostDetail>
          <Buttons>
            <Button
                onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
            >
              {isOpen ? "수정하기" : "수정취소"}
            </Button>
            {!isOpen && <button onClick={onUpdate}>수정 완료</button>}
            

            <Button onClick={onDeleteHandler}>게시물 삭제</Button>

          </Buttons>
          {/* 제목(좋아요 1위 댓글 노출), 게시글 좋아요 수 -------------------------*/}
          <TitleAndHeart>
            <Heart>
              {/* <span onClick={onClickLike}>
                {detailPost?.likeCheck ? (
                  <FaThumbsUp />
                ) : (
                  <FaRegThumbsUp />
                )}
              </span> */}
              <HeartAmount>12</HeartAmount>
            </Heart>
            <Title>
              {bestComment}
            </Title>
          </TitleAndHeart>
          <Empty></Empty>
        </PostDetail>
      </Container1>

      <Container2>
        <BestComments>
             <Best2>
              <Nickname>🥇 &nbsp;{nickname[0]}</Nickname>
              <BestComment>{isContent[0]}</BestComment>
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[0]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
                <BestBtn>댓글 수정</BestBtn>
                <BestBtn
                onClick={onDeleteHandler}
                >댓글 삭제</BestBtn>
            </BestCommentBtn>
            </Best2>
        </BestComments>
        <BestComments>
             <Best2>
              <Nickname>🥈 &nbsp;{nickname[1]}</Nickname>
              <BestComment>{isContent[1]}</BestComment>
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[1]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
                <BestBtn>댓글 수정</BestBtn>
                <BestBtn
                onClick={onDeleteHandler}
                >댓글 삭제</BestBtn>
            </BestCommentBtn>
            </Best2>
        </BestComments>
        <BestComments>
          <Best2>
              <Nickname>🥈 &nbsp;{nickname[2]}</Nickname>
              <BestComment>{isContent[2]}</BestComment>
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[2]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
                <BestBtn>댓글 수정</BestBtn>
                <BestBtn
                onClick={onDeleteHandler}
                >댓글 삭제</BestBtn>
            </BestCommentBtn>
            </Best2>
        </BestComments>
      </Container2>
     
      <Container3 >
        <div><hr/></div>
        {/* 하단 : 베스트 댓글 1-3 -> 메달 이미지?, 닉네임, 댓글 수정, 댓글 삭제, 댓글 좋아요 수 */}
        <CommentInput>
          <FormLabel>댓글 입력창</FormLabel>
          <InputGroup>
            <Input
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
            />
            <AddButton onClick={onAddHandler}>등록하기</AddButton>
          </InputGroup>
        </CommentInput>   

        
              <Best3>
              <Nickname> &nbsp;{nickname[3]}</Nickname>
              <BestComment>{isContent[3]}</BestComment>
              &nbsp;
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[3]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
              <BestBtn>댓글 수정</BestBtn>
              <BestBtn
              onClick={onDeleteHandler}
              >댓글 삭제</BestBtn>

              </BestCommentBtn>
              </Best3>
              
              <Best3>
                <Nickname> &nbsp;{nickname[4]}</Nickname>
              <BestComment>{isContent[4]}</BestComment>
              &nbsp;
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[4]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
              <BestBtn>댓글 수정</BestBtn>
              <BestBtn
              onClick={onDeleteHandler}
              >댓글 삭제</BestBtn>
              </BestCommentBtn>
              </Best3>
              <Best3>
                <Nickname> &nbsp;{nickname[5]}</Nickname>
              <BestComment>{isContent[5]}</BestComment>
              &nbsp;
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[5]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
              <BestBtn>댓글 수정</BestBtn>
              <BestBtn
              onClick={onDeleteHandler}
              >댓글 삭제</BestBtn>
              </BestCommentBtn>
              </Best3>
              <Best3>
                <Nickname> &nbsp;{nickname[6]}</Nickname>
              <BestComment>{isContent[6]}</BestComment>
              &nbsp;
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[6]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
              <BestBtn>댓글 수정</BestBtn>
              <BestBtn
              onClick={onDeleteHandler}
              >댓글 삭제</BestBtn>
              </BestCommentBtn>
              </Best3>
              <Best3>
                <Nickname> &nbsp;{nickname[7]}</Nickname>
              <BestComment>{isContent[7]}</BestComment>
              &nbsp;
              <Heart2>
                <button>♥︎</button>
                <HeartAmount>{ddabong[7]}</HeartAmount>
              </Heart2>
              <BestCommentBtn>
              <BestBtn>댓글 수정</BestBtn>
              <BestBtn
              onClick={onDeleteHandler}
              >댓글 삭제</BestBtn>
              </BestCommentBtn>
              </Best3>
        
        
      </Container3>
    </StContainer>

  )
}

export default Detail

const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color:#f2f2f2
  /* border : 1px solid #ff0101; */
/* align-items: flex-start */
`
const StContainer = styled.div`
    width : 90%;
    height : auto;
    display: flex;
    // border : 1px solid #ff0101;
    flex-direction: column;
    /* display: block; */
    justify-content: space-around;
    margin-top: 60px;
    margin: auto;
`

const Container1 = styled.div`
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #ff0101; */
/* background-color: #eec7c7; */

`
const DetailArea = styled.div`
  /* border: 0px solid #dbdbdb; */
  width: 40%;
  height: 400px;
  display:flex ;
  /* background-color: #7bdb20; */
  /* border : 1px solid #260f9b; */
  margin: 30px;
  justify-content: center;
  position: relative;
  object-fit: cover;
  img{
    object-fit: fill;
width : 100%;
height: 100%;

/* display : block; */
}
`;

const Image = styled.div`
border: 0px solid gray;
width: 100%;
height: auto;

/* background-image: url("https://t1.daumcdn.net/cfile/tistory/2177523D53BB4BEC15"); */
/* background-size: cover; */
/* border : 1px solid #ff0101; */
img{
  object-fit: fill;
width : 100%;
height: 100%;
/* display : block; */
}
`;

const PostDetail = styled.div`
  display: flex;
  /* border: 1px solid #e9e9e9; */
  width: 50%;
  height: auto;
  flex-direction: column;
  margin-left: 5%;

`;

const Buttons = styled.div`
display: flex;
/* border: 1px solid #32c824; */
width: 80%;
height: auto;
margin-top: 20px;
margin-left: 10px;
/* justify-content: flex-end; */
margin-block-end: 20px;
/* margin: 30px; */
`
const TitleAndHeart = styled.div`
display: flex;
// border: 1px solid #c216c2;
/* width: 90%;
height: 30%; */
flex-direction: column;
/* margin: 5%; */
margin-left: 20px;
margin-top: 50px;
width: 80%;
background-color:#e5e4f2;
/* border: 1px solid #32c824; */
margin-left: 10px;
border-radius: 6px;
`;

const Title = styled.div`
display: flex;
/* border: 1px solid #3d45af; */
width: 70%;
height: auto;
font-size: 20px;
font-weight: bolder;
margin-top :5px;
margin: 10px;
`;

const Heart = styled.div`
display: flex;
/* border: 1px solid #eb6a24;
width: 100%; */
height: auto;
/* justify-content: flex-end */
margin: 10px;
`;

const Empty = styled.div`
display: flex;
/* border: 1px solid #a7d421; */
width: 100%;
height: 50%;    
`


const Container2 = styled.div`
width : 100%;
height : auto;
display: flex;
// background-color: #bef8c9;
// border : 1px solid #011aff;
flex-direction: column


`
const BestComments = styled.div`
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #87bc31; */
justify-content: space-between;
background-color: #e5e4f2;
border-radius: 6px;
box-shadow: 2px 2px 2px 2px #d4d4d4;
align-items: center;
margin-top:10px;
`

const Nickname = styled.div`
width : 20%;
height : auto;
display: flex;
/* border : 1px solid #c97419; */
align-items: center;
padding-left: 10px;
font-weight: bold;
`

const BestComment = styled.div`
width : 45%;
height : auto;
display: flex;
/* border : 1px solid #8c236c; */
/* align-items: center */
`

const BestCommentBtn = styled.div`
width : 30%;
height : auto;
display: flex;
/* border : 1px solid #008540;   */
justify-content: space-evenly;
/* align-items: center; */
flex-direction: row



`

const Heart2 = styled.div`
display: flex;
/* border: 1px solid #eb6a24; */
width: 10%;
height: auto;
align-items: center

`;





const Best2 = styled.div`
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #1d0085; */
justify-content: space-between;
background-color: #e5e4f2;
border-radius: 6px;
box-shadow: 2px 2px 2px 2px #d4d4d4;
align-items: center;
margin-top: 10px
`
const Best3 = styled.div`
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #1d0085; */
justify-content: space-between;
background-color: #e5e4f2;
border-radius: 6px;
box-shadow: 2px 2px 2px 2px #d4d4d4;
align-items: center;
margin-top: 10px
`

const Container3 = styled.div`
margin-top: 30px;
width : 100%;
height : auto;
display: flex;
// border : 1px solid #008540;
flex-direction: column
// margin-top:20px;
`

const CommentInput = styled.div`
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #180085; */
flex-direction: column;
align-items: center;
justify-content: space-evenly;
// margin-top: 20px;
// margin:auto;
`

const Button = styled.button`
margin-top :20px;
margin-right:20px;
font-size: 20px;
  background-color: #f2f2f2;
  color: #181818;
  text-align: center;
  padding: 5px 0;
  width: 30%;
  border-radius: 6px;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
  border: #f2f2f2;
  &:hover{  
    background-color : #000000;
    color : #ffffff
  }
`

const CommonComments = styled.div`
width : 100%;
height : auto;
display: flex;
background-color: #ededed;
border-radius: 6px;
box-shadow: 2px 2px 2px 2px #d4d4d4;
align-items: center;
margin-top:10px;
/* border : 1px solid #06a306; */
`

const InputGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 20px;
margin-bottom: 10px;
`

const Input = styled.input`
height: 35px;
  width: 300px;
  border: none;
  border-radius: 10px;
  padding: 0 12px;
  border : 1px solid #d6d8ee;
`

const BestBtn = styled.div`
/* margin-top :10px; */
margin-right:10px;
  background-color: #d6d8ee;
  color: #454e9f;
  text-align: center;
  padding: 5px 0;
  width: 40%;
  height: 50%;
  border-radius: 6px;
  border: #f2f2f2;
  &:hover{  
    background-color : #000000;
    color : #ffffff
  }
  align-items: center
`


const HeartAmount = styled.div`
  margin-left: 5px;
    `

const FormLabel = styled.div`
`

const AddButton = styled.button`
margin-left :10px;
margin-right:15px;
  background-color: #b8b6dc;
  color: #181818;
  text-align: center;
  padding: 5px 0;
  width: 25%;
  border-radius: 6px;
  border: #f2f2f2;
  &:hover{  
    background-color : #000000;
    color : #ffffff
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const CommonComment = styled.div`
width : 100%;
height : 100%;
display: flex;
/* border : 1px solid #06a306; */
justify-content: space-around
`
const Comment = styled.div`
width : 45%;
height : 100%;
display: flex;
/* border : 1px solid #8c236c; */
align-items: center
`


