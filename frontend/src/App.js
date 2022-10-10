import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profil from './page/Profil';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Profil />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
