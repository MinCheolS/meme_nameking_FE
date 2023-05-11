import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Full() {
    const movePage = useNavigate();

    function goPost() {
        movePage('/Post');
    }

    const [kingName, setKingName] = useState(null);
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "http://52.79.197.197:8080/posts/ddabongking"
                );
                if (response.status === 200) {
                    setKingName(response.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);


    useEffect(() => {
        fetch('http://52.79.197.197:8080/posts')
            .then((response) => response.json())
            .then((data) => setPostData(data.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Layout >
            <StContainer>
                <Container1>
                    <King>
                        👑 &nbsp; 짤명왕 : {kingName}
                    </King>
                    <PostButton onClick={goPost}>짤 작성하러 가기</PostButton>
                </Container1>
                <hr width="100%" />
                <Container2>
                    {postData.map((post, index) => (
                        <Post1 key={index}>
                            <FullComment>{post.bestComment}</FullComment>
                                <StyledLink to={`/fullpage/${post.postId}`}>
                                    <img src={post.imageUrl} alt="post" />
                                </StyledLink>
                            <Heart>
                                <button>♥︎</button>
                                <HeartAmount>{post.postDdabong}</HeartAmount>
                            </Heart>
                        </Post1>
                    ))}
                </Container2>
                <StPagingContainer>
                </StPagingContainer>
            </StContainer>
        </Layout>
    );
}

export default Full



const StContainer = styled.div`
width : 100%;
height : auto;
display: block;
// border : 1px solid #fe7751;
flex-direction: column;
justify-content: center;
// background-color: #ededed;
`

const Container1 = styled.div`
width : 100%;
height : auto;
display: flex;
// border : 1px solid #291fb1;
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
box-shadow: 1px 1px 5px 1px #7572a2;
font-weight: 600
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
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
// border : 1px solid #ff01ea
`

const FullComment = styled.div`
width : 100%;
height : 40px;
display: flex;
// border : 1px solid #035231;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 6px;
margin-top: 10px;
font-weight: 500;
`

const StyledLink = styled(Link)`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
background-color: white;
border-radius: 6px;
overflow: hidden;
background-size: cover;
img{
    object-fit: fill;
width : 100%;
height: 100%;
}
`

const Heart = styled.div`
justify-content: center;
// border : 1px solid #035231;
align-items: center;
display: flex;
flex-direction: column;
margin-top:10px;
`

const HeartAmount = styled.div`
font-size: 15px;
color: #050505;
padding-bottom:35px;
padding-top:3px;

`

const Post1 = styled.div`
width: 30%;
height: auto;
display: flex;
object-fit: fill;
flex-direction: column;
margin:5px;
// border : 1px solid #ca08a7;
`;

const StPagingContainer = styled.div`
display: flex;
object-fit: fill;
justify-content: center;
ul {
    list-style:none;
}
 
li {
    float: left;
    margin-right: 20px;
}

ul li {
	float:left;
}
ul li a {
	float:left;
	padding:4px;
	margin-right:3px;
	width:15px;
	color:#000;
	font:bold 12px tahoma;
	border:1px solid #eee;
	text-align:center;
	text-decoration:none;
}
ul li a:hover, ul li a:focus {
	color:#fff;
	border:1px solid #a6a3d3;;
	background-color: #a6a3d3;;
}
`;

