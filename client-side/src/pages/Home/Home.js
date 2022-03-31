import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Friends from "./Friends";
import './styles.css'
import Goals from "./Goals";

function Home( { user }) {

    const [friends,setFriends] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/users/four")
            .then(resp => resp.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div className="homeContainer">
            <Posts user={user}/>
            <Goals user={user}/>
            <Friends />
         </div>
    )
}

export default Home