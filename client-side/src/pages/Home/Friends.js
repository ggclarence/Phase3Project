import React, {useEffect,useState} from "react";
import FriendCard from "./FriendCard";

function Friends(){
    
 const [friends,setFriends] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/users/four")
            .then(resp => resp.json())
            .then(data => setFriends(data))
    }, [])

 const friendsMap = friends.map((friend)=>{
     return <FriendCard key={friend.id} friend={friend}/>
 })
   
    

    return(
        <div>
            <h3>Your Friends</h3>
            <div>
                {friendsMap}
            </div>
        </div>
    )
}

export default Friends
