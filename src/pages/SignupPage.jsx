import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import flex from '../styles/flex'
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEmojiSunglasses } from "react-icons/bs";
import { useInput } from '../utils/useInput';
import { useNavigate } from 'react-router-dom';
import { postSignup } from '../api/login/Login';

function SignupPage() {
  const [username, setUsername] = useInput()
  const [password, setPassword] = useInput()
  const [nickname, setNickname] = useInput()
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postSignup({
      nickname,
      username,
      password,
    }).then((res) => {
      console.log(res)
      localStorage.setItem("id", res.headers.authorization);
      navigate("/login");
    });
  }
 
  return (
    <Layout>
      <StContainer>
        <Stempty bdColor='#f2f2f2'></Stempty>
        
        <StbodyContainer bdColor='#f2f2f2' direction='column'>
          <Stbodyempty bdColor='#f2f2f2'></Stbodyempty>
          <Stbodybody bdColor='#cccccc' direction='column'>
            <StsignupHeader bdColor='#f2f2f2'>
              <StsignupHeaderName bdColor='#f2f2f2'>회원가입</StsignupHeaderName>
            </StsignupHeader>
            
            <StsignupBody bdColor='#f2f2f2' direction='column'>
              <StsignupNicknameContainer bdColor='#cccccc' align='center'>
                <BsEmojiSunglasses fontSize={30} color='#cccccc'/>
                <StsignupInput bdColor='#f2f2f2' placeholder="닉네임"
                type='text'
                name='nickname'
                value={nickname}
                onChange={setNickname}
                autoComplete="off"
                ></StsignupInput>
              </StsignupNicknameContainer>
              
              <StsignupIdContainer bdColor='#cccccc' align='center'>
                <AiOutlineUser fontSize={30} color='#cccccc'/>
                <StsignupInput bdColor='#f2f2f2' placeholder="아이디"
                type='text'
                name='username'
                value={username}
                onChange={setUsername}
                autoComplete="off"
                ></StsignupInput>
              </StsignupIdContainer>
              
              <StsignupPwContainer bdColor='#cccccc' align='center'>
                <RiLockPasswordLine fontSize={30} color='#cccccc'/>
                <StsignupInput bdColor='#f2f2f2' placeholder="비밀번호"
                type='password'
                name='password'
                value={password}
                onChange={setPassword}
                autoComplete="off"
                ></StsignupInput>
              </StsignupPwContainer>
            </StsignupBody>
            
            <StsignupBtnContainer bdColor='#f2f2f2'>
              <StsignupButton onClick={onSubmitHandler}>회원가입</StsignupButton>
            </StsignupBtnContainer>
          </Stbodybody>
          <Stbodyempty1 bdColor='#f2f2f2'></Stbodyempty1>
        </StbodyContainer>
        <Stempty1 bdColor='#f2f2f2'></Stempty1>
      </StContainer>
    </Layout>
  )
}

export default SignupPage

const StContainer = styled.div`
  width : 100%;
  height : 100%;
  /* border : 3px solid ${(props) => props.bdColor}; */
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
  border : 2px solid ${(props) => props.bdColor};
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
  height : 15%;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
`
const Stbodybody = styled.div`
  width : 100%;
  height : 55%;
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
const StsignupHeader = styled.div`
  width : 100%;
  height : 25%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
  align-items: center;
  justify-content: center;
`
const StsignupHeaderName = styled.div`
  width : 85%;
  height : 80%;
  font-size : 30px;
  border : 2px solid ${(props) => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
`
const StsignupBody = styled.div`
  width : 100%;
  height : 50%;
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
const StsignupNicknameContainer = styled.div`
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
const StsignupInput = styled.input`
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
const StsignupIdContainer = styled.div`
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
const StsignupPwContainer = styled.div`
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
const StsignupBtnContainer = styled.div`
  width : 100%;
  height : 25%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
  align-items: center;
  justify-content: center;
`
const StsignupButton = styled.button`
  width : 85%;
  height : 60%;
  font-size : 20px;
  font-weight : 800;
  color : #ffffff;
  background : #000000;
  border : 2px solid ${(props) => props.bdColor};
  cursor: pointer;
`
const Stbodyempty1 = styled.div`
  width : 100%;
  height : 30%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
`
const Stempty1 = styled.div`
  width : 100%;
  height : 100%;
  /* border : 2px solid ${(props) => props.bdColor}; */
  display: flex;
`