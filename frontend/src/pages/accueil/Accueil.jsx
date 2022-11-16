import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Accueil.css'

/**
 * Function Accueil - Navigate to data.  
 */
const Accueil = () => {
    const [data1, setData1] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('data1', JSON.stringify(data1));
        if (data1 === true) {
            navigate('/user/12');
        } else if (data1 === false) {
            navigate('/user/18');
        }
    }, [data1, navigate])

    /**
     * Function donnees1 - Set Data1 to mocked data.
     */
    function donnees1() {
        setData1(true);
    }

    /**
     * Function donnees2 - Set Data1 to API data.
     */
    function donnees2() {
        setData1(false);
    }

    return (
        <div className='accueil'>
            <div className='textAccueil'>
                <h1>Veuiller choisir entre données mockés et données API</h1>
            </div>
            <div className='linkAccueil'>
                <button className='accueil1' onClick={donnees1}>
                    Données Mockées
                </button>
                <button className='accueil2' onClick={donnees2}>
                    Données API
                </button>
            </div>
        </div>
    )
}

export default Accueil