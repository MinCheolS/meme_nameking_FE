import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import flex from '../styles/flex'
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swiper from '../components/Swiper/Swiper';

function MainPage() {
  const navigate = useNavigate()
  return (
    <Layout>
      <StContainer bdColor='#f2f2f2' direction='column'>
      <Stempty bdColor='#f2f2f2'></Stempty>
      
      <StbodyContainer bdColor='#f2f2f2'>
        <StbodyHeader bdColor='#f2f2f2'>
          <StbodyHeaderempty bdColor='##f2f2f2'></StbodyHeaderempty>
          
          <Stbodybody bdColor='#f2f2f2'>
            <StPopularPagetitle bdColor='#f2f2f2'>
              인기 게시물
            </StPopularPagetitle>
            <Stbodybodyempty bdColor='#f2f2f2'></Stbodybodyempty>
            <Stbodybodyempty1 bdColor='#f2f2f2'></Stbodybodyempty1>
            <StFullPagemove bdColor='#cccccc' onClick={() => navigate("/fullpage")}>
              전체 게시글 &nbsp;
              <MdArrowForwardIos />
            </StFullPagemove>
          </Stbodybody>
          <StbodyHeaderempty bdColor='##cccccc'></StbodyHeaderempty>

          <StPopularPagenameContainer bdColor='#f2f2f2'>
            {/* <StPopularPagename bdColor='#f2f2f2'>제목</StPopularPagename>
            <StPopularPagename1 bdColor='#f2f2f2'>제목</StPopularPagename1>
            <StPopularPagename2 bdColor='#f2f2f2'>제목</StPopularPagename2> */}
          </StPopularPagenameContainer>
        </StbodyHeader>

          

        <StPopularPageimageContainer bdColor='#f2f2f2'>
         <Swiper/>

          {/* <StPopularPageimage bdColor='#f2f2f2'></StPopularPageimage>
          <StPopularPageimage1 bdColor='#f2f2f2'>이미지</StPopularPageimage1>
          <StPopularPageimage2 bdColor='#f2f2f2'>이미지</StPopularPageimage2> */}
        </StPopularPageimageContainer>
      </StbodyContainer>
      </StContainer>
    </Layout>
  )
}

export default MainPage;

const StContainer = styled.div`
  width : 100%;
  height : 100%;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  ${({ align, jusify, direction, content }) =>
    flex({
      align,
      jusify,
      direction,
      content,
    })}
`
const Stempty = styled.div`
  width : 100%;
  height : 15%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  flex-direction : column;
`
const StbodyContainer = styled.div`
  width : 100%;
  height : 77%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  flex-direction: column
`
const StbodyHeader = styled.div`
  width : 100%;
  height : 30%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  flex-direction: column;
`
const StbodyHeaderempty = styled.div`
  width : 100%;
  height : 0%;
  /* border : 3px solid ${(props) => props.bdColor}; */
  display: flex;
`
const Stbodybody = styled.div`
  width : 100%;
  height : 50%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
`
const StPopularPagetitle = styled.div`
  width : 25%;
  height : 100%;
  font-size : 30px;
  font-weight : 700;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
`
const Stbodybodyempty = styled.div`
  width : 25%;
  height : 100%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
`
const Stbodybodyempty1 = styled.div`
  width : 25%;
  height : 100%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
`
const StFullPagemove = styled.div`
  width : 15%;
  height : 75%;
  font-size : 30px;
  font-weight : 700;
  border-radius : 50px;
  padding : 0px 0px 0px 3px;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 8px 15px, rgba(0, 0, 0, 0.23) 0px 5px 5px;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
`
const StPopularPagenameContainer = styled.div`
  width : 100%;
  height : 0%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
/* const StPopularPagename = styled.div`
  width : 20%;
  height : 100%;
  font-size : 30px;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
`
const StPopularPagename1 = styled.div`
  width : 20%;
  height : 100%;
  font-size : 30px;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
`
const StPopularPagename2 = styled.div`
  width : 20%;
  height : 100%;
  font-size : 30px;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
` */
const StPopularPageimageContainer = styled.div`
  width : 100%;
  height : 70%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
/* const StPopularPageimage = styled.div`
  width : 20%;
  height : 90%;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 5px 5px;
`
const StPopularPageimage1 = styled.div`
  width : 20%;
  height : 90%;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 5px 5px;
`
const StPopularPageimage2 = styled.div`
  width : 20%;
  height : 90%;
  border : 3px solid ${(props) => props.bdColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow : rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 5px 5px;
` */