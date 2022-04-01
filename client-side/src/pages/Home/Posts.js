import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import '../styles.css'

function Posts() {

    const [currentPost, setCurrentPost] = useState([])
    //fetchs current posts from db
    useEffect(() => {
        fetch("http://localhost:9292/posts")
            .then(resp => resp.json())
            .then(data => setCurrentPost(data))
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
            .then(data => setCurrentPost(data))
            });
        }
    
    const mapPost = currentPost.map((post) => {
        return <PostCard key={post.id} post={post} /> 
    })

    return (
            <div id='scrollableDiv'>
                <InfiniteScroll 
                    dataLength={currentPost.length}
                    style={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: "center",
                    }}
                    inverse={true}
                    hasMore={false}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    >
                    {mapPost}
                </InfiniteScroll>
            </div>
    )
}

export default Posts;