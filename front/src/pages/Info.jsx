import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import commonStyles from './commonStyles.jsx';
import Chart from './Info_pages/Info.jsx';
import Stock from './Info_pages/Stock.jsx';
import Detail from './Info_pages/Detail.jsx'
import Order from './Info_pages/Order.jsx';
import orderData from './Info_pages/components/orderdata.jsx';

const styles = {
  container: {
    ...commonStyles.container,
  },
  chart: {
    flex: 1,
  },
  mystock: {
    top: '610px',
    position: 'absolute',
  },
  present: {
    position: 'absolute',
    top: '610px',
    left: '800px',
  },
  order: {
    left: '50'
  },
};

function Info() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.chart}>
          <Chart />
        </div>
        <div style={styles.mystock}>
          <Stock />
        </div>
        <div style={styles.present}>
          <Detail />
        </div>
        <div style={styles.order}>
          <Order orderData={orderData} />
        </div>
      </div>
    </div>
  );
}

export default Info;