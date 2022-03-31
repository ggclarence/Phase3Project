import React from "react";
import Posts from "./Posts";
import Friends from "./Friends";
import './styles.css'
import Goals from "./Goals";

function Home( { user }) {
    return (
        <div className="homeContainer">
            <Posts user={user}/>
            <Goals user={user}/>
            <Friends />
        </div>
    )
}

export default Home