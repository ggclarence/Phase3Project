import React from 'react';
import "./styles.css"

function Header() { 
    return (
        <div className='header'>
            <h1>Hello <em>World!</em> App</h1>
                <div className='userBanner'>
                    <h3>Thomas Ander</h3>
                    <img src="https://d.newsweek.com/en/full/1609356/tom-anderson-myspace.jpg?w=1600&h=1600&l=38&t=18&q=88&f=6eb12635eef28644ad947cd6c58302f8" alt='profilePic'/>
                </div>
        </div>
    )
}

export default Header;