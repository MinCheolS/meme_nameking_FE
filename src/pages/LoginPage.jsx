import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import flex from '../styles/flex'
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useInput } from '../utils/useInput';
import { postLogin } from '../api/login/Login';


function LoginPage() {
  const [username, setUsername] = useInput()
  const [password, setPassword] = useInput()
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postLogin({
      username,
      password,
    })
      .then((res) => {
        window.alert("success", "로그인 성공");
        localStorage.setItem("id", res.headers.authorization);
        navigate("/");
      })
      .catch((error) => window.alert("error", error.response.data.msg));
  }

  return (
    <Layout>
      <StContainer>
        <Stempty bdColor='#f2f2f2'></Stempty>
        
        <StbodyContainer bdColor='#f2f2f2' direction='column'>
          <Stbodyempty bdColor='#f2f2f2'></Stbodyempty>
          <Stbodybody bdColor='#cccccc' direction='column'>
            <StloginHeader bdColor='#f2f2f2'>
              <StloginHeaderName bdColor='#f2f2f2'>로그인</StloginHeaderName>
            </StloginHeader>
            
            <StloginBody bdColor='#f2f2f2' direction='column'>
              <StloginIdContainer bdColor='#cccccc' align='center'>
                <AiOutlineUser fontSize={30} color='#cccccc'/>
                <StloginInput bdColor='#f2f2f2' placeholder="아이디"
                type='text'
                name='username'
                value={username}
                onChange={setUsername}
                autoComplete="off"
                ></StloginInput>
              </StloginIdContainer>
              
              <StloginPwContainer bdColor='#cccccc' align='center'>
                <RiLockPasswordLine fontSize={30} color='#cccccc'/>
                <StloginInput bdColor='#f2f2f2' placeholder="비밀번호"
                type='password'
                name='password'
                value={password}
                onChange={setPassword}
                autoComplete="off"
                ></StloginInput>
              </StloginPwContainer>
            </StloginBody>
            
            <StloginBtnContainer bdColor='#f2f2f2'>
              <StloginButton onClick={onSubmitHandler}>로그인</StloginButton>
            </StloginBtnContainer>
          </Stbodybody>
          <Stbodyempty1 bdColor='#f2f2f2'></Stbodyempty1>
        </StbodyContainer>
        <Stempty1 bdColor='#f2f2f2'></Stempty1>
      </StContainer>
    </Layout>
  )
}

export default LoginPage

const StContainer = styled.div`
  width : 100%;
  height : 100%;
  /* border : 2px solid ${(props) => props.bdColor}; */
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
  height : 100%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
`
const StbodyContainer = styled.div`
  width : 80%;
  height : 100%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
  ${({ align, jusify, direction, content }) =>
    flex({
      align,
      jusify,
      direction,
      content,
    })}
`
const Stbodyempty = styled.div`
  width : 100%;
  height : 20%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
`
const Stbodyempty1 = styled.div`
  width : 100%;
  height : 30%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
`
const Stbodybody = styled.div`
  width : 100%;
  height : 50%;
  border : 2px solid ${(props) => props.bdColor};
  box-shadow : rgba(0, 0, 0, 0.19) 0px 8px 15px, rgba(0, 0, 0, 0.23) 0px 5px 5px;
  display: flex;
  ${({ align, jusify, direction, content }) =>
    flex({
      align,
      jusify,
      direction,
      content,
    })}
`
const StloginHeader = styled.div`
  width : 100%;
  height : 25%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
  align-items: center;
  justify-content: center;
`
const StloginHeaderName = styled.div`
  width : 85%;
  height : 80%;
  font-size : 30px;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
`
const StloginBody = styled.div`
  width : 100%;
  height : 50%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  justify-content: space-around;
  display: flex;
  ${({ align, jusify, direction, content }) =>
    flex({
      align,
      jusify,
      direction,
      content,
    })}
`
const StloginIdContainer = styled.div`
  width : 85%;
  height : 40%;
  border-radius : 8px;
  border : 2px solid ${(props) => props.bdColor};
  display: flex
  ${({ align, jusify, direction, content }) =>
    flex({
      align,
      jusify,
      direction,
      content,
    })}
`
const StloginInput = styled.input`
  width : 85%;
  height : 50%;
  font-size : 20px;
  margin-left : 15px;
  outline : none;
  background : #f2f2f2;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  cursor: pointer;
`
const StloginPwContainer = styled.div`
  width : 85%;
  height : 40%;
  border-radius : 8px;
  border : 2px solid ${(props) => props.bdColor};
  display: flex
  ${({ align, jusify, direction, content }) =>
    flex({
      align,
      jusify,
      direction,
      content,
    })}
`
const StloginBtnContainer = styled.div`
  width : 100%;
  height : 25%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
  align-items: center;
  justify-content: center;
`
const StloginButton = styled.button`
  width : 85%;
  height : 60%;
  font-size : 20px;
  font-weight : 800;
  color : #ffffff;
  background : #000000;
  cursor: pointer;
`
const Stempty1 = styled.div`
  width : 100%;
  height : 100%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
`