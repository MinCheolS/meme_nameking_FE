import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

function Detail() {
  const [comments, setComments] = useState(null);
  const [inputVaule, setInputVaule] = useState({
    'comment': '',
  });

  const [targetId, setTargetId] = useState('')
  const [contents, setContents] = useState('')

  //조회함수
  const fetchComments = async () => {
    const { data } = await axios.get(`http://localhost:4000/comments`)
    setComments(data);
    console.log("data", data)
  }

  //추가함수
  const onSubmitHandler = async () => {
    axios.post(`http://localhost:4000/comments`, inputVaule)
    setComments([...comments, inputVaule]);
    setInputVaule({
      comment: ''
    })
  }

  //삭제함수
  const onDeleteButtonClickHandler = async (id) => {
    axios.delete(`http://localhost:4000/comments/${id}`)
    setComments(comments.filter((item) => {
      return item.id !== id
    })
    )
  }

  //수정함수
  // const onUpdateButtonClickHandler = async () => {
  //   axios.patch(`http://localhost/comments/${targetId}`, {
  //     comment: contents
  //   })

  //   setComments(comments.map(item => {
  //     if (item.id == targetId) {
  //       return { ...item, comment: contents }
  //     } else {
  //       return item
  //     }
  //   }))
  // }

  useEffect(() => {
    //db로부터 값을 가져올 것이다
    fetchComments();
  }, [])

  console.log(comments);
  return (

    <StContainer>
      <Container1>
        {/* 상단 : 이미지, 게시글 수정, 게시글 삭제, 제목, 게시글 좋아요 수 */}
        <DetailArea align="center">
          {/* 짤 이미지 ------------------------------------------------------ */}
          <Image>
            <img src="https://t1.daumcdn.net/cfile/tistory/2177523D53BB4BEC15"></img>
            이미지
          </Image>
        </DetailArea>
        <PostDetail>
          <Buttons>
            <Button>게시물 수정</Button>
            <Button>게시물 삭제</Button>
          </Buttons>
          {/* 제목(좋아요 1위 댓글 노출), 게시글 좋아요 수 -------------------------*/}
          <TitleAndHeart>
            <Heart>
              <button>♥︎</button>
              <HeartAmount>12</HeartAmount>
            </Heart>
            <Title>
              제목
            </Title>
          </TitleAndHeart>
          <Empty></Empty>
        </PostDetail>
      </Container1>

      <Container2>
        {/* 하단 : 베스트 댓글 1-3 -> 메달 이미지?, 닉네임, 댓글 수정, 댓글 삭제, 댓글 좋아요 수 */}
        <CommentInput>
          <FormLabel>댓글 입력창</FormLabel>
          <InputGroup>
            <Input
              type='text'
              value={contents.comment}
              onChange={(e) => {
                setInputVaule({
                  comment: e.target.value,
                });
              }}
            />
            <AddButton onClick={onSubmitHandler}>등록하기</AddButton>
          </InputGroup>
        </CommentInput>
      </Container2>

      <Container3 >
        <BestComments>
          {/* <Nickname>🥇 &nbsp;{contents.id}</Nickname>
          <BestComment>{contents.comment}</BestComment> */}
          {/* <Heart2>
            <button>♥︎</button>
            <HeartAmount>12</HeartAmount>
          </Heart2> */}
          <BestCommentBtn>
            {/* <BestBtn>댓글 수정</BestBtn> */}
            {comments?.map((item) => {
              return (
                <List key={item.id}>
                  {/* {item.id} : {item.comment} */}
                  <Nickname>🥇 &nbsp;{item.id}</Nickname>
                  <BestComment>{item.comment}</BestComment>
                  &nbsp;
                  <Heart2>
                    <button>♥︎</button>
                    <HeartAmount>12</HeartAmount>
                  </Heart2>
                  <BestBtn>댓글 수정</BestBtn>
                  <BestBtn onClick={() => onDeleteButtonClickHandler(item.id)}>댓글 삭제</BestBtn>
                </List>
              );
            })}
          </BestCommentBtn>
        </BestComments>
        {/* <Best2>
          <Nickname>🥈 &nbsp; 닉네임</Nickname>
          <BestComment>베스트 댓글</BestComment>
          <Heart2>
            <button>♥︎</button>
            <HeartAmount>12</HeartAmount>
          </Heart2>
          <BestCommentBtn>
            <BestBtn>댓글 수정</BestBtn>
            {comments?.map((item) => {
              return (
                <div key={item.id}>
                  {item.id} : {item.title}
                  &nbsp;
                  <BestBtn onClick={() => onDeleteButtonClickHandler(item.id)}>댓글 삭제</BestBtn>
                </div>
              );
            })}
          </BestCommentBtn>
        </Best2>
        <Best3>
          <Nickname>🥉 &nbsp; 닉네임</Nickname>
          <BestComment>베스트 댓글</BestComment>
          <Heart2>
            <button>♥︎</button>
            <HeartAmount>12</HeartAmount>
          </Heart2>
          <BestCommentBtn>
            <BestBtn>댓글 수정</BestBtn>
            {comments?.map((item) => {
              return (
                <div key={item.id}>
                  {item.id} : {item.title}
                  &nbsp;
                  <BestBtn onClick={() => onDeleteButtonClickHandler(item.id)}>댓글 삭제</BestBtn>
                </div>
              );
            })}
          </BestCommentBtn>
        </Best3>
        <hr width='100%'></hr>
        <CommonComments>
          <CommonComment>
            <Nickname>닉네임</Nickname>
            <Comment>댓글</Comment>
            <Heart2>
              <button>♥︎</button>
              <HeartAmount>12</HeartAmount>
            </Heart2>
            <BestCommentBtn>
              {comments?.map((item) => {
              return (
                <div key={item.id}>
                  {item.id} : {item.title}
                  <BestBtn>댓글 수정</BestBtn>
                  <BestBtn onClick={() => onDeleteButtonClickHandler(item.id)}>댓글 삭제</BestBtn>
                </div>
              );
            })} 

            </BestCommentBtn>
          </CommonComment>
        </CommonComments> */}

      </Container3>
    </StContainer>

  )
}

