import React from "react";
import "./styles.css"
// adasdsa
function FriendCard({friend}){
    console.log(friend)
    return(
        <div className="userBanner">
            <img src={friend.profile_picture} alt="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></img>
        </div>
    )
}

export default FriendCard