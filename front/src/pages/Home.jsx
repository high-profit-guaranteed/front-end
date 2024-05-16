import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import Chart from 'chart.js/auto';
import ScrollbarStyles from '../components/ScrollbarStyles.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "210px",
    marginRight: "1%",
    marginTop: "21px",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#F3F3F3",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    justifyContent: "space-between",
  },
  leftsection: {
    width: "60%",
    padding: "10px",
    borderRadius: "8px",
    marginRight: "2%",
    display: "flex",
    flexDirection: "column",
    gap: "20px", // 각 섹션 사이의 간격
  },
  rightsection: {
    width: "38%",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  // leftsection
  // leftsection - up
  // 총 자산 현황
  card: {
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  timeButton: {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#EFEFEF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },

  // leftsection - down
  // 판매 수익, 보유종목 포트폴리오
  sectionsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px", // 내부 섹션 사이의 간격
  },
  // 판매 수익
  revenueSection: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // 보유종목 
  holdSection: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  holdSectionItem: {
    padding: '5px 10px',
    margin: '5px 0',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    borderRadius: '5px',
    textAlign: 'center',
  },
  // 보유종목 포트폴리오
  portfolioSection: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },

  // rightsection
  // 대기주문
  pendingOrders: {
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  develop:{
    color: '#808080',
  },

  // 관심주문
  favoriteOrders: {
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginBottom: '10px',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "rgba(242, 246, 239, 1)",
    borderRadius: "8px",
  },
  percentage: {
    fontWeight: "bold",
    marginLeft: "10px",
  },
  upArrow: {
    color: "red",
    marginRight: "5px",
  },
  downArrow: {
    color: "blue",
    marginRight: "5px",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#E0E0E0",
    color: "#000",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  // 보유종목 뉴스
  ownedStocksNews: {
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxHeight: '200px',
    overflowY: 'auto',
  },

  // 관심종목 뉴스
  favoriteStocksNews: {
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxHeight: '200px',
    overflowY: 'auto',
  },

  // 뉴스 스타일
  newsCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "rgba(242, 246, 239, 1)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    margin: "10px 0",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    marginBottom: "20px",
  },
  newsImage: {
    width: "80px",
    height: "80px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
  },
  newsText: {
    flex: 1,
    marginRight: "15px",
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

  const handleHoldingNewsClick = () => {
    navigate("/News/Holding_news");
  };

  const handleInterestNewsClick = () => {
    navigate("/News/Interest_news");
  };
  
  const [isLoading, setIsLoading] = useState(true);

  const chartRefCanvas = useRef(null);
  const revenueChartRefCanvas = useRef(null);

  const chartRef = useRef(null);
  const revenueChartRef = useRef(null);

  const [showGraph, setShowGraph] = useState(false);
  const [accountId, setAccountId] = useState(""); // 계좌 id

  const selectAccount = (id) => {
    setAccountId(id);
  };

  const getBalance = async (id) => {
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/balance?accountId=" + id
      );
      if (response.status === 200) {
        console.log(response.data.balance);
        let price = Number(
          response.data.balance.toString().replaceAll(",", "")
        );
        if (isNaN(price)) {
          setBalance("error");
        } else {
          setBalance(price.toLocaleString("ko-KR"));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getBalanceRecord = async (id) => {
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/balanceRecord?accountId=" + id
      );
      if (response.status === 200) {
        console.log(response.data);
        setBalanceRecord(response.data);
        setShowGraph(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getStocksEvaluationBalance = async (id) => {
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/stocksEvaluationBalance?accountId=" +
          id
      );
      if (response.status === 200) {
        console.log(response.data);
        setStockBalance(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 예시 금액과 변동율 (양수 또는 음수로 테스트 가능)
  const [balance, setBalance] = useState("0.0");
  const [stockBalance, setStockBalance] = useState([]);
  const [amountChange, setAmountChange] = useState(50000); // 숫자로 변동 금액 저장
  const [percentageChange, setPercentageChange] = useState(10); // 숫자로 변동율 저장

  const [balanceRecord, setBalanceRecord] = useState([]);

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

  // 보유 종목 예시 데이터
  const [holdOrders, setHoldOrders] = useState([
    { id: 1, name: 'TSLA' },
    { id: 2, name: 'AAPL' }
  ]);

   // 관심 종목 예시 데이터
  const [favoriteOrders, setFavoriteOrders] = useState([
    { id: 1, name: 'GOOG', percentage: '20.3%' },
    { id: 2, name: 'MSFT', percentage: '15.6%' }
  ]);

  // 관심 종목 추가, 변경
  const handleAddItem = () => {
    // 새로운 아이템 생성
    const newItem = {
      id: favoriteOrders.length + 1, // 간단한 ID 할당
      name: "새 종목", // 기본 이름, 실제로는 입력받을 수 있도록 해야 함
      percentage: "0.0%", // 기본 백분율
    };
    setFavoriteOrders([...favoriteOrders, newItem]);
  };

  const handleRemoveItem = (id) => {
    setFavoriteOrders(favoriteOrders.filter((item) => item.id !== id));
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  const [news, setNews] = useState([
    {
      id: 1,
      title: "뉴스 제목 1",
      content:
        "기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 1",
      imageUrl: "news-image-url-1.jpg",
    },
    {
      id: 2,
      title: "뉴스 제목 2",
      content:
        "기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 기사 내용 2",
      imageUrl: "news-image-url-2.jpg",
    },
  ]);

  // const fetchNews = async () => {
  //   try {
  //     const response = await fetch('https://your-api-url/news');
  //     const data = await response.json();
  //     setNews(data);
  //   } catch (error) {
  //     console.error("Failed to fetch news:", error);
  //   }
  // };

  useEffect(() => {
    // fetchNews();

    if (showGraph) {
      if (chartRefCanvas.current && revenueChartRefCanvas.current) {
        if (chartRef.current) chartRef.current.destroy();
        if (revenueChartRef.current) revenueChartRef.current.destroy();
        // 자산 현황 그래프 나중에 수정
        const ctx = chartRefCanvas.current.getContext("2d");
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
        const revenueCtx = revenueChartRefCanvas.current.getContext("2d");
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

        chartRef.current = myChart;
        revenueChartRef.current = revenueChart;
      }
    }
  }, [showGraph]);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axiosInstance.get("https://duckling-back.d-v.kro.kr/api/checkSession");
        if (response.status === 200) {
          if (response.data === "Success") {
            setIsLoading(false);
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkSession();
    if (isLoading) {
      return () => {
        return <p>Loading...</p>;
      };
    }

    // 세션 체크
  }, [isLoading, navigate]);

  useEffect(() => {
    if (accountId !== "") {
      getBalance(accountId);
      getBalanceRecord(accountId);
      getStocksEvaluationBalance(accountId);
    }
  }, [accountId]);

  useEffect(() => {
    if (chartRefCanvas.current) {
      if (chartRef.current) chartRef.current.destroy();

      const nowMonth = new Date().getMonth() + 1;
      const nowYear = new Date().getFullYear();
      const nowDate = new Date().getDate();
      const startDate = 1;
      const endDate = new Date(nowYear, nowMonth, 0).getDate();
      const dateList = [];
      for (let i = startDate; i <= endDate; i++) {
        dateList.push(`${nowYear}-${nowMonth}-${i}`);
      }

      balanceRecord.forEach((record) => {
        console.log(record.recordDate, record.balance);
      });

      const balanceList = [];
      for (let i = startDate; i <= endDate; i++) {
        if (i > nowDate) {
          balanceList.push(null);
        }
        let found = false;
        for (let j = 0; j < balanceRecord.length; j++) {
          const recordDate = balanceRecord[j].recordDate.split(":");
          if (
            parseInt(recordDate[0]) === nowYear &&
            parseInt(recordDate[1]) === nowMonth &&
            parseInt(recordDate[2]) === i
          ) {
            balanceList.push(100000 + balanceRecord[j].balance);
            found = true;
            break;
          }
        }
        if (!found) {
          if (balanceList.length === 0) {
            balanceList.push(100000);
          } else {
            balanceList.push(balanceList[balanceList.length - 1]);
          }
        }
      }

      // 자산 현황 그래프 나중에 수정
      const ctx = chartRefCanvas.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dateList,
          datasets: [
            {
              label: "총 자산 현황 ($)",
              data: balanceList,
              fill: true,
              borderColor: "rgba(100, 120, 50)",
              tension: 0.3,
            },
          ],
        },
        options: {
          fill: true,
        },
      });

      chartRef.current = myChart;
    }
  }, [balanceRecord]);

  useEffect(() => {
    if (revenueChartRefCanvas.current) {
      if (revenueChartRef.current) revenueChartRef.current.destroy();

      let nameList = [];
      let valueList = [];
      stockBalance.forEach((stock) => {
        nameList.push(stock.name+"("+stock.ticker+")");
        valueList.push(parseInt(stock.amount) * parseFloat(stock.price));
      });
      // 판매내역 비율 그래프 나중에 수정
      const revenueCtx = revenueChartRefCanvas.current.getContext("2d");
      const revenueChart = new Chart(revenueCtx, {
        type: "doughnut",
        data: {
          labels: nameList,
          datasets: [
            {
              label: "평가금액($)",
              data: valueList,
              backgroundColor: "rgba(242, 246, 239, 0.7)",
              borderColor: "rgba(100, 120, 50, 1)",
              borderWidth: 0.5,
            },
          ],
        },
      });

      revenueChartRef.current = revenueChart;
    }
  }, [stockBalance]);

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.leftsection}>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2 style={styles.cardTitle}>총 자산 현황</h2>
              <span style={{ fontSize: '22px', fontWeight: 'bold' }}>{totalAmount}</span>
              <span style={{ fontSize: '16px', color: amountChange >= 0 ? 'green' : 'red', marginLeft: '10px' }}>
                {displayAmountChange} ({displayPercentageChange})
              </span>
            </div>
            <div>
              <button style={styles.timeButton}>1h</button>
              <button style={styles.timeButton}>24h</button>
              <button style={styles.timeButton}>1 Week</button>
              <button style={styles.timeButton}>1 Month</button>
              <button style={styles.timeButton}>1 Year</button>
              <button style={styles.timeButton}>All time</button>
            </div>
          </div>
          <canvas ref={chartRefCanvas}></canvas>
        </div>
          <div style={styles.sectionsContainer}>
            <div style={styles.revenueSection}>
              <div style={{ display: 'flex',  alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                  <h2 style={styles.sectionTitle}>판매 수익</h2>
                  <select
                    value={selectedDay}
                    onChange={handleDayChange}
                    style={{ padding: '5px 10px', border: '2px solid #ccc', borderRadius: '4px'}}>
                    {Object.keys(salesData).map((day) => (
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
            <div style={styles.holdSection}>
              <h2 style={styles.sectionTitle}>보유 종목</h2>
              <div style={styles.sectionContent}>
                {/* 배열에 하나 이상의 보유 종목이 있는지 확인 */}
                {holdOrders.length > 0 ? (
                  holdOrders.map((order, index) => (
                    <Link to={`/detail/${order.name.toLowerCase()}`}>
                      <div key={index} style={styles.holdSectionItem}>
                        {order.name}
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>보유 종목이 없습니다.</p>
                )}
              </div>
            </div>
            <div style={styles.portfolioSection}>
              <h2 style={styles.sectionTitle}>보유 종목 포트폴리오</h2>
              <div style={styles.sectionContent}>
                <canvas
                  ref={revenueChartRefCanvas}
                  style={styles.canvas}
                ></canvas>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.rightsection}>
          <div style={styles.pendingOrders}>
            <h2>대기 주문</h2>
            <p style={styles.develop}>추후 개발 예정입니다</p>
          </div>

          <div style={styles.favoriteOrders}>
            <h2>관심 주문</h2>
            {favoriteOrders.map((item, index) => (
              <div key={index} style={styles.item}>
                <span>{item.name}</span>
                <span
                  style={
                    item.percentage.startsWith("-")
                      ? { color: "blue" }
                      : { color: "red" }
                  }
                >
                  {item.percentage.startsWith("-") ? (
                    <span style={styles.downArrow}>↓</span>
                  ) : (
                    <span style={styles.upArrow}>↑</span>
                  )}
                  {item.percentage}
                </span>
                <button onClick={() => handleRemoveItem(item.id)}>
                  delete
                </button>
              </div>
            ))}
            <div style={styles.addButton} onClick={handleAddItem}>
              +
            </div>
          </div>

          <div style={styles.ownedStocksNews}>
            <h2
              style={{ ...styles.sectionHeader, cursor: "pointer" }}
              onClick={handleHoldingNewsClick}
            >
              보유종목 뉴스
            </h2>
            {news.map((item) => (
              <div key={item.id} style={styles.newsCard}>
                <div style={styles.newsText}>
                  <h3 style={styles.newsTitle}>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
                <div style={styles.newsImage}></div>
              </div>
            ))}
          </div>

          <div style={styles.favoriteStocksNews}>
            <h2
              style={{ ...styles.sectionHeader, cursor: "pointer" }}
              onClick={handleInterestNewsClick}
            >
              관심종목 뉴스
            </h2>
            {news.map((item) => (
              <div key={item.id} style={styles.newsCard}>
                <div style={styles.newsText}>
                  <h3 style={styles.newsTitle}>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
                <div style={styles.newsImage}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;