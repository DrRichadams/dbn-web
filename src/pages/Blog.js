import React from 'react'
import Banner from '../components/Banner'
import BlogPosts from '../components/BlogPosts'

function Blog() {
  return (
    <div>
        <Banner title="Blog" text="Articles Regarding the Network" bgImage="blog.png"/>
        <BlogPosts />
    </div>
  )
}

export default Blog