import React, { useRef, useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar.jsx";
import Topbar from "../components/Topbar.jsx";
import Chart from "chart.js/auto";
import ScrollbarStyles from "../components/ScrollbarStyles.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// 수정 - 사진 추가 (뉴스)
import apple1 from "../images/news/apple1.png";
import tesla1 from "../images/news/tesla1.png";
import google1 from "../images/news/google1.png";
import microsoft1 from "../images/news/microsoft1.png";

// 수정 - 추가
import SComponent from "../components/SComponent";
import StockData from "../components/StockData";
import SComponent2 from "../components/SComponent2";

// 수정 - 관심종목 받아오기
import { HeartContext } from "./Detail_page/Heart.jsx";

// 관심종목 사진 추가
import Apple from "../images/ent/apple.png";
import Microsoft from "../images/ent/microsoft.png";
import Alphabet from "../images/ent/alphabet.png";
import Amazon from "../images/ent/amazon.png";
import Nvidia from "../images/ent/nvidia.png";
import Meta from "../images/ent/meta.png";
import Tesla from "../images/ent/tesla.png";
import Broadcom from "../images/ent/broadcom.png";
import Costco from "../images/ent/costco.png";
import Asml from "../images/ent/asml.png";

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
    margin: "0 5px",
    padding: "5px 10px",
    backgroundColor: "#EFEFEF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
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
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // 보유종목
  holdSection: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  holdSectionItem: {
    padding: "5px 10px",
    margin: "5px 0",
    backgroundColor: "rgba(242, 246, 239, 1)",
    borderRadius: "5px",
    textAlign: "center",
  },
  // 보유종목 포트폴리오
  portfolioSection: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },

  // rightsection
  // 대기주문
  pendingOrders: {
    backgroundColor: "#F9F9F9",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxHeight: "200px",
    overflowY: "auto",
  },
  develop: {
    color: "#808080",
  },

  // 관심주문
  favoriteOrders: {
    backgroundColor: "#F9F9F9",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginBottom: "10px",
    maxHeight: "230px",
    overflowY: "auto",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "rgba(242, 246, 239, 1)",
    borderRadius: "8px",
  },

  // 보유종목 뉴스
  ownedStocksNews: {
    backgroundColor: "#F9F9F9",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxHeight: "217px",
    overflowY: "auto",
  },

  // 관심종목 뉴스
  favoriteStocksNews: {
    backgroundColor: "#F9F9F9",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxHeight: "217px",
    overflowY: "auto",
  },

  // 뉴스 스타일
  newsItem: {
    display: "flex",
    marginBottom: "40px",
    width: "99%",
    height: "70%",
    border: "1px solid #DDD",
    overflow: "hidden",
    cursor: "pointer",
  },
  newsItemImage: {
    // width 수정
    width: "100%",
    height: "100%",
  },
  newsItemContent: {
    padding: "20px",
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  newsItemTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  newsItemMeta: {
    fontSize: "13px",
    color: "#666",
  },
  newsItemAuthor: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "7px",
  },

  //추후 업데이트 예정입니다
  develop: {
    color: "#808080",
    fontStyle: "italic",
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

function Home({ accountId, setAccountId }) {
  const navigate = useNavigate();

  const handleHoldingNewsClick = () => {
    navigate("/News/Holding_news");
  };
  const handleInterestNewsClick = () => {
    navigate("/News/Interest_news");
  };

  const chartRefCanvas = useRef(null);
  const revenueChartRefCanvas = useRef(null);

  const chartRef = useRef(null);
  const revenueChartRef = useRef(null);

  const [showGraph, setShowGraph] = useState(false);

  const getBalance = async (id) => {
    if (id === "o") return;
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/balance?accountId=" + id
      );
      if (response.status === 200) {
        let price = Number(
          response.data.balance.toString().replaceAll(",", "")
        );
        if (isNaN(price)) {
          setBalance("error");
        } else {
          setBalance(price.toLocaleString());
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 예시 금액과 변동율 (양수 또는 음수로 테스트 가능)
  const [balance, setBalance] = useState("계좌 정보가 없습니다.");
  const [stockBalance, setStockBalance] = useState([]);
  const [amountChange, setAmountChange] = useState(0); // 숫자로 변동 금액 저장
  const [percentageChange, setPercentageChange] = useState(0.0); // 숫자로 변동율 저장

  const [balanceRecord, setBalanceRecord] = useState([]);

  // UI에서 표시할 문자열 (+, -)
  const displayAmountChange = `${
    amountChange >= 0 ? "+" : "-"
  }${amountChange.toFixed(2)} USD`;
  const displayPercentageChange = `${
    percentageChange >= 0 ? "+" : "-"
  }${percentageChange.toFixed(2)}%`;

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

  // 수정 - 추가
  // 보유 종목 API 호출하기
  // const getHoldStocks = async (id) => {
  //   if (!id || id === "o") return;
  //   try {
  //     const response = await axiosInstance.get(
  //       `https://duckling-back.d-v.kro.kr/api/holdStocks?accountId=${id}`
  //     );
  //     if (response.status === 200) {
  //       setHoldStocks(response.data);
  //     } else {
  //       console.error("Error fetching hold stocks:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching hold stocks:", error);
  //   }
  // };

  // 보유 종목 상태 관리
  const [holdStocks, setHoldStocks] = useState([]);

  // 보유 종목 usdEffect로 데이터 불러오기
  // useEffect(() => {
  //   if (accountId !== "" && accountId !== "-1" && accountId !== "o") {
  //     getHoldStocks(accountId);
  //   }
  // }, [accountId]);

  // const { likedItems, toggleHeart } = useContext(HeartContext);
  // const initialFavoriteOrders = likedItems.map((item, index) => ({ id: index + 1, name: item, percentage: "10%" }));
  // const [favoriteOrders, setFavoriteOrders] = useState(initialFavoriteOrders);

  // 관심 종목 ticker
  const [favoriteStocks, setFavoriteStocks] = useState(
    ["AAPL", "TSLA", "AMZN", "META"].filter((ticker) => StockData[ticker])
  );

  // 판매 수익
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  // 총 자산 현황에서의 변화값
  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  // 수정 추가 - 보유종목 뉴스
  const holdingNews = [
    {
      title: "Shiny Apple? 3 Reasons to Buy and Hold AAPL Stock Forever.",
      date: "2024 May 16",
      imageUrl: apple1,
      newsUrl:
        "https://www.tradingview.com/news/investorplace:5f775ce51094b:0-shiny-apple-3-reasons-to-buy-and-hold-aapl-stock-forever/",
    },
    {
      title: "Should I buy Tesla shares?",
      date: "2024 May 17",
      imageUrl: tesla1,
      newsUrl:
        "https://www.thetimes.co.uk/money-mentor/investing/should-i-buy-tesla-shares",
    },
  ];

  // 수정 추가 - 관심종목 뉴스
  const interestNews = [
    {
      title:
        "Google surges after buying back billions of dollars of its own stock",
      date: "2024 April 25",
      imageUrl: google1,
      newsUrl:
        "https://edition.cnn.com/2024/04/25/tech/google-tech-earnings-dividend/index.html",
    },
    {
      title:
        "Microsoft Stock Outlook: Is MSFT a Millionaire-Maker AI Play to Make?",
      date: "2024 May 17",
      imageUrl: microsoft1,
      newsUrl:
        "https://www.tradingview.com/news/investorplace:40d8cf50a094b:0-microsoft-stock-outlook-is-msft-a-millionaire-maker-ai-play-to-make/",
    },
  ];

  // const fetchNews = async () => {
  //   try {
  //     const response = await fetch('https://your-api-url/news');
  //     const data = await response.json();
  //     setNews(data);
  //   } catch (error) {
  //     console.error("Failed to fetch news:", error);
  //   }
  // };

  // useEffect(() => {
  //   // fetchNews();

  //   if (showGraph) {
  //     if (chartRefCanvas.current && revenueChartRefCanvas.current) {
  //       if (chartRef.current) chartRef.current.destroy();
  //       if (revenueChartRef.current) revenueChartRef.current.destroy();
  //       // 자산 현황 그래프 나중에 수정
  //       const ctx = chartRefCanvas.current.getContext("2d");
  //       const myChart = new Chart(ctx, {
  //         type: "line",
  //         data: {
  //           labels: [
  //             "January",
  //             "February",
  //             "March",
  //             "April",
  //             "May",
  //             "June",
  //             "July",
  //           ],
  //           datasets: [
  //             {
  //               label: "총 판매 주식",
  //               data: [65, 59, 80, 81, 56, 55, 40],
  //               fill: false,
  //               borderColor: "rgba(100, 120, 50)",
  //               tension: 0.1,
  //             },
  //           ],
  //         },
  //         options: {},
  //       });

  //       // 판매내역 비율 그래프 나중에 수정
  //       const revenueCtx = revenueChartRefCanvas.current.getContext("2d");
  //       const revenueChart = new Chart(revenueCtx, {
  //         type: "doughnut",
  //         data: {
  //           labels: ["USD", "KRW", "APPLE", "TSLA"],
  //           datasets: [
  //             {
  //               label: "판매내역 비율",
  //               data: [120, 190, 300, 250],
  //               backgroundColor: "rgba(242, 246, 239, 0.7)",
  //               borderColor: "rgba(100, 120, 50, 1)",
  //               borderWidth: 0.5,
  //             },
  //           ],
  //         },
  //       });

  //       chartRef.current = myChart;
  //       revenueChartRef.current = revenueChart;
  //     }
  //   }
  // }, [showGraph]);

  useEffect(() => {
    const getBalanceRecord = async (id) => {
      if (id === "o" || id === "-1") return;
      async function getBalanceRecordReq(id) {
        try {
          return await axiosInstance.get(
            "https://duckling-back.d-v.kro.kr/api/balanceRecord?accountId=" + id
          );
        } catch (error) {
          console.error("Error:", error);
          setTimeout(() => {
            getBalanceRecord(id);
          }, 500);
          return null;
        }
      }

      const response = await getBalanceRecordReq(id);
      if (!response) return;

      const data = response.data ?? [];

      setBalanceRecord(data);
      setShowGraph(true);
    };

    const getStocksEvaluationBalance = async (id) => {
      if (id === "o" || id === "-1") return;
      async function getStocksEvaluationBalanceReq(id) {
        try {
          return await axiosInstance.get(
            "https://duckling-back.d-v.kro.kr/api/stocksEvaluationBalance?accountId=" +
              id
          );
        } catch (error) {
          console.error("Error:", error);
          setTimeout(() => {
            getStocksEvaluationBalance(id);
          }, 500);
          return null;
        }
      }

      const response = await getStocksEvaluationBalanceReq(id);
      if (!response) return;

      const data = response.data ?? [];
      setStockBalance(data);
    };

    if (accountId !== "" && accountId !== "-1" && accountId !== "o") {
      getBalance(accountId);
      getBalanceRecord(accountId);
      getStocksEvaluationBalance(accountId);
    }
  }, [accountId]);

  useEffect(() => {
    const nowMonth = new Date().getMonth() + 1;
    const nowYear = new Date().getFullYear();
    const nowDate = new Date().getDate();
    const startDate = 1;
    const endDate = new Date(nowYear, nowMonth, 0).getDate();
    const dateList = [];
    for (let i = startDate; i <= endDate; i++) {
      dateList.push(`${nowYear}-${nowMonth}-${i}`);
    }

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

    if (chartRefCanvas.current) {
      if (chartRef.current) chartRef.current.destroy();

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

    // balanceList[nowDate - 1]

    if (nowDate === 1) {
      setAmountChange(0);
      setPercentageChange(0.0);
    } else {
      const change = balanceList[nowDate - 1] - balanceList[nowDate - 2];
      setAmountChange(change);
      setPercentageChange((change / balanceList[nowDate - 2]) * 100.0);
    }
  }, [balanceRecord]);

  useEffect(() => {
    if (revenueChartRefCanvas.current) {
      if (revenueChartRef.current) revenueChartRef.current.destroy();

      let nameList = [];
      let valueList = [];
      if (stockBalance.length === 0) {
        nameList = ["계좌 정보가 없습니다."];
        valueList = [-1];
      } else {
        stockBalance.forEach((stock) => {
          nameList.push(
            stock.name + "(" + stock.ticker + ") " + stock.amount + "주"
          );
          valueList.push(parseInt(stock.amount) * parseFloat(stock.price));
        });
      }
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
      <Navbar accountId={accountId} setAccountId={setAccountId} />
      <Topbar accountId={accountId} setAccountId={setAccountId} />
      <div style={styles.container}>
        <div style={styles.leftsection}>
          <div style={styles.card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div>
                <h2 style={styles.cardTitle}>총 자산 현황</h2>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {balance}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <h2 style={styles.sectionTitle}>판매 수익</h2>
                  <select
                    value={selectedDay}
                    onChange={handleDayChange}
                    style={{
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
            <div style={styles.holdSection}>
              <h2 style={styles.sectionTitle}>보유 종목</h2>
              {holdStocks.map((stock, index) => (
                <Link
                  key={index}
                  to={`/detail/${stock.ticker.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={styles.holdSectionItem}>
                    <SComponent2 stock={stock} />
                  </div>
                </Link>
              ))}
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
            <p style={styles.develop}>추후 업데이트 예정입니다</p>
          </div>

          {/* <div style={styles.favoriteOrders}>
            <h2>관심 종목</h2>
            {favoriteOrders.map((item, index) => {
              const formattedName = searchKeywordMap[item.name.toLowerCase()];
              const imageUrl = imageMap[formattedName]; // 이미지 맵에서 이미지 가져오기
              return (
                <Link
                  key={index}
                  to={`/detail/${ticker.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <SComponent ticker={ticker} accountId={accountId} />
                </Link> */}
          <div style={styles.favoriteOrders}>
            <h2>관심 종목</h2>
            {favoriteStocks.map((ticker, index) => {
              const stock = StockData[ticker];
              if (!stock) return null;
              return (
                <Link
                  key={index}
                  to={`/detail/${ticker.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <SComponent ticker={ticker} accountId={accountId} />
                </Link>
              );
            })}
          </div>

          <div style={styles.ownedStocksNews}>
            <h2
              style={{ ...styles.sectionHeader, cursor: "pointer" }}
              onClick={handleHoldingNewsClick}
            >
              보유종목 뉴스
            </h2>
            {holdingNews.map((item) => (
              <div key={item} style={styles.newsItem}>
                {/* 수정 */}
                <a href={item.newsUrl} target="_blank">
                  <img
                    src={item.imageUrl}
                    alt="News"
                    style={styles.newsItemImage}
                  />
                </a>
                <div style={styles.newsItemContent}>
                  <div style={styles.newsItemAuthor}>By {item.author}</div>
                  <div style={styles.newsItemTitle}>{item.title}</div>
                  <div style={styles.newsItemMeta}>{item.date}</div>
                </div>
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
            {interestNews.map((item) => (
              <div key={item} style={styles.newsItem}>
                {/* 수정 */}
                <a href={item.newsUrl} target="_blank">
                  <img
                    src={item.imageUrl}
                    alt="News"
                    style={styles.newsItemImage}
                  />
                </a>
                <div style={styles.newsItemContent}>
                  <div style={styles.newsItemAuthor}>By {item.author}</div>
                  <div style={styles.newsItemTitle}>{item.title}</div>
                  <div style={styles.newsItemMeta}>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
