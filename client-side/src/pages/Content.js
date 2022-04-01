import React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css'

const Journal = React.lazy( () => import('./Journal/Journal'));
const Home = React.lazy( () => import('./Home/Home'));
const Profile = React.lazy( () => import('./Profile/Profile'));

function Content(){
    return (
        <div className='mainContainer'>
            <Suspense fallback= {<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Content;