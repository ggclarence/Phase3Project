import React, { useState } from 'react';

function PostForm({handleAdd, user}){

    const [newPost, setNewPost] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        handleAdd(newPost)
        event.target.reset()
    }
    
    function onChange(event) {
        setNewPost({ name: user.name, post: event.target.value })

    }
    
    return(
        <div className="postForm">
            <form onSubmit={handleSubmit}>
                <h2>How you feeling bud?</h2>
                    <input type="text"
                    name="post"
                    placeholder="How are you feeling"
                    onChange={onChange} />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm;