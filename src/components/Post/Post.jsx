import React from 'react'
import styled from 'styled-components'
// import { useEffect } from 'react';
// import DropFile from './DropFile'/

function Post() {
    // React.useEffect(() => {
    //     // DropFile 컴포넌트에서 찾는 dropArea 요소 생성
    //     const dropArea = document.createElement('div');
    //     dropArea.setAttribute('id', 'dropArea');
    //     document.body.appendChild(dropArea);
    //   }, []);
    return (
        <div>
            <PostArea>
                <PostEx align='center'>
                    <PostExH2 align='center'>
                        이 사진의 재미있는 제목을 만들어줘!
                    </PostExH2>
                    <PostExH3>
                        사진을 등록해 주세요
                    </PostExH3>
                    <hr width='600px'></hr>
                </PostEx>
                <PostTitle>
                    나는 제목이 없어(default)
                </PostTitle>
            </PostArea>
        </div>
    )
}

export default Post

const PostArea = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
`
const PostEx = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`
const PostExH2 = styled.div`
font-size: 20px;
    font-weight: 600;
    display: flex;
    padding-top: 70px;
    color: #5f5d87;
`

const PostExH3 = styled.div`
padding: 10px;
padding-bottom: 50px;
color: #4b4b4b;
`

const PostTitle = styled.div`
padding-top: 30px;
padding-bottom: 10px;
font-size: large;
font-weight: 600;
`
const Contents = styled.div`
display: flex;
width: 80%;
  flex-direction: row;
  margin-top: 30px;
`
const UploadBox = styled.div`
.file {
  display: none;
}
width: 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DragFile = styled.div`
.image {
  width: 40px;
}
.message {
  margin-bottom: 0;
  color: #8886ae;
}
.preview {
  display: none;
  position: absolute;
  left: 0;
  height: 0;
  width: 100%;
  height: 100%;
}
.highlight {
  border: 3px dashed red;
}
position: relative;
  width: 70%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dashed #dbdbdb;
`

const FileLabel = styled.div`
margin-top: 30px;
  background-color: #b8b6dc;
  color: #171717;
  text-align: center;
  padding: 10px 0;
  width: 65%;
  border-radius: 6px;
  cursor: pointer;
  &:hover{  
    background-color : #000000;
    color : #ffffff
  }
`

