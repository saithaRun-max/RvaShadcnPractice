import React from 'react'
import LagnaChart from './LagnaChart';

const LagnaChartTopup = () => {
     const chartData = {
    1: ["Asc", "Sun"],
    2: ["Moon"],
    5: ["Mars"],
    7: ["Jupiter", "Venus"],
  };
  return (
    <div>
    <LagnaChart data={chartData}/>
    </div>
  )
}

export default LagnaChartTopup
