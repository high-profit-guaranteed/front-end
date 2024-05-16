import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'candlestick',
        toolbar: { show: false },
        height:380
      },
      series: [{
        data: [{
          x: new Date(2024, 5, 10),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2024, 5, 11),
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: new Date(2024, 5, 12),
          y: [52.76, 57.35, 52.15, 57.03]
        }]
      }],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
        categories: ["1660004640", "1660091040", "1660177440"],
        type: "datetime",
      },
        plotOptions: {
            candlestick: {
            colors: {
                upward: '#3C90EB',
                downward: '#DF7D46'
            }
            }
        }
    };

    
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef} />;
};

export default LineChart;