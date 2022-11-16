import React from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Function Completion - RadialBarChart creation.
 * @param {object} userScore - The userScore value.  
 * @param {number} userScore._id - The id value.
 * @param {number} userScore._age - The age value.
 * @param {number} userScore._calorieCount - The calorieCount value.
 * @param {number} userScore._carbohydrateCount - The carbohydrateCount value.
 * @param {number} userScore._proteinCount - The proteinCount value.
 * @param {number} userScore._lipidCount - The lipidCount value.
 * @param {string} userScore._firstName - The firstName value.
 * @param {string} userScore._lastName - The lastName value.
 * @param {number} userScore._score - The score value.
 * @param {number} userScore._todayScore - The todayScore value.
 */
function Completion({ userScore }) {
    let userDataScore = userScore.todayScore;
    const { todayScore, score } = userScore;
    if (todayScore) {
        userDataScore = todayScore
    }
    if (score) {
        userDataScore = score
    }

    const todayScore1 = [
        {
            'todayScore': userDataScore
        }
    ]

    /**
     * Function renderLegend - Legend style.     
     */
    const renderLegend = () => {
        return (
            <div style={{
                fontFamily: 'Roboto', fontWeight: 600, fontSize: 15,
                color: '#20253A', marginLeft: '8%', marginTop: 15
            }}>
                <div>
                    Score
                </div>
            </div>
        )
    }

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="70%"
                    barSize={10}
                    data={todayScore1}
                    startAngle={90}
                    endAngle={450}
                >

                    <RadialBar
                        minAngle={15}
                        cornerRadius={40}
                        background={false}
                        fill='#FF0000'
                        dataKey='todayScore'
                    />

                    <text
                        x={120}
                        y={120}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily='Roboto'
                        fontWeight={700}
                        fontSize={26}
                        fill='#20253A'
                    >
                        <tspan>
                            {userDataScore}%
                        </tspan>
                        <tspan x={120} y={150} fontWeight={500} fontSize={16} fill='#74798C' >
                            de votre
                        </tspan>
                        <tspan x={120} y={175} fontWeight={500} fontSize={16} fill='#74798C' >
                            objectif
                        </tspan>
                    </text>

                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                        axisLineType='circle'
                    />

                    <Legend
                        verticalAlign='top'
                        align='left'
                        content={renderLegend}
                    />

                </RadialBarChart>
            </ResponsiveContainer>
        </>
    )
}

Completion.propTypes = {
    userScore: PropTypes.object
}

export default Completion