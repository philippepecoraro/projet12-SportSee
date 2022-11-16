import React from 'react'
import './KeyData.css'
import { ReactComponent as Calories } from '../../assets/calories.svg'
import { ReactComponent as Proteines } from '../../assets/proteines.svg'
import { ReactComponent as Glucides } from '../../assets/glucides.svg'
import { ReactComponent as Lipides } from '../../assets/lipides.svg'
import PropTypes from 'prop-types'

/**
 * Function KeyData - List of KeyData.
 * @param {string} keyDataIcon - The keyDataIcon value.
 * @param {object} userKeyData - The userKeyData value. 
 * @param {number} userKeyData._id - The id value.
 * @param {number} userKeyData._age - The age value.
 * @param {number} userKeyData._calorieCount - The calorieCount value.
 * @param {number} userKeyData._carbohydrateCount - The carbohydrateCount value.
 * @param {number} userKeyData._proteinCount - The proteinCount value.
 * @param {number} userKeyData._lipidCount - The lipidCount value.
 * @param {string} userKeyData._firstName - The firstName value.
 * @param {string} userKeyData._lastName - The lastName value.
 * @param {number} userKeyData._score - The score value.
 * @param {number} userKeyData._todayScore - The todayScore value.
 */
const KeyData = ({ keyDataIcon, userKeyData }) => {
    const userKeyDataCalorieCount = userKeyData.calorieCount;
    const userKeyDataProteinCount = userKeyData.proteinCount;
    const userKeyDataGlucideCount = userKeyData.carbohydrateCount;
    const userKeyDataLipideCount = userKeyData.lipidCount;

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

KeyData.propTypes = {
    keyDataIcon: PropTypes.string,
    userKeyData: PropTypes.object
};

export default KeyData