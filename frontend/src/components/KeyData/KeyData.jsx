import React from 'react'
import './KeyData.css'
import { ReactComponent as Calories } from '../../assets/calories.svg'
import { ReactComponent as Proteines } from '../../assets/proteines.svg'
import { ReactComponent as Glucides } from '../../assets/glucides.svg'
import { ReactComponent as Lipides } from '../../assets/lipides.svg'


const KeyData = ({ keyDataIcon, userKeyData }) => {
    const userKeyDataCalorieCount = userKeyData.keyData.calorieCount;
    const userKeyDataProteinCount = userKeyData.keyData.proteinCount;
    const userKeyDataGlucideCount = userKeyData.keyData.carbohydrateCount;
    const userKeyDataLipideCount = userKeyData.keyData.lipidCount;

    return (
        <div className='keyData'>
            <div className='keyDataIconKeyData'>
                <div className='keyDataIcon'>
                    {keyDataIcon === 'icon1' ? <Calories />
                        : keyDataIcon === 'icon2' ? <Proteines /> :
                            keyDataIcon === 'icon3' ? <Glucides /> :
                                <Lipides />
                    }
                </div>
                <div className='keyDataText'>
                    <div className='keyDataKeyData'>
                        {keyDataIcon === 'icon1' ? userKeyDataCalorieCount :
                            keyDataIcon === 'icon2' ? userKeyDataProteinCount :
                                keyDataIcon === 'icon3' ? userKeyDataGlucideCount :
                                    userKeyDataLipideCount
                        }
                    </div>
                    <div className='keyDataKeyDataText'>
                        {keyDataIcon === 'icon1' ? 'Calories' :
                            keyDataIcon === 'icon2' ? 'Proteines' :
                                keyDataIcon === 'icon3' ? 'Glucides' : 'Lipides'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyData