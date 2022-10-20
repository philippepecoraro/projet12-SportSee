import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profil from './page/Profil';
import HorizontalNavbar from './components/HorizontalNavbar/HorizontalNavbar'


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <HorizontalNavbar />
                <Routes>
                    <Route path='/' element={<Navigate replace to='/user/12' />} />
                    <Route path='/user/:id' element={<Profil />} />
                    <Route path='/user/:id/activity' element={<Profil />} />
                    <Route path='/user/:id/average-sessions' element={<Profil />} />
                    <Route path='/user/:id/performance' element={<Profil />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
