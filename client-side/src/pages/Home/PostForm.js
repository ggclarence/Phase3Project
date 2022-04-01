import React, { useState } from 'react';

function PostForm({handleAdd, user}){

    const [newPost, setNewPost] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        handleAdd(newPost)
        event.target.reset()
    }
    
    function onChange(event) {
        // setNewPost({ name: user.name, post: event.target.value })
        
        setNewPost({ ...newPost, [event.target.name]: event.target.value,name: user.name })
        console.log(newPost)
    }
    
    return(
        <div className="postForm">
            <form onSubmit={handleSubmit}>
                <h2>Add a post!</h2>
                    <input type="text" name="post" placeholder="How are you feeling" onChange={onChange} />
                    <input type="text" name="img_url" placeholder='image_url' onChange={onChange}/>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm;