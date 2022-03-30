import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Goals from "../../Components/Goals";

function Home() {

    const [newPost, setNewPost] = useState([])


    function handleSubmit(event) {
        event.preventDefault()
        handleAdd(newPost)
        event.target.reset()
    }

    function onChange(event) {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }
    const [currentPost, setCurrentPost] = useState([])

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


    return (
        <div>
            <div>
                <h3>Timeline</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>How you feeling bud?</p>
                    <input type="text" name="name" placeholder="Your Name" onChange={onChange} />
                    <input type="text" name="post" placeholder="How are you feeling" onChange={onChange} />
                    <button type="submit">Add Post</button>
                </form>
            </div>
            <Posts currentPost={currentPost} />
            <h3>Daily Goals</h3>
            <Goals />
        </div>
    )
}

export default Home