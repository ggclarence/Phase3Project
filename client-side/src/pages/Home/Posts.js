import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import './styles.css'

function Posts() {

    const [currentPost, setCurrentPost] = useState([])
    //fetchs current posts from db
    useEffect(() => {
        fetch("http://localhost:9292/posts")
            .then(resp => resp.json())
            .then(data => setCurrentPost(data.slice(-3)))
        }, [])
    
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
            .then(data => setCurrentPost(data.slice(-3)))
            });
        }
    
    const mapPost = currentPost.map((post) => {
        return <PostCard key={post.id} post={post} />
    })

    return (
        <div className="timeline">
            <PostForm handleAdd={handleAdd}/>
            {mapPost}
        </div>
    )
}

export default Posts;