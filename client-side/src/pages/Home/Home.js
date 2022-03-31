import React from "react";
import Posts from "./Posts";
import Friends from "./Friends";
import './styles.css'
import Goals from "./Goals";

function Home() {
    return (
        <div className="homeContainer">
            <Posts />
            <Goals />
            <Friends />
        </div>
    )
}

export default Home