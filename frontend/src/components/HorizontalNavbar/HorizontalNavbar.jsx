import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SportseeLogo } from '../../assets/sportseeLogo.svg'
import { ReactComponent as SportseeText } from '../../assets/sportseeText.svg'
import './HorizontalNavbar.css'

/**
 * Function HorizontalNavbar - HorizontalNavBar creation. 
 */
const HorizontalNavbar = () => {
    return (
        <div className='horizontalNavbar'>
            <div className='logo'>
                <div className='logoLogo'>
                    <SportseeLogo />
                </div>
                <div className='logoText'>
                    <SportseeText />
                </div>
            </div>
            <div className='navbar'>
                <Link to={'#'} className='navbarText1'>Accueil</Link>
                <Link to={'#'} className='navbarText2'>Profil</Link>
                <Link to={'#'} className='navbarText3'>Réglage</Link>
                <Link to={'#'} className='navbarText4'>Communauté</Link>
            </div>
        </div>
    )
}

export default HorizontalNavbar