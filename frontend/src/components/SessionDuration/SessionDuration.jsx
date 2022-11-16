import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Function SessionDuration - LineChart creation.
 * @param {object} average - The average value. 
 * @param {number} average._userId - The userId value.
 * @param {object[]} average._sessions - The sessions array.
 * @param {number} average._sessions._day - The day value.
 * @param {number} average._sessions._sessionLength - The session Length value.
 * 
 */
function SessionDuration({ average }) {
    const averageSessions = average._sessions;

    /**
   * Function CustomTooltip - Tooltip creation.
     * @param {boolean} active - The active value.
     * @param {array} payload - The payload value.  
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <>
                        {payload.map((pld, i) => (
                            <div key={i} style={{
                                backgroundColor: '#FFFFFF', width: 40, padding: 0,
                                height: 25, fontFamily: 'Roboto', fontSize: 9,
                                textAlign: 'center',
                                color: '#000000', marginTop: 58
                            }}>
                                <div style={{ paddingTop: 7 }}>
                                    {pld.value} min</div>
                            </div>
                        ))}
                    </>
                </div>
            );
        }
        CustomTooltip.propTypes = {
            active: PropTypes.bool,
            payload: PropTypes.array
        }

        return null;
    };

    /**
   * Function renderLegend - Legend style.     
   */
    const renderLegend = () => {
        return (
            <div style={{
                fontFamily: 'Roboto', fontWeight: 500, fontSize: 15,
                color: '#FFFFFF', opacity: 0.5, marginLeft: '10%',
                marginTop: 30
            }}>
                <div>
                    Durée moyenne des<br /> sessions
                </div>
            </div>
        )
    }

    /**
     * Function dayOfWeek - 
     * @param {number} item - The item value.     
     */
    const dayOfWeek = (item) => {
        let weekTab = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return `${weekTab[item - 1]}`;
    }

    return (
        <div className='averageSessions'>
            <LineChart data={averageSessions}
                width={320}
                height={260}
                margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
                onMouseMove={(e) => {
                    if (e.isTooltipActive === true) {
                        let div = document.querySelector('.averageSessions')
                        let windowWidth = div.clientWidth
                        let mouseXpercentage = Math.round(
                            (e.activeCoordinate.x / windowWidth) * 100
                        )
                        div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) 
                        ${mouseXpercentage}%, rgba(175,0,0,1.5) 
                          ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                    }
                }}
            >
                <defs>
                    <linearGradient id="colorSessionLength" x1="0%" y1="0%" x2="70%" y2="0%">
                        <stop offset='0%' stopColor="#FFFFFF" stopOpacity={0.5} />
                        <stop offset='100%' stopColor="#FFFFFF" />
                    </linearGradient>
                </defs>

                <XAxis axisLine={false} tickLine={false}
                    domain={['dataMin + 1', 'dataMax']}
                    interval={0}
                    tickMargin={20}
                    dataKey='_day'
                    tick={{
                        fill: '#FFFFFF', fontFamily: 'Roboto'
                        , fontSize: 14, opacity: 0.5
                    }}
                    tickFormatter={dayOfWeek}
                    style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}
                />

                <YAxis
                    tickLine={false}
                    axisLine={false}
                    orientation='right'
                    tooltipShow={false}
                    tick={false}
                    domain={['dataMin - 10', 'dataMax + 50']}
                />

                <Tooltip
                    active={true}
                    content={<CustomTooltip />}
                    wrapperStyle={{ outline: 'none', visibility: 'visible' }}
                />
                <Line dataKey='_sessionLength'
                    dot={false}
                    activeDot={{
                        fill: '#FFFFFF', className: 'activeDot',
                        strokeWidth: 2,
                        opacity: 0.9,
                        r: 4,
                        strokeDasharray: ''
                    }}
                    stroke='url(#colorSessionLength)'
                    type='natural'
                />

                <Legend content={renderLegend}
                    verticalAlign='top' align='left'
                />
            </LineChart>
        </div>
    )
}

SessionDuration.propTypes = {
    average: PropTypes.object
};

export default SessionDuration