import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import commonStyles from './commonStyles.jsx';
import Chart from './Info_page/Info.jsx';
import Stock from './Info_page/Stock.jsx';
import Detail from './Info_page/Detail.jsx';
import Order from './Info_page/Order.jsx';
import orderData from './Info_page/components/orderdata.jsx';

const styles = {
  container: {
    ...commonStyles.container,
  },
  leftsection: {
    width: '57%',
    padding: '10px',
    borderRadius: '8px',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  rightsection: {
    width: '38%',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  leftsectionDown: { //stock, detail
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '10px',
   },
  chart: { },
  stock: { 
    flex: 0.48,
    marginBottom:'40px',
    '@media (min-width: 768px)': {
      flex: '0.48', // 화면 크기 768px 이상 - 너비 조절
    }
  },
  detail: {
    flex: 0.48,
    marginBottom:'40px',
    '@media (min-width: 768px)': {
      flex: '0.48', // 화면 크기 768px 이상 - 너비 조절
    }
  },
  order: {
    marginTop:'20px',
    marginBottom:'20px',
  },
};

function Info() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.leftsection}>
          <div style={styles.chart}>
            <Chart />
          </div>
          <div style={styles.leftsectionDown}>
            <div style={styles.stock}>
              <Stock />
            </div>
            <div style={styles.detail}>
              <Detail />
            </div>
          </div>
        </div>
        <div style={styles.rightsection}>
          <div style={styles.order}>
            <Order orderData={orderData} currentPrice={101.80} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
