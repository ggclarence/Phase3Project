import React from "react";

function PostCard({ post }) {
    return (
        <ul>
            <li>
                <h2>{post.user.name}</h2>
                <p>{post.post}</p>
                <p>created on: {post.created_at.slice(0, 10)}</p>
            </li>
        </ul>
    )
}

export default PostCard