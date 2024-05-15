import React from 'react';
import NaverImage from '../../images/ent/naver.png';
import LineChart from './components/linechart.jsx';
import './components/chartstyle.css';

const styles = {
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },

  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  titleContainer: {
    display: 'flex',
    marginBottom: '5px',
  },

  image: {
    width: '50px',
    height: '50px',
    marginTop: '5px',
    marginRight: '10px',
  },
  
  contentContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  won: {
    fontSize: '18px',
  },

  percent: {
    fontSize: '16px',
    marginLeft: '10px',
  },

  lineContainer: {
    width: '100%',
    marginTop: '20px',
  },

  period: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
};

const Chart = () => {
  const percentValue = +2800; // 임시

  return (
    <div style={styles.chartContainer}>
      <div style={styles.topContainer}>
        <div style={styles.titleContainer}>
          <img src={NaverImage} alt="Naver" style={styles.image}/>
          <h2 style={styles.title}>NAVER</h2>
        </div>
        <div style={styles.contentContainer}>
          <h2 style={styles.won}>22,000 USD</h2>
          <p style={{ ...styles.percent, color: percentValue >= 0 ? 'green' : 'red' }}>
            {percentValue >= 0 ? '+' : ''}{percentValue} USD ({((percentValue / 22000) * 100).toFixed(1)}%)
          </p>
        </div>
      </div>
      <div style={styles.lineContainer}>
        <LineChart />
        <div style={styles.period}>
          <small className="small">1일</small>
          <small className="small">1주일</small>
          <small className="small">1개월</small>
          <small className="small">3개월</small>
          <small className="small">1년</small>
          <small className="small">3년</small>
        </div>
      </div>
    </div>
  );
}

export default Chart;
