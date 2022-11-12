import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'


function Performance({ performance }) {
    const performanceKind = performance._kind;
    const performanceData = performance._data;

    if (performanceData) {
        performanceData.forEach(item => {
            if (performanceKind) {
                if (item.kind === 1) {
                    item.kind = 'Cardio';
                } else if (item.kind === 2) {
                    item.kind = 'Energie';
                } else if (item.kind === 3) {
                    item.kind = 'Endurance';
                } else if (item.kind === 4) {
                    item.kind = 'Force';
                } else if (item.kind === 5) {
                    item.kind = 'Vitesse';
                } else if (item.kind === 6) {
                    item.kind = 'Intensité';
                }
                // }
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
                    polarRadius={[10, 20, 40, 58, 75]}
                />

                <PolarAngleAxis dataKey="kind"
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

                <Radar dataKey="value" fill="#FF0101"
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