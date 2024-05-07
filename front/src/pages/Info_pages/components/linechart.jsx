import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = () => {
  const data = [
    {
      id: 'series1',
      data: [
        { x: 0, y: 5 },
        { x: 1, y: 7 },
        { x: 2, y: 8 },
        { x: 3, y: 6 },
        { x: 4, y: 9 },
      ],
    },
  ];

  return (
    <div style={{ height: '250px', width: '100%'}}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
      />
    </div>
  );
};

export default LineChart;