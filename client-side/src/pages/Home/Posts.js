import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import './styles.css'

function Posts({ user }) {

    const [currentPost, setCurrentPost] = useState([])
    const [loadLimit, setLoadLimit] = useState(3)
    useEffect(() => {
        fetch(`http://localhost:9292/posts/${loadLimit}`)
            .then(resp => resp.json())
            .then(data => setCurrentPost(data))
        }, [loadLimit])
    
    function handleAdd(newData) {
        fetch("http://localhost:9292/posts", {
            method: "POST",
            body: JSON.stringify(newData),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
            fetch("http://localhost:9292/posts")
            .then(resp => resp.json())
            .then(data => setCurrentPost(data))
            });
        }
    
    const mapPost = currentPost.map((post) => {
        return <PostCard key={post.id} post={post} />
    })

    return (
        <div className="timeline">
            <PostForm handleAdd={handleAdd} user={user}/>
            {mapPost}
            <button onClick={() => setLoadLimit(loadLimit => loadLimit += 3)}>Load more</button>
        </div>
    )
}

export default Posts;