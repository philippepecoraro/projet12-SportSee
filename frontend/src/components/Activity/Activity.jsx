import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import './Activity.css'
import PropTypes from 'prop-types'


/**
 * Function Activity - Creation of BarChart.
 * @param {object} activity - The activity value. 
 * @param {object[]} activity._sessions - The sessions array.
 * @param {number} activity._userId - The userId value.
 */
function Activity({ activity }) {
    const activitySessions = activity._sessions;
    let sessionTab = [];
    let dayTab = [];

    if (activitySessions) {
        activitySessions.map(day => {
            day._day = new Date(day._day);
            const sessionDay = (day._day).getDate();
            return dayTab.push(sessionDay);
        })
    }

    if (activitySessions) {
        activitySessions.map(session => {
            return sessionTab.push(session);
        })
    }

    sessionTab.sort((a, b) => {
        return a._day - b._day;
    });

    const formatXAxis = (i) => {
        dayTab.sort((a, b) => a - b);
        return dayTab[i];
    }

    /**
     * Function CustomTooltip - Tooltip creation.
     * @param {boolean} active - The active value.
     * @param {object[]} payload - The payload value.     
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <div>
                        {payload.map((pld, i) => (
                            <div key={i} style={{
                                display: "block", padding: 10,
                                backgroundColor: '#E60000', width: 40,
                                height: 30, fontFamily: 'Roboto', fontSize: 12,
                                textAlign: 'center'
                            }}>
                                <div style={{ color: '#FFFFFF', marginTop: 8 }}>
                                    {((pld.dataKey) === '_kilogram') ?
                                        <div> {pld.value}kg</div> :
                                        <div>{pld.value}Kcal</div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        CustomTooltip.propTypes = {
            active: PropTypes.bool,
            payload: PropTypes.array
        }

        return null;
    };

    return (
        <>
            <ResponsiveContainer width="100%" height={320} >
                <BarChart data={sessionTab} barGap={8}
                    margin={{ top: 65, right: 30, bottom: 20, left: 0 }}
                >
                    <CartesianGrid strokeDasharray='3' vertical={false} />

                    <XAxis tickLine={false} domain={['dataMin', 'dataMax']}
                        tickFormatter={formatXAxis}
                        tickMargin={15}
                        tick={{
                            fill: '#9B9EAC', fontFamily: 'Roboto',
                            fontSize: 14
                        }}
                        padding={{ left: -45, right: -45 }}
                    />

                    <YAxis yAxisId='left' orientation='right'
                        dataKey='_kilogram'
                        domain={['dataMin -1', 'dataMax +2']}
                        tickMargin={40}
                        tickCount={3}
                        tick={{
                            fill: '#9B9EAC', fontFamily: 'Roboto',
                            fontSize: 14
                        }}
                        axisLine={false} tickLine={false}
                    />

                    <YAxis yAxisId='right' orientation='left'
                        dataKey='_calories'
                        domain={[0, 'dataMax + 50']}
                        axisLine={false} tickLine={false}
                        tickCount={6}
                        tick={false}
                    />
                    <Tooltip
                        content={<CustomTooltip />} wrapperStyle={{
                            top: -50, left: 35,
                            outline: 'none'
                        }}
                    />

                    <Bar yAxisId='left' dataKey='_kilogram'
                        fill='#282D30'
                        barSize={10}
                        radius={[5, 5, 0, 0]} name='Poids (kg)' />

                    <Bar yAxisId='right' dataKey='_calories' fill='#E60000'
                        barSize={10}
                        name='Calories brûlées (kCal)'
                        radius={[5, 5, 0, 0]} />

                    <Legend
                        verticalAlign='top' wrapperStyle={{
                            right: 16, top: 20,
                            fontFamily: 'Roboto', fontWeight: 500,
                            fontSize: 14,
                            width: 300
                        }}
                        align='right' iconSize={8} iconType='circle'
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

Activity.propTypes = {
    activity: PropTypes.object
};

export default Activity