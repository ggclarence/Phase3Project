import React from 'react';
import Calendar from 'react-calendar';
import JournalEntries from './JournalEntries';
import Goals from '../Home/Goals';
import './styles.css';
import 'react-calendar/dist/Calendar.css'

function Profile() {

    return (
        <div className='profile'>
            {/* <Goals /> */}
            <div className='profileCard'>
                <img src="https://d.newsweek.com/en/full/1609356/tom-anderson-myspace.jpg?w=1600&h=1600&l=38&t=18&q=88&f=6eb12635eef28644ad947cd6c58302f8" alt='profilePic' />
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