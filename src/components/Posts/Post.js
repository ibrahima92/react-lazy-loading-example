import React from 'react'


const Post = ({ post:{title, body}}) => (
    <div className="card">
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
)

export default Post 