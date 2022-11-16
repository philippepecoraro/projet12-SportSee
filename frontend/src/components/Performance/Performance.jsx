import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Function Performance - RadarChart creation.
 * @param {object} performance - The performance value. 
 * @param {object[]} performance._data - The data array.
 * @param {object} performance._kind - The kind values.
 * @param {number} performance._userId - The userId value.
 * 
 */
function Performance({ performance }) {
    const performanceKind = performance._kind;
    const performanceData = performance._data;

    if (performanceData) {
        performanceData.forEach(item => {
            if (performanceKind) {
                if (item._kind === 1) {
                    item._kind = 'Cardio';
                } else if (item._kind === 2) {
                    item._kind = 'Energie';
                } else if (item._kind === 3) {
                    item._kind = 'Endurance';
                } else if (item._kind === 4) {
                    item._kind = 'Force';
                } else if (item._kind === 5) {
                    item._kind = 'Vitesse';
                } else if (item._kind === 6) {
                    item._kind = 'Intensité';
                }
            }
        })
    }

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <RadarChart
                outerRadius='70%'
                innerRadius='10%'
                data={performanceData}
                style={{ background: '#282D30' }}
                startAngle={390}
                endAngle={30}
            >

                <PolarGrid
                    radialLines={false}
                    polarRadius={[12, 30, 50, 70, 86]}
                />

                <PolarAngleAxis dataKey="_kind"
                    tick={{
                        fontFamily: 'Roboto', fontSize: 12,
                        fill: '#FFFFFF'
                    }}
                    axisLine={false}
                    width={30}
                    tickLine={false}
                />

                <PolarRadiusAxis
                    tickCount={5}
                    tick={false}
                    axisLine={false}
                    tickLine={false}
                />

                <Radar dataKey="_value" fill="#FF0101"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
}

Performance.propTypes = {
    performance: PropTypes.object
};

export default Performance