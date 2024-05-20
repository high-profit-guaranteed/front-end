import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Topbar from "../components/Topbar.jsx";
import LineChart from "./Detail_page/components/linechart.jsx";
import { Link } from 'react-router-dom';
import SComponent from '../components/SComponent';
import SComponent2 from '../components/SComponent2';
import StockData from '../components/StockData';
import StockCategories from '../components/StockCateg';
import axios from "axios";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '210px',
    marginRight: '1%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'space-between',
  },
  
  // 수정 - header 추가
  header: {
    alignSelf: 'flex-start',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row-reverse',   // leftSecion과 rightSection 위치 수정
    justifyContent: 'space-between',
  },

  leftSection: {
    display: "flex",
    flexDirection: "row",
    width: "65%",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#F3F3F3",
    borderRadius: "8px",
  },
  rightSection: {
    width: "30%",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  // leftSection - left
  lleftSection: {
    width: "55%",
    height: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRight: "2px solid #E0E0E0",
    borderRadius: "15px",
    backgroundColor: "#fff",
  },
  // lleftSection - top
  // 거래량, 인기, 급상승, 급하락, 관심
  topSection: {
    display: "flex",
    marginBottom: "20px",
    borderBottom: "1px solid #CCC",
    padding: "10px 0",
  },
  tab: {
    flex: "0 0 auto",
    marginRight: "15px",
    cursor: "pointer",
    padding: "10px",
    fontWeight: "bold",
    color: "#666",
  },
  activeTab: {
    borderBottom: "3px solid #8bc78e",
    color: "black",
  },
  // lleftSection - down
  downSection: {
    width: '90%',
    padding: '10px',
    backgroundColor: '#EFEFEF',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderStyle: 'double',
    borderColor: '#8bc78e',
  },
  stockItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0px 10px',
    borderBottom: '2px solid #eee',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  symbolUp: {
    color: "red",
  },
  symbolDown: {
    color: "blue",
  },

  // leftSection - right
  lrightSection: {
    width: "50%",
    height: "100%",
    padding: "10px",
    display: "flex",
    marginLeft: "1%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: "15px",
    backgroundColor: "#F3F3F3",
  },
  // lrightSection - top
  downSection2: {
    width: '90%',
    height: '80%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: '15px',
    borderStyle: 'double',
    borderColor: '#8bc78e', 
    marginBottom: '5%'
  },
  stockBox: {
    padding: '10px',
    margin: '10px 0',
    width: '90%',
    height: '100%',
    textAlign: 'flex-start',
    borderRadius: '15px',
    backgroundColor: '#e8e8e8',
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
  },
  stockDetail: {
    fontSize: "18px",
    padding: "10px",
    marginBottom: "5px",
    textAlign: "left",
    width: "90%",
  },

  // rightSection
  // rightSection - top
  // 보유종목에 대한 의견
  rupSection: {
    padding: "10px",
    marginBottom: "3%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    borderStyle: "solid",
    borderColor: "#EFEFEF",
  },
  // 수정 - 스타일 수정
  opinionBBox: {
    backgroundColor: 'rgba(242, 246, 239, 1)',
    textAlign: 'center',
    borderRadius: '8px',
    width: '100%',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxHeight: '80%',
    overflowY: 'auto',
    boxSizing: 'border-box',
  },
  opinionBox: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    padding: '5px',
    margin: '6px 0',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    flex: '1',
    marginRight: '5%'
  },
  stockContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 0',
  },
  hold: {
    padding: '5px 10px',
    backgroundColor: '#f0ad4e',
    borderRadius: '5px',
    color: '#fff',
  },
  buy: {
    padding: '5px 10px',
    backgroundColor: '#5cb85c',
    borderRadius: '5px',
    color: '#fff',
  },
  sell: {
    padding: '5px 10px',
    backgroundColor: '#d9534f',
    borderRadius: '5px',
    color: '#fff',
  },
  opinionText: {
    margin: "0 10px",
  },

  // rightSection - down
  // 매수 추천 종목
  rdownSection: {
    padding: "10px",
    marginBottom: "3%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    borderStyle: "solid",
    borderColor: "#EFEFEF",
  },
  recommendStocksBox: {
    textAlign: 'center',
    borderRadius: '8px',
    width: '90%',
    padding: '5px',
    fontFamily: 'Arial, sans-serif',
    overflowY: 'auto',
  },
  recommendStocks: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    padding: '10px',
    margin: '5px',
    borderRadius: '10px',
    textAlign: 'left',
    width: '90%',
  },

  // 수정 - 텍스트 왼쪽 정렬
  leftAlignedText: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
    width: '100%', // 부모 컨테이너의 너비에 맞추기 위해 추가
  }
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

