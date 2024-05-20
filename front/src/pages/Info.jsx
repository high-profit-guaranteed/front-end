import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar.jsx";
import Topbar from "../components/Topbar.jsx";
import LineChart from "./Detail_page/components/linechart.jsx";
import { Link } from 'react-router-dom';
import SComponent from '../components/SComponent';
import SComponent2 from '../components/SComponent2';
import StockData from '../components/StockData';
import StockCategories from '../components/StockCateg';
import axios from "axios";

// 관심종목 좋아요 버튼
import { HeartContext } from './Detail_page/Heart.jsx';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

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
  
  header: {
    alignSelf: 'flex-start',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row-reverse',
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
  downSection2: {
    width: '90%',
    height: '82%',
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
    backgroundColor: 'rgba(242, 246, 239, 1)',
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

  leftAlignedText: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
    width: '100%', // 부모 컨테이너의 너비에 맞추기 위해 추가
  },
  heartButton: {
    fontSize: '25px',
    cursor: 'pointer',
  }
};

const axiosInstance = axios.create({
  baseURL: "https://duckling-back.d-v.kro.kr",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": window.location.origin,
    "Access-Control-Allow-Credentials": "true",
  },
});

// 관심종목 좋아요 버튼
const HeartButton = ({ style, item }) => {
  const { likedItems, toggleLike } = useContext(HeartContext);
  const liked = likedItems.includes(item);

  const handleClick = () => {
    toggleLike(item);
  };

  return (
    <div onClick={handleClick} style={{ ...style, color: liked ? 'red' : 'black' }}>
      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

function Info({ accountId, setAccountId }) {
  const [selectedMenu, setSelectedMenu] = useState('거래량');
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockBalance, setStockBalance] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState('');

  const menuItems = ["거래량", "인기", "급상승", "급하락", "관심"];

  const myStock = async (id) => {
    if (id === "o") return;
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/stocksEvaluationBalance?accountId=" + id
      );
      if (response.status === 200) {
        console.log(response.data);
        setStockBalance(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [recommendStocks, setRecommendStocks] = useState(['MSFT', 'AMZN'].filter(ticker => StockData[ticker]));
    
  useEffect(() => {
    setRecommendStocks(recommendStocks.filter(ticker => StockData[ticker]));
  }, [recommendStocks]);

  const handlePriceUpdate = (ticker, lastPrice, diffrenceRate, sign) => {
    if (selectedStock && ticker === selectedTicker) {
      setSelectedStock({
        ...selectedStock,
        price: lastPrice,
        change: diffrenceRate,
        symbol: sign === "1" || sign === "2" ? "up" : "down",
      });
    }
  };

  useEffect(() => {
    const firstTicker = StockCategories[selectedMenu][0];
    setSelectedTicker(firstTicker);
    if (StockData[firstTicker]) {
      setSelectedStock(StockData[firstTicker]);
    } else {
      setSelectedStock(null);
    }
  }, [selectedMenu]);

  function renderStockList(category) {
    const list = StockCategories[category]?.map(ticker => {
      const stock = StockData[ticker];
      return (
//         <div key={ticker} onClick={() => { setSelectedTicker(ticker); setSelectedStock(stock); }}>
//           <SComponent
//             ticker={ticker}
//             accountId={accountId}
//             onPriceUpdate={handlePriceUpdate}
//           />
        <div style={{ display: 'flex' }}>
          <div key={ticker} style={{...styles.stockItem, width: '90%'}} onClick={() => { setSelectedTicker(ticker); setSelectedStock(stock); }}>
            <SComponent ticker={ticker} accountId={accountId} />
          </div>
          <div style={{width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <HeartButton style={{...styles.heartButton, }} item={ticker}/>
          </div>
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
                {selectedStock ? (
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
                ) : "세부정보를 보려면 주식을 선택하세요."}
              </div>
            </div>
          </div>
          <div style={styles.rightSection}>
            <div style={styles.rupSection}>
              <div style={styles.leftAlignedText}>보유종목에 대한 의견</div>
              <div style={styles.opinionBBox}>
                {Object.entries(StockData).slice(0, 3).map(([ticker, stock], index) => (
                  <div key={index} style={styles.stockContainer}>
                    <div style={styles.opinionBox}>
                      <span style={styles.opinionText}>{stock.name}</span>
                    </div>
                    <span style={styles[index === 0 || index === 2 ? 'buy' : 'sell']}>
                      {index === 0 || index === 2 ? 'Buy' : 'Sell'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.rdownSection}>
              <div style={styles.leftAlignedText}>매수 추천 주식</div>
              <div style={styles.opinionBBox}>
                {Object.entries(StockData).slice(3, 6).map(([ticker, stock], index) => (
                  <div key={index} style={styles.stockContainer}>
                    <div style={styles.opinionBox}>
                      <span style={styles.opinionText}>{stock.name}</span>
                    </div>
                    <span style={styles[index === 0 || index === 2 ? 'buy' : 'buy']}>
                      {index === 0 || index === 2 ? 'buy' : 'buy'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;