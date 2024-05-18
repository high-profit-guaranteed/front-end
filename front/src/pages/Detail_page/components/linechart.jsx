import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const LineChart = ({ ticker, term }) => {
  const chartRefCanvas = useRef(null);
  const chartRef = useRef(null);

  const [interval, setInterval] = useState(['TIME_SERIES_INTRADAY', '&interval=5min']);

  useEffect(() => {
    if (term === "day" && interval[0] !== 'TIME_SERIES_INTRADAY') {
      setInterval(['TIME_SERIES_INTRADAY', '&interval=5min']);
    }
    if (term === "week" && interval[0] !== 'TIME_SERIES_DAILY_ADJUSTED') {
      setInterval(['TIME_SERIES_DAILY_ADJUSTED', '']);
    }
    if (term === "month" && interval[0] !== 'TIME_SERIES_DAILY_ADJUSTED') {
      setInterval(['TIME_SERIES_DAILY_ADJUSTED', '']);
    }
    if (term === "3month" && interval[0] !== 'TIME_SERIES_DAILY_ADJUSTED') {
      setInterval(['TIME_SERIES_DAILY_ADJUSTED', '']);
    }
    if (term === "year" && interval[0] !== 'TIME_SERIES_DAILY_ADJUSTED') {
      setInterval(['TIME_SERIES_DAILY_ADJUSTED', '']);
    }
    if (term === "3year" && interval[0] !== 'TIME_SERIES_DAILY_ADJUSTED') {
      setInterval(['TIME_SERIES_DAILY_ADJUSTED', '']);
    }
  }, [term, interval]);

  useEffect(() => {
    if (chartRefCanvas.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      async function drawChart() {
        const getStockData = async () => {
          // console.log(API_KEY);
          let data = [];
          const url = `https://www.alphavantage.co/query?function=${interval[0]}&symbol=${ticker}${interval[1]}&entitlement=delayed&apikey=${API_KEY}`;
          const response = await axios.get(url);

          console.log(response.data);
          const resObjs = Object.entries(response.data[Object.keys(response.data)[1]]);
          resObjs.forEach((resObj) => {
            const key = resObj[0];
            const value = resObj[1];
            data.push({
              x: new Date(key),
              y: [
                parseFloat(value["1. open"]),
                parseFloat(value["2. high"]),
                parseFloat(value["3. low"]),
                parseFloat(value["4. close"]),
              ],
            });
          });
          return data;
        };

        const data = await getStockData();
        console.log(data);
        const options = {
          chart: {
            type: "candlestick",
            toolbar: { show: false },
            height: 380,
          },
          series: [
            {
              // data: [
              //   {
              //     x: new Date(2024, 5, 9),
              //     y: [53.66, 54.99, 51.35, 52.95],
              //   },
              //   {
              //     x: new Date(2024, 5, 10),
              //     y: [51.98, 56.29, 51.59, 53.85],
              //   },
              //   {
              //     x: new Date(2024, 5, 11),
              //     y: [53.66, 54.99, 51.35, 52.95],
              //   },
              //   {
              //     x: new Date(2024, 5, 12),
              //     y: [52.76, 57.35, 52.15, 57.03],
              //   },
              // ],
              data: data,
            },
          ],
          xaxis: {
            labels: { show: true },
            axisTicks: { show: false },
            axisBorder: { show: false },
            categories: ["1660004640", "1660091040", "1660177440"],
            type: "datetime",
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#3C90EB",
                downward: "#DF7D46",
              },
            },
          },
          tooltip: {
            x: {
              format: "HH:mm"
            }
          },
        };

        const chart = new ApexCharts(chartRefCanvas.current, options);
        await chart.render();

        chartRef.current = chart;
      }
      drawChart();
    }
  }, [ticker, interval]);

  return <div id="chart" ref={chartRefCanvas} />;
};

export default LineChart;
