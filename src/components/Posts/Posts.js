import React from 'react'
import useRequest from '../../hooks/useRequest'

import Post from './Post'

const Posts = () => { 

const posts = useRequest('posts')

return (
    <>      
    {
        posts.map(post => <Post key={post.id} post={post} />)
    }
    </>
    )
}
export default Posts