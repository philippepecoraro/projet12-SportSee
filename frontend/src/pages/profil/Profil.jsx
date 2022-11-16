import React from 'react'
import './Profil.css'
import VerticalNavbar from '../../components/VerticalNavbar/VerticalNavbar'
import { MockedDataService } from '../../service/MockedDataService'
import { Service } from '../../service/Service'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import KeyData from '../../components/KeyData/KeyData'
import Activity from '../../components/Activity/Activity'
import SessionDuration from '../../components/SessionDuration/SessionDuration'
import Performance from '../../components/Performance/Performance'
import Completion from '../../components/Completion/Completion'
import UserData from '../../models/UserData'
import ActivityData from '../../models/ActivityData'
import SessionsData from '../../models/SessionsData'
import PerformanceData from '../../models/PerformanceData'


/**
 * Function Profil - Profil page.  
 */
const Profil = () => {
    const [userData, setData] = useState({});
    const [userDataActivity, setDataActivity] = useState({});
    const [userDataSessions, setDataSessions] = useState({});
    const [userDataPerformance, setDataPerformance] = useState({});
    const { id } = useParams();
    const typeOfData = localStorage.getItem('data1');
    const typeOfDataBool = JSON.parse(typeOfData);
    let navigate = useNavigate();

    useEffect(() => {
        if (!typeOfDataBool) {
            Service().getUser(id).then(user => {
                if (user === undefined) {
                    navigate('*')
                }
                else {
                    const userDataData = new UserData(user);
                    setData(userDataData);
                }
            })

            Service().getUserActivity(id).then(activity => {
                if (activity === undefined) {
                    navigate('*')
                }
                else {
                    const userDataDataActivity = new ActivityData(activity);
                    setDataActivity(userDataDataActivity);
                }
            })

            Service().getUserAverageSessions(id).then(session => {
                if (session === undefined) {
                    navigate('*')
                }
                else {
                    const userDataDataSessions = new SessionsData(session);
                    setDataSessions(userDataDataSessions);
                }
            })

            Service().getUserPerformance(id).then(performance => {
                if (performance === undefined) {
                    navigate('*')
                }
                else {
                    const userDataDataPerformance = new PerformanceData(performance);
                    setDataPerformance(userDataDataPerformance);
                }
            })
        }
        else {
            if ((MockedDataService().getUser(id)) < 1) {
                navigate('*')
            }
            else {
                (MockedDataService().getUser(id))
                    .forEach(item => {
                        if (item.id.toString() === id) {
                            const userDataData = new UserData(item)
                            setData(userDataData)
                        }
                    })
            };


            if ((MockedDataService().getUserActivity(id)) < 1) {
                navigate('*')
            }
            else {
                (MockedDataService().getUserActivity(id))
                    .forEach(item => {
                        if (item.userId.toString() === id) {
                            const userDataDataActivity = new ActivityData(item)
                            setDataActivity(userDataDataActivity);
                        }
                    })
            };


            if ((MockedDataService().getUserAverageSessions(id)) < 1) {
                navigate('*')
            }
            else {
                (MockedDataService().getUserAverageSessions(id))
                    .forEach(item => {
                        if (item.userId.toString() === id) {
                            const userDataDataSessions = new SessionsData(item)
                            setDataSessions(userDataDataSessions);
                        }
                    })
            };


            if ((MockedDataService().getUserPerformance(id)) < 1) {
                navigate('*')
            }
            else {
                (MockedDataService().getUserPerformance(id))
                    .forEach(item => {
                        if (item.userId.toString() === id) {
                            const userDataDataPerformance = new PerformanceData(item)
                            setDataPerformance(userDataDataPerformance);
                        }
                    });
            }
        }

    }, [id, typeOfDataBool, navigate]);

    return (
        <div className='profil'>
            {userData !== undefined &&
                <>
                    <div className='profilNavbarBody'>
                        <div className='profilVerticalNavbar'>
                            <VerticalNavbar />
                        </div>
                        <div className='profilBody'>
                            <div className='profilHeader'>
                                <h1 className='profilHeaderTextH1'>Bonjour
                                    <span> {userData.firstName}</span></h1>
                                <p className='profilHeaderTextP'>Félicitation ! Vous avez explosé vos objectifs hier
                                    <span> &#128079;</span></p>
                            </div>
                            <div className='profilActivityData'>
                                <div className='profilActivity'>
                                    <div className='profilActivityActivity'>
                                        <div className='profilActivityActivityText'>Activité quotidienne</div>
                                        <Activity activity={userDataActivity} />
                                    </div>
                                    <div className='profilActivitySessionPerformanceScore'>
                                        <div className='profilActivitySession'>
                                            <SessionDuration average={userDataSessions} />
                                        </div>
                                        <div className='profilActivityPerformance'>
                                            <Performance performance={userDataPerformance} />
                                        </div>
                                        <div className='profilActivityScore'>
                                            <Completion userScore={userData} />
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