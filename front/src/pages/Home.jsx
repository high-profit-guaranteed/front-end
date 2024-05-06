import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Topbar from "../components/Topbar.jsx";
import Chart from "chart.js/auto";
import axios from "axios";
import  { Redirect } from 'react-router-dom'

const styles = {
  container: {
    display: "flex",
    marginLeft: "210px",
    marginRight: "1%",
    marginTop: "21px",
    marginBottom: "15px",
    padding: "20px",
    backgroundColor: "#F3F3F3",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    alignItems: "flex-start",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginRight: "20px",
    flex: "4 1 250px", // flex-grow, flex-shrink, flex-basis
    minHeight: "250px", // 최소 높이 설정
  },
  sectionsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "2 1 100px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px", // 섹션 사이의 간격
    minHeight: "200px", // 최소 높이 설정
    flex: "2 1 470px",
  },
  revenueSection: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    minHeight: "200px",
    flex: "2 1 50px",
  },
  sectionContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1px",
    height: "400px",
    width: "100%",
  },
  canvas: {
    height: "150px",
    width: "150px",
  },
};

async function Home() {
  const chartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const [showGraph, setShowGraph] = useState(true);

  // 예시 금액과 변동율 (양수 또는 음수로 테스트 가능)
  const [totalAmount, setTotalAmount] = useState("500,000 USD");
  const [amountChange, setAmountChange] = useState(50000); // 숫자로 변동 금액 저장
  const [percentageChange, setPercentageChange] = useState(10); // 숫자로 변동율 저장

  // UI에서 표시할 문자열 (+, -)
  const displayAmountChange = `${
    amountChange >= 0 ? "+" : ""
  }${amountChange.toLocaleString()} USD`;
  const displayPercentageChange = `${
    percentageChange >= 0 ? "+" : ""
  }${percentageChange}%`;

  // 판매수익 요일 설정
  const [selectedDay, setSelectedDay] = useState("Monday");
  const salesData = {
    Monday: { revenue: "100,000", change: 0 },
    Tuesday: { revenue: "150,000", change: 50 },
    Wednesday: { revenue: "120,000", change: -20 },
    Thursday: { revenue: "130,000", change: 10 },
    Friday: { revenue: "180,000", change: 50 },
    Saturday: { revenue: "200,000", change: 20 },
    Sunday: { revenue: "90,000", change: -110 },
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  useEffect(() => {
    if (showGraph) {
      // 자산 현황 그래프 나중에 수정
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "총 판매 주식",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgba(100, 120, 50)",
              tension: 0.1,
            },
          ],
        },
        options: {},
      });

      // 판매내역 비율 그래프 나중에 수정
      const revenueCtx = revenueChartRef.current.getContext("2d");
      const revenueChart = new Chart(revenueCtx, {
        type: "doughnut",
        data: {
          labels: ["USD", "KRW", "APPLE", "TSLA"],
          datasets: [
            {
              label: "판매내역 비율",
              data: [120, 190, 300, 250],
              backgroundColor: "rgba(242, 246, 239, 0.7)",
              borderColor: "rgba(100, 120, 50, 1)",
              borderWidth: 0.5,
            },
          ],
        },
      });

      return () => {
        myChart.destroy();
        revenueChart.destroy();
      };
    }
  }, [showGraph]);

  const axios1 = axios.create({
    baseURL: "http://duckling-back.d-v.kro.kr",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
      'Access-Control-Allow-Credentials':"true",
    },
  });

  const res = await axios1.post("http://duckling-back.d-v.kro.kr/api/checkSession");
  if (res.status === 200) {
    return (
      <div>
        <Navbar />
        <Topbar />
        <div style={styles.container}>
          <div style={styles.card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 style={styles.cardTitle}>총 자산 현황</h2>
              <div>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {totalAmount}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: amountChange >= 0 ? "green" : "red",
                    marginLeft: "10px",
                  }}
                >
                  {displayAmountChange} ({displayPercentageChange})
                </span>
              </div>
            </div>
            <canvas ref={chartRef}></canvas>
          </div>
          <div style={styles.sectionsContainer}>
            <div style={styles.revenueSection}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h2 style={styles.sectionTitle}>판매수익</h2>
                  <select
                    value={selectedDay}
                    onChange={handleDayChange}
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      border: "2px solid #ccc",
                      borderRadius: "4px",
                    }}
                  >
                    {Object.keys(salesData).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={styles.sectionContent}>
                <p>
                  {salesData[selectedDay].revenue}USD (
                  {formatChange(salesData[selectedDay].change)})
                </p>
              </div>
            </div>
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>판매 내역</h2>
              <div style={styles.sectionContent}>
                <canvas ref={revenueChartRef} style={styles.canvas}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return ( <Redirect to='/' /> );
  }
}

export default Home;
