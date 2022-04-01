import React, { useState } from 'react';

function PostForm({handleAdd}){

    const [newPost, setNewPost] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        handleAdd(newPost)
        event.target.reset()
    }
    
    function onChange(event) {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }
    
    return(
        <div className='postContainer'>
            <div className="postForm">
                <form onSubmit={handleSubmit}>
                    <p>How you feeling bud?</p>
                        <input type="text"
                        name="name" 
                        placeholder="Your Name" 
                        onChange={onChange} />
                        <input type="text"
                        name="post"
                        placeholder="How are you feeling"
                        onChange={onChange} />
                    <button type="submit">Add Post</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm;