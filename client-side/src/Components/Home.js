import React, { useEffect, useState } from "react";
import Posts from "./Posts";
function Home(){

    const [newPost,setNewPost] = useState([])
    const [currentPost,setCurrentPost] = useState([])

    function handleSubmit(event){
    event.preventDefault()
    console.log("hello")
    }

    function onChange(event){
        console.log(event.target.name,event.target.value)
    }



    useEffect(()=>{
        fetch("http://localhost:9292/posts")
        .then(resp => resp.json())
        .then(data => setCurrentPost(data))
    },[])



    // console.log(currentPost)


return(
<div>
    <div>
        <h3>Timeline</h3>
    </div>
    <div>
        <p>How you feeling bud?</p>
        <input type="text" name="name" placeholder="Your Name" onChange={onChange}/>
        <input type="text" name="post" placeholder="How are you feeling" onChange={onChange}/>
        <button  onClick={handleSubmit} type="submit">Add Post</button>
        <form onSubmit={handleSubmit}></form>
    </div>
    <Posts currentPost={currentPost}/>
</div>
)
}

export default Home