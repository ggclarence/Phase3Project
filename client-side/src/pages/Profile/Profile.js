import React from 'react';
import Calendar from 'react-calendar';
import JournalEntries from './JournalEntries';
import Goals from '../Home/Goals';
import './styles.css';
import 'react-calendar/dist/Calendar.css'

function Profile({ user }) {


    return (
        <div className='profile'>
            <Goals user={user}/>
            <div className='profileCard'>
                <img src={user.profile_picture} alt='profilePic' />
                <h3>{user.name}</h3>
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