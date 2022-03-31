import React from 'react';
import "./styles.css"

function Header({ user }) { 



    return (
        <div className='header'>
            <h1>Hello <em>World!</em> App</h1>
                <div className='userBanner'>
                    <h3>{user.name}</h3>
                    <img src={user.profile_picture} alt='profilePic'/>
                </div>
        </div>
    )
}

export default Header;