export default Detail

const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border : 1px solid #ff0101;
/* align-items: flex-start */
`
const StContainer = styled.div`
    width : 100%;
    height : auto;
    display: flex;
    /* border : 1px solid #ff0101; */
    flex-direction: column;
    /* display: block; */
    justify-content: space-around;
    margin-top: 40px;
`

const Container1 = styled.div`
width : 100%;
height : auto;
display: flex;
border : 1px solid #ff0101;
background-color: #eec7c7;

`
const DetailArea = styled.div`
  /* border: 0px solid #dbdbdb; */
  width: 50%;
  height: 500px;
  display:flex ;
  background-color: #ffffff;
  margin: 10px;
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
border : 1px solid #ff0101;
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

`;

const Buttons = styled.div`
display: flex;
border: 1px solid #32c824;
width: 100%;
height: auto;
justify-content: flex-end;
margin-block-end: 10px;

`
const TitleAndHeart = styled.div`
display: flex;
/* border: 1px solid #c216c2; */
/* width: 90%;
height: 30%; */
flex-direction: column;
margin: 5%;


`;

const Title = styled.div`
display: flex;
/* border: 1px solid #3d45af; */
width: 100%;
height: auto;
font-size: 20px;
font-weight: bolder;
margin-top :5px;
`;

const Heart = styled.div`
display: flex;
/* border: 1px solid #eb6a24;
width: 100%; */
height: auto;
justify-content: flex-end
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
background-color: #bef8c9;
border : 1px solid #011aff;
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
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #008540;   */
justify-content: space-evenly;
/* align-items: center; */
flex-direction: column

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
/* border : 1px solid #dbbc35; */
justify-content: space-between;
background-color: #706da1;
border-radius: 6px;
box-shadow: 2px 2px 2px 2px #d4d4d4;
align-items: center;
margin-top: 10px;
margin-bottom: 15px;
`

const Container3 = styled.div`
margin-top: 10px;
width : 100%;
height : auto;
display: flex;
border : 1px solid #008540;
flex-direction: column
`

const CommentInput = styled.div`
width : 100%;
height : auto;
display: flex;
/* border : 1px solid #180085; */
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin-top: 10px;
`

const Button = styled.button`
margin-top :10px;
margin-right:10px;
  background-color: #ffffff;
  color: #181818;
  text-align: center;
  padding: 5px 0;
  width: 30%;
  border-radius: 6px;
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
`

const BestBtn = styled.div`
/* margin-top :10px; */
margin-right:10px;
  background-color: #d6d8ee;
  color: #454e9f;
  text-align: center;
  padding: 5px 0;
  width: 15%;
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

const FormLabel = styled.div``

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


