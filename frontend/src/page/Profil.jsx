import React from 'react'
import './Profil.css'
import HorizontalNavbar from '../components/HorizontalNavbar/HorizontalNavbar'
import VerticalNavbar from '../components/VerticalNavbar/VerticalNavbar'


const Profil = () => {

    return (
        <div className='profil'>
            <HorizontalNavbar />
            <div className='profilBody'>
                <div className='profilVerticalNavbar'>
                    <VerticalNavbar />
                </div>
            </div>
        </div>
    )
}

export default Profil