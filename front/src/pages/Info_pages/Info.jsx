import React from 'react';
import NaverImage from '../../images/ent/naver.png';
import LineChart from './components/linechart.jsx';
import './components/chartstyle.css';

const styles = {
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '640px',
    height: '230px',
  },

  titleContainer: {
    display: 'flex',
    marginBottom: '5px',
  },

  image: {
    width: '60px',
    height: '60px',
    marginRight: '10px',
  },

  title: {
    marginTop: '10px',
  },

  contentContainer: {
    alignItems: 'center',
    marginLeft: '70px', 
    marginTop: '-28px',
  },

  percent: {
    marginTop: '-20px',
    color: 'blue',
  },

  lineContainer: {
    marginLeft: '255px',
    marginTop: '-150px',
    width: '450px',
  },

  period: {
    marginLeft: '60px',
    marginTop: '-5px',
    marginRight: '100px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  
};

const Chart = () => {
  return (
    <div style={styles.chartContainer}>
      <div style={styles.titleContainer}>
        <img src={NaverImage} alt="Naver" style={styles.image}/>
        <h2 style={styles.title}>NAVER</h2>
      </div>
      <div style={styles.contentContainer}>
        <h2 style={styles.won}>22,000 ￦</h2>
        <p style={styles.percent}>+2,800 (14.5%)</p>
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