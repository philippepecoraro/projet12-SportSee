import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profil from './pages/profil/Profil';
import HorizontalNavbar from './components/HorizontalNavbar/HorizontalNavbar'
import Accueil from './pages/accueil/Accueil';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <HorizontalNavbar />
                <Routes>
                    <Route path='/' element={<Accueil />} />
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
