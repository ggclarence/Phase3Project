import React from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import 'react-calendar/dist/Calendar.css'
import Goals from '../../Components/Goals';
import JournalEntries from './JournalEntries';

function Profile(){
    return (
    <div className='profile'>
        <div className='goals'>
            <h1>Daily Goals</h1>
            <Goals />            
        </div>
        <div className='profileCard'>
            <img src="https://d.newsweek.com/en/full/1609356/tom-anderson-myspace.jpg?w=1600&h=1600&l=38&t=18&q=88&f=6eb12635eef28644ad947cd6c58302f8" alt='profilePic'/>
            <h3>Thomas Ander</h3>
            <Calendar />
        </div>
        <div className='journey'>
            <h1>Journal Entries</h1>
            <JournalEntries />
        </div>
    </div>
    )
}

export default Profile;