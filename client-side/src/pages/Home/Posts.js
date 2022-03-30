import React from "react";
import PostCard from "./PostCard";


function Posts({ currentPost }) {
    const mapPost = currentPost.map((post) => {
        return <PostCard key={post.id} post={post} />
    })
    return (
        <div>
            {mapPost}
        </div>

    )
}

export default Posts
