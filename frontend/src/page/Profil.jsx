import React from 'react'
import './Profil.css'
import VerticalNavbar from '../components/VerticalNavbar/VerticalNavbar'
import { MockedDataService } from '../service/MockedDataService'
import { Service } from '../service/Service'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KeyData from '../components/KeyData/KeyData'


const Profil = () => {
    const [userData, setData] = useState([]);
    const [userDataActivity, setDataActivity] = useState([]);
    const [userDataSessions, setDataSessions] = useState([]);
    const [userDataPerformance, setDataPerformance] = useState([]);
    const { id } = useParams();
    let serviceData = true;

    useEffect(() => {
        if (serviceData) {
            Service().getUser(id).then(user => setData(user));
            Service().getUserActivity(id).then(activity => setDataActivity(activity));
            Service().getUserAverageSessions(id).then(session => setDataSessions(session));
            Service().getUserPerformance(id).then(performance => setDataPerformance(performance));
        }
        else {
            MockedDataService().getUser(id).then(user => {
                user.forEach((item) => {
                    if (item.id.toString() === id) {
                        setData(item);
                    }
                })
            });
            MockedDataService().getUserActivity(id).then(activity => {
                activity.forEach((item) => {
                    if (item.userId.toString() === id) {
                        setDataActivity(item);
                    }
                })
            });
            MockedDataService().getUserAverageSessions(id).then(session => {
                session.forEach((item) => {
                    if (item.userId.toString() === id) {
                        setDataSessions(item);
                    }
                })
            });
            MockedDataService().getUserPerformance(id).then(performance => {
                performance.forEach((item) => {
                    if (item.userId.toString() === id) {
                        setDataPerformance(item);
                    }
                })
            });
        }
    }, [id, serviceData]);


    return (
        <div className='profil'>
            {userData !== undefined && userData.userInfos !== undefined &&
                <>
                    <div className='profilNavbarBody'>
                        <div className='profilVerticalNavbar'>
                            <VerticalNavbar />
                        </div>
                        <div className='profilBody'>
                            <div className='profilHeader'>
                                <h1 className='profilHeaderTextH1'>Bonjour
                                    <span> {userData.userInfos.firstName}</span></h1>
                                <p className='profilHeaderTextP'>Félicitation ! Vous avez explosé vos objectifs hier
                                    <span> &#128079;</span></p>
                            </div>
                            <div className='profilActivityData'>
                                <div className='profilActivity'>
                                    <div className='profilActivityActivity'>
                                    </div>
                                    <div className='profilActivitySessionPerformanceScore'>
                                        <div className='profilActivitySession'>
                                        </div>
                                        <div className='profilActivityPerformance'>
                                        </div>
                                        <div className='profilActivityScore'>
                                        </div>
                                    </div>
                                </div>
                                <div className='profilKeyData'>
                                    <div className='profilKeyDataCalories'>
                                        <KeyData keyDataIcon='icon1' userKeyData={userData} />
                                    </div>
                                    <div className='profilKeyDataProteines'>
                                        <KeyData keyDataIcon='icon2' userKeyData={userData} />
                                    </div>
                                    <div className='profilKeyDataGlucides'>
                                        <KeyData keyDataIcon='icon3' userKeyData={userData} />
                                    </div>
                                    <div className='profilKeyDataLipides'>
                                        <KeyData keyDataIcon='icon4' userKeyData={userData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Profil