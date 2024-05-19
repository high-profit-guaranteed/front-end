import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Topbar from "../components/Topbar.jsx";
import Chart from "./Detail_page/Info.jsx";
import Stock from "./Detail_page/Stock.jsx";
import StockInfo from "./Detail_page/Detail.jsx";
import Order from "./Detail_page/Order.jsx";
import orderData from "./Detail_page/components/orderdata.jsx";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "210px",
    marginRight: "1%",
    marginTop: "21px",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#F3F3F3",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftsection: {
    width: "57%",
    padding: "10px",
    borderRadius: "8px",
    marginRight: "2%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightsection: {
    width: "38%",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  leftsectionDown: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
  },
  title: {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '0 20px',
    width: '30%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  chart: {
    width: "100%",
  },
  stock: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
  },
  detail: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
  },
  order: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};

function Detail({ tickerData }) {
  const { ticker } = useParams();
  console.log("ticker", ticker);

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.leftsection}>
          <div style={styles.title}>
            <h2>종목 상세</h2>
          </div>
          <div style={styles.chart}>
            <Chart />
          </div>
          <div style={styles.leftsectionDown}>
            <div style={styles.stock}>
              <Stock />
            </div>
            <div style={styles.detail}>
              <StockInfo tickerData={tickerData} />
            </div>
          </div>
        </div>
        <div style={styles.rightsection}>
          <div style={styles.order}>
            <Order orderData={orderData} ticker={ticker} currentPrice={101.8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
