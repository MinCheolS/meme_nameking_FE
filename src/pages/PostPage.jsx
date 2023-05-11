import React from 'react'
import Post from '../components/Post/Post'
// import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import DropFile from '../components/Post/DropFile'

function PostPage() {
  return (
    <div style={{ backgroundColor: '#f2f2f2' }}>
      <Header />
      <Post />
      <DropFile />
    </div>
    
  )
}

export default PostPage