function Info({ accountId, setAccountId }) {
  const [selectedMenu, setSelectedMenu] = useState('거래량');
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockBalance, setStockBalance] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState('');
  // const [stocks, setStocks] = useState({});

  const menuItems = ["거래량", "인기", "급상승", "급하락", "관심"];
  
  // const aiOpinion = async (ticker) => {
  //   try {
  //     const response = await axiosInstance.get(
  //       "https://duckling-back.d-v.kro.kr/api/balance?accountId=" // ai 서버에서 받기 엔드포인트 수정할 것
  //     );
  //     if (response.status === 200) {
  //       console.log(response.data);
  //       return response.data;
  //     }else{
  //       console.log('error');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return null;
  // };

  const myStock = async (id) => {
    if (id === "o") return;
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

    // 매수 추천 주식 ticker
  const [recommendStocks, setRecommendStocks] = useState(['AAPL', 'MSFT', 'AMZN'].filter(ticker => StockData[ticker]));
    
  // useEffect(() => {
  //   setRecommendStocks(recommendStocks.filter(ticker => StockData[ticker]));
  // }, [recommendStocks]);


  // 보유종목에 대한 의견 ai
  useEffect(() => {
    const firstTicker = StockCategories[selectedMenu][0];
    setSelectedTicker(firstTicker);
    setSelectedStock(StockData[firstTicker]);
    myStock('1'); // 임의로 1을 넣음 실제로는 사용하는 계좌 id를 받아올 것
    // aiOpinion(stockBalance);
  }, [selectedMenu]);

  function renderStockList(category) {
    const list = StockCategories[category]?.map(ticker => {
      const stock = StockData[ticker];
      return (
        <div key={ticker} style={styles.stockItem} onClick={() => { setSelectedTicker(ticker); setSelectedStock(stock); }}>
          <SComponent ticker={ticker} accountId={accountId} />
        </div>
      );
    });
    return <div>{list}</div>;
  }

  return (
    <div>
      <Navbar accountId={accountId} setAccountId={setAccountId} />
      <Topbar accountId={accountId} setAccountId={setAccountId} />
      <div style={styles.container}>
        <h2 style={styles.header}>실시간 현황</h2>
        <div style={styles.content}>
          <div style={styles.leftSection}>
            <div style={styles.lleftSection}>
              <div style={styles.topSection}>
                {menuItems.map((item) => (
                  <div 
                    key={item}
                    style={selectedMenu === item ? {...styles.tab, ...styles.activeTab} : styles.tab}
                    onClick={() => setSelectedMenu(item)}>
                    {item}
                  </div>
                ))}
              </div>
              <div style={styles.downSection}>
                {selectedMenu ? renderStockList(selectedMenu) : "카테고리를 선택해주세요."}
              </div>
            </div>
            <div style={styles.lrightSection}>
              <div style={styles.downSection2}>
              <React.Fragment>
                    <div style={styles.stockDetail}><b>{selectedStock.name}</b></div>
                    <div style={styles.stockBox}>
                      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        <LineChart ticker={selectedTicker} term={"day"} />
                      </div>
                    </div>
                    <div style={styles.stockDetail}><b>Price:</b> {selectedStock.price}</div>
                    <div style={styles.stockDetail}><b>Change:</b> {selectedStock.change}</div>
                    <div style={styles.stockDetail}><b>Symbol:</b> {selectedStock.symbol === "up" ? "↑" : "↓"}</div>
                  </React.Fragment>
              </div>
            </div>
          </div>
          <div style={styles.rightSection}>
            <div style={styles.rupSection}>
              <div style={styles.leftAlignedText}>보유종목에 대한 의견</div>
              <div style={styles.opinionBBox}>
                {stockBalance.map((stock) => ( // 보유 종목 계좌에서 주식 리스트를 map으로 넘김
                  <div style={styles.stockContainer}>
                    <div style={styles.opinionBox}>
                      <span style={styles.opinionText}>{stock.name}</span>
                    </div>
                    {/*백에서 ai 의사를 받아와 span 태그에 string으로 추가하는 코드*/}
                    <span>
                      {/* {async () => {
                        return await aiOpinion(stock.ticker);
                      }} */}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.rdownSection}>
              <div style={styles.leftAlignedText}>매수 추천 주식</div>
              <div style={styles.recommendStocksBox}>
                {recommendStocks.map((ticker, index) => {
                  const stock = StockData[ticker];
                  if (!stock) return null;
                  return (
                    <Link key={index} to={`/detail/${ticker.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={styles.recommendStocks}>
                        <SComponent2 stock={stock} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;