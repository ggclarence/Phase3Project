import React, { useState } from 'react';
import "./styles.css";

function PostForm({handleAdd, user, handleRefresh, refresh}){

    const [newPost, setNewPost] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        handleAdd(newPost)
        handleRefresh(refresh => !refresh)
        event.target.reset()
    }
    
    function onChange(event) {
     setNewPost({ ...newPost, [event.target.name]: event.target.value})
    }
    
    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h2 className='newPostTitle'>Add a post!</h2>
                <div>
                    <input  class="formInput" type="text" name="post" placeholder="How are you feeling" onChange={onChange} />
                </div>
                <div >    
                    <input class="formInput" type="text" name="img_url" placeholder='image_url' onChange={onChange}/>
                </div>
                <div >
                <button class="form-submit" type="submit">Add Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm;