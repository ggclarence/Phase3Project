import React from "react";
import FriendCard from "./FriendCard";

function Friends({friends}){
    
    const friendsMap = friends.map((friend)=>{
        return <FriendCard key={friend.id} friend={friend}/>
    })

    return(
        <div className="friendsContainer">
            <h1>Your Friends!</h1>
            {friendsMap}
        </div>
    )
}

export default Friends
