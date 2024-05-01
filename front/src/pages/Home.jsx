import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import Chart from 'chart.js/auto';

const styles = {
  container: {
    display: 'grid',
    marginLeft: '250px',
    marginRight: '30%',
    marginTop: '80px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f2f6ef',
    borderRadius: '10px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  sectionContent: {
    marginLeft: '0%',
    marginRight: '0.1%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '25px',
  }
};

function Home() {
  const chartRef = useRef(null);
  const [showGraph, setShowGraph] = useState(true);

  // 그래프는 수정
  useEffect(() => {
    if (showGraph) {
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: '총 판매 주식',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {}
      });
      return () => {
        myChart.destroy();
      };
    }
  }, [showGraph]);

  const handleButtonClick = () => {
    setShowGraph(!showGraph);
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>자산 현황</h2>
          <div style={styles.sectionContent}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
      <div style={styles.container}>
      <div style={styles.section}>
          <h2 style={styles.sectionTitle}>매출액</h2>
          <div style={styles.sectionContent}>
            <p>매출액 내용</p>
          </div>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>대기 주문</h2>
          <div style={styles.sectionContent}>
            <p>대기 주문 내용</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
