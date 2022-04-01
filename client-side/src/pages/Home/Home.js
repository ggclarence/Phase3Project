import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Friends from "./Friends";
import '../styles.css'
import Goals from "./Goals";
import PostForm from "./PostForm";

function Home( { user }) {

    const [friends,setFriends] = useState([])
    const [currentPost, setCurrentPost] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        fetch("http://localhost:9292/users/four")
            .then(resp => resp.json())
            .then(data => setFriends(data))
    }, [refresh])

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
            fetch(`http://localhost:9292/posts`)
            .then(resp => resp.json())
            .then(data => setCurrentPost(data))
            });
        }

    return (
        <div className="homeContainer">
            <PostForm handleAdd={handleAdd} user={user} refresh={refresh} handleRefresh={setRefresh}/>
            <Posts user={user} currentPost={currentPost}/>
            <Goals user={user}/>
            <Friends friends={friends}/>
         </div>
    )
}

export default Home