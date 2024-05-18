import React, { useEffect } from "react";
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
    //stock, detail
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px",
  },
  chart: {},
  stock: {
    flex: 0.48,
    marginBottom: "40px",
    "@media (min-width: 768px)": {
      flex: "0.48", // 화면 크기 768px 이상 - 너비 조절
    },
  },
  detail: {
    flex: 0.48,
    marginBottom: "40px",
    "@media (min-width: 768px)": {
      flex: "0.48", // 화면 크기 768px 이상 - 너비 조절
    },
  },
  order: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};

function Detail({ tickerData }) {
  const ticker = useParams();
  console.log("ticker", ticker);

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
              <StockInfo tickerData={tickerData} />
            </div>
          </div>
        </div>
        <div style={styles.rightsection}>
          <div style={styles.order}>
            <Order orderData={orderData} currentPrice={101.8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
