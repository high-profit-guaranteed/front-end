import React from 'react';
import Navbar from '../components/Navbar.jsx';

import chartImage from '../images/del/chart.png';
import circlegraphImage from '../images/del/circlegraph.jpg';
import news1Image from '../images/del/news1.jpg';
import news2Image from '../images/del/news2.jpg';

const styles = {
  homeContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '30px',
    marginLeft: '150px',
    marginRight: '150px',
  },
  imageContainer: {
    backgroundColor: '#f0f0f0',
    padding: '1px',
    borderRadius: '5px'
  },
  image: {
    marginTop: '10px',

    width: '250px',
    height: '150px'
  }
};

function Home() {
  return (
    <div>
      <Navbar />
      <br/><br/>
      {/* <h1>HOME</h1> */}

      <div style={styles.homeContainer}>

        <div style={styles.imageContainer}>
          <img src={chartImage} alt="chart" style={styles.image} />
          <p>총 자산 평균</p>
        </div>

        <div style={styles.imageContainer}>
          <img src={circlegraphImage} alt="graph" style={styles.image} />
          <p>보유종목 포트폴리오</p>
        </div>

        <div style={styles.imageContainer}>
          <img src={news1Image} alt="news1" style={styles.image} />
          <p>보유종목 뉴스</p>
        </div>

        <div style={styles.imageContainer}>
          <img src={news2Image} alt="news2" style={styles.image} />
          <p>관심종목 뉴스</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
