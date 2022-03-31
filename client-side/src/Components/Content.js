import React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Journal = React.lazy( () => import('../pages/Journal/Journal'));
const Home = React.lazy( () => import('../pages/Home/Home'));
const Profile = React.lazy( () => import('../pages/Profile/Profile'));

function Content({ user }){
    return (
        <div className='mainContent'>
            <Suspense fallback= {<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home user={user}/>} />
                    <Route path="/journal" element={<Journal user={user}/>} />
                    <Route path='/profile' element={<Profile user={user}/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Content;