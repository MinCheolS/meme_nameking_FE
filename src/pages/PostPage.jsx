import React from 'react'
import Post from '../components/Post/Post'
// import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import FileUpload from '../components/Post/DropFile'

function PostPage() {
  return (
    <div>
      <Header />
      <Post/>
      <FileUpload />
    </div>
    
  )
}

export default PostPage