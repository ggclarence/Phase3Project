import React from "react";
import FriendCard from "./FriendCard";
import "../styles.css"

function Friends({friends}){
    
    const friendsMap = friends.map((friend)=>{
        return <FriendCard key={friend.id} friend={friend}/>
    })

    return(
        <div 
        className="friendsContainer"
        style={{
            display: "flex",
            flexDirection: "column",
            }}>
            <h1>Your Friends!</h1>
            {friendsMap}
        </div>
    )
}

export default Friends