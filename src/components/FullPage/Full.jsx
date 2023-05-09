import React from 'react'
import styled from 'styled-components'
import flex from '../../styles/flex'
import Layout from '../Layout/Layout'
import { useNavigate } from "react-router-dom";


function Full() {
  const movePage = useNavigate();

  function goPost(){
    movePage('/Post');
  }

    return (
        <Layout>
            <StContainer>
                <Container1>
                    <King>
                        👑 &nbsp; 금주의 짤명왕 : 김근보
                    </King>
                    <PostButton onClick={goPost}>
                        {/* onClick={navigateToPost} */}
                            짤 작성하러 가기
                    </PostButton>
                </Container1>
                <hr width='100%'></hr>
                <Container2>
                    <Post1>
                        <FullComment>
                            베스트 댓글 노출
                        </FullComment>
                        <FullImage>
                            이미지
                        </FullImage>
                        <Heart>
                            <button>♥︎</button>
                            <HeartAmount>12</HeartAmount>
                        </Heart>
                    </Post1>
                    <Post2>
                        <FullComment>
                            베스트 댓글 노출
                        </FullComment>
                        <FullImage>
                            이미지
                        </FullImage>
                        <Heart>
                            <button>♥︎</button>
                            <HeartAmount>12</HeartAmount>
                        </Heart>
                    </Post2>
                    <Post3>
                        <FullComment>
                            베스트 댓글 노출
                        </FullComment>
                        <FullImage>
                            이미지
                        </FullImage>
                        <Heart>
                            <button>♥︎</button>
                            <HeartAmount>12</HeartAmount>
                        </Heart>
                    </Post3>
                </Container2>
            </StContainer>
        </Layout>
    )
}

export default Full

const StContainer = styled.div`
    width : 100%;
    height : auto;
    display: block;
    /* border : 1px solid #aaff01; */
    flex-direction: column;
    justify-content: center;
`

const Container1 = styled.div`
width : 100%;
height : auto%;
display: flex;
/* border : 1px solid #ff0101; */
flex-direction: column;
margin-top: 70px;
`

const King = styled.div`
width : 80%;
height : 50px;
display: flex;
/* border : 1px solid #01ff12; */
justify-content: center;
align-items: center;
margin: auto;
background-color: white;
border-radius: 6px;
font-size: large;
box-shadow: 1px 1px 5px 1px #e6e5f4;;
color: #3b3952;
font-weight: 600;
`

const PostButton = styled.button`
width : 20%;
height : 35px;
display: flex ;
/* border : 1px solid #ff01ea; */
justify-content: center;
align-items: center;
position: relative;
left: 70%;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;

background-color: #e5e4f2;
  color: #181818;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  border: #f2f2f2;
  &:hover{  
    background-color : #000000;
    color : #ffffff
  }
`

const Container2 = styled.div`
margin-top: 30px;
width : 100%
height : auto;
display: flex;
/* border : 1px solid #2301ff; */
flex-direction: row;
justify-content: space-evenly;
`

const FullComment = styled.div`
width : 100%;
height : 30px;
display: flex;
/* border : 1px solid #01ff95; */
justify-content: center;
align-items: center;
background-color: white;
border-radius: 6px;
margin-top: 10px;

`

const FullImage = styled.div`
width : 100%;
height : 300px;
display: flex;
/* border : 1px solid #ff01a6; */
justify-content: center;
align-items: center;
margin-top: 10px;
background-color: white;
border-radius: 6px;
`
const Heart = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-top:10px;
`

const HeartAmount = styled.div`

`

const Post1 = styled.div`
width : 30%;
height : auto;
display: flex;
/* border : 1px solid #28290e; */
flex-direction: column
`

const Post2 = styled.div`
width : 30%;
height : auto;
display: flex;
/* border : 1px solid #4d01ff; */
flex-direction: column
`

const Post3 = styled.div`
width : 30%;
height : auto;
display: flex;
/* border : 1px solid #bbff01; */
flex-direction: column
`
