import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import Chart from 'chart.js/auto';
import ScrollbarStyles from'../components/ScrollbarStyles.css';
import { useNavigate } from "react-router-dom";

import axios from "axios";

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1.7fr 1fr',
    marginLeft: '210px',
    marginRight: '1%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    alignItems: 'flex-start' 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    minHeight: '250px',  // 최소 높이 설정
    flex: '3 1 auto',
  },
  // 대기주문, 관심종목
  stockSection: { 
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
    marginBottom: '20px',
    flex: '2 1 10px',
  },
  // 대기주문
  stockSection1: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    minHeight: '200px',
    flex: '2 1 120px',
  },
  // 관심종목
  stockSection2: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minHeight: '200px',
    flex: '2 1 120px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto' // 세로 스크롤 추가
  },
  stockBox: {
    width: '70%',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '10px',
  },
  addButton: {
    width: '50px',
    height: '50px',
    backgroundColor: '#f3f3f3',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'Black',
    fontSize: '30px',
    cursor: 'pointer',
    alignSelf: 'center',
    marginTop: '10px'
  },
  // 판매 수익, 포트폴리오 
  sectionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '2 1 200px',
    marginTop: '-450px',
  },
  // 판매 수익 
  revenueSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginRight: '20px',
    marginBottom: '20px',
    minHeight: '100px',
    minWidth: '240px'  // 최소 가로 길이 설정
  },
  // 보유종목 포트폴리오
  section: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px',  // 섹션 사이의 간격
    minHeight: '200px',   // 최소 높이 설정
    flex: '2 1 470px',  // flex-basis를 줄여 가로 길이 감소
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    height: '300px', 
    width: '100%'
  },
  newsSection: {
    display: 'grid',
    flexDirection: 'row',
    flex: '2 1 200px',
  },
  // 보유종목 뉴스
  newsSection1: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minHeight: '200px',
    flex: '2 1 120px',
    overflowY: 'auto' // 세로 스크롤 추가
  },
  // 관심종목 뉴스
  newsSection2: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minHeight: '200px',
    flex: '2 1 120px',
    overflowY: 'auto' // 세로 스크롤 추가
  },
  newsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    marginBottom: '20px',
    minHeight: '100px',
    alignItems: 'center'
  },
  newsContent: {
    flex: '1 1 70%', 
    marginRight: '20px'
  },
  newsTitle: {
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  newsText: {
    fontSize: '14px',
    color: 'black',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',   //유연하게 배치 가능
    WebkitLineClamp: '3', 
    WebkitBoxOrient: 'vertical'
  },
  newsImageContainer: {
    backgroundColor: 'white',
    borderRadius: '10px',
    flex: '1 1 30%', 
    height: '110px'
  },
  canvas: {
    height: '150px', 
    width: '150px'
  },
};

const axiosInstance = axios.create({
  baseURL: "https://duckling-back.d-v.kro.kr",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
    "Access-Control-Allow-Credentials": "true",
  },
});

function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const chartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const [showGraph, setShowGraph] = useState(false);

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

  // 관심 종목 예시 데이터
  const interestStocks = ['AAPL', 'TSLA', 'GOOGL', 'NAVER'];

  // 관심 종목 추가, 변경
  const handleAddStock = () => {
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  // 뉴스 데이터
  const [news, setNews] = useState([
    {
      id: 1,
      title: "뉴스 제목 1",
      content: "기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 1",
      imageUrl: "news-image-url-1.jpg"
    },
    {
      id: 2,
      title: "뉴스 제목 2",
      content: "기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 2",
      imageUrl: "news-image-url-2.jpg"
    }
  ]);

  useEffect(() => {

    const checkSession = async () => {
      try {
        const response = await axiosInstance.post("https://duckling-back.d-v.kro.kr/api/checkSession", "{}");
        if (response.status === 200) {
          if (response.data === "success") {
            setIsLoading(false);
            setShowGraph(true);
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    // 세션 체크
    checkSession();

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
      }, [showGraph]);
  
      return () => {
        myChart.destroy();
        revenueChart.destroy();
      };
    }
  });


  if (isLoading) {
    return <p>Loading...</p>;
  }

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
        <div style={styles.stockSection}>
          <div style={styles.stockSection1}>
            <h2>대기 주문</h2>
          </div>
          <div style={styles.stockSection2}>
            <h2>관심 종목</h2>
            {interestStocks.map((stock, index) => (
              <div key={index} style={styles.stockBox}>
                {stock}
              </div>
            ))}
            <div style={styles.addButton} onClick={handleAddStock}>+</div>
          </div>
          <div style={styles.newsSection1}>
            <h2>보유 종목 뉴스</h2>
            {news.map(item => (
              <div key={item.id} style={styles.newsBox}>
                <div style={styles.newsContent}>
                  <h3 style={styles.newsTitle}>{item.title}</h3>
                  <p style={styles.newsText}>{item.content}</p>
                </div>
                <div style={styles.newsImageContainer}>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.newsSection2}>
            <h2>관심 종목 뉴스</h2>
            {news.map(item => (
              <div key={item.id} style={styles.newsBox}>
                <div style={styles.newsContent}>
                  <h3 style={styles.newsTitle}>{item.title}</h3>
                  <p style={styles.newsText}>{item.content}</p>
                </div>
                <div style={styles.newsImageContainer}>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.sectionsContainer}>
          <div style={styles.revenueSection}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={styles.sectionTitle}>판매 수익</h2>
                <select
                  value={selectedDay}
                  onChange={handleDayChange}
                  style={{ marginLeft: '15px', padding: '5px 10px', border: '2px solid #ccc', borderRadius: '4px' }}>
                  {Object.keys(salesData).map(day => (
                    <option key={day} value={day}>{day}</option>
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
            <h2 style={styles.sectionTitle}>보유 종목 포트폴리오</h2>
            <div style={styles.sectionContent}>
              <canvas
                ref={revenueChartRef}
                style={styles.canvas}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
