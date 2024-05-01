import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';

const styles = {
  infoContainer: {
    display: 'grid',
    gap: '20px',
    marginTop: '30px',
    marginLeft: '200px',
    marginRight: '20px',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: '1px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black'
  },
};

function Info() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <br/><br/>

      <div style={styles.infoContainer}>

        <Link to="/Major_Indices" style={styles.infoBox}>
          <h2>주요지수</h2>
          <p>테슬라 29.32</p>
        </Link>

        <Link to="/RealTime_Status" style={styles.infoBox}>
          <h2>실시간현황</h2>
          <p>거래량 인기 급상승 급하락 관심</p>
        </Link>

        <Link to="/Popular_Categories" style={styles.infoBox}>
          <h2>인기 카테고리</h2>
          <p>삼성전자</p>
          <p>LG전자</p>
        </Link>

      </div>
    </div>
  );
}

export default Info;