import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';

const styles = {
  homeContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '30px',
    marginLeft: '200px',
    marginRight: '20px',
  },
  imageContainer: {
    backgroundColor: '#f0f0f0',
    padding: '1px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black'
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
      <Topbar />
      <br/><br/>

      <div style={styles.homeContainer}>

        <Link to="/Total_assets" style={styles.imageContainer}>
          <p>총 자산 평균</p>
        </Link>

        <Link to="/Portfolio" style={styles.imageContainer}>
          <p>보유종목 포트폴리오</p>
        </Link>

        <Link to="/Holding_news" style={styles.imageContainer}>
          <p>보유종목 뉴스</p>
        </Link>

        <Link to="/interest_news" style={styles.imageContainer}>
          <p>관심종목 뉴스</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
