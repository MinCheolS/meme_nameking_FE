import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate()
  
  return (
    <StContainer>
      <Sth1 onClick={() => navigate("/")}>내가 짤명왕</Sth1>
      <div>
        <StButton onClick={() => navigate("/login")}>로그인</StButton>
        <StButton onClick={() => navigate("/signup")}>회원가입</StButton>
      </div>
    </StContainer>
  )
}
export default Header

const StContainer = styled.div`
justify-content: space-between;
align-items: center;
display: flex;
height: 90px;
background-color: #f2f2f2;
padding: 0 20px;
/* border: 1px solid #c8c3c3; */
`;

const Sth1 = styled.h1`
font-size : 40px;
padding : 15px 0px 0px 20px;
`

const StButton = styled.button`
font-size : 20px;
border-radius : 10px;
margin : 15px 20px 10px 10px;
cursor: pointer;
`