import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import LineChart from './Info_page/components/linechart.jsx';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
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
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '64%',
    alignItems: 'center',
    marginRight: '20px',
    padding: '10px',
    backgroundColor: '#F3F3F3',
    borderRadius: '8px',
  },
  rightSection: {
    width: '30%', 
    padding: '10px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  
  // leftSection - left
  lleftSection: {
    width: '55%',
    height: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRight: '2px solid #E0E0E0',
    borderRadius: '15px',
    backgroundColor: '#fff',
  },
  // lleftSection - top
  // 거래량, 인기, 급상승, 급하락, 관심
  topSection: {
    display: 'flex',
    marginBottom: '20px',
    borderBottom: '1px solid #CCC',
    padding: '10px 0',
  },
  tab: {
    flex: '0 0 auto',
    marginRight: '15px',
    cursor: 'pointer',
    padding: '10px',
    fontWeight: 'bold',
    color: '#666',
  },
  activeTab: {
    borderBottom: '3px solid #8bc78e',
    color: 'black',
  },
  // lleftSection - down
  downSection: {
    width: '90%',
    height: '90%',
    padding: '10px',
    backgroundColor: '#EFEFEF',
    borderRadius: '10px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderStyle: 'double',
    borderColor: '#8bc78e'
  },
  stockItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px 10px',
    borderBottom: '2px solid #eee',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  symbolUp: {
    color: 'red'
  },
  symbolDown: {
    color: 'blue'
  },
  
  // leftSection - right
  lrightSection: {
    width: '50%',
    height: '100%',
    padding: '10px',
    display: 'flex',
    marginLeft: '1%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '15px',
    backgroundColor: '#F3F3F3',
  },
  // lrightSection - top
  downSection2: {
    width: '95%',
    height: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: '15px',
    borderStyle: 'double',
    borderColor: '#8bc78e'
  },
  stockBox: {
    padding: '10px',
    margin: '10px 0',
    width: '90%',
    height: '100%',
    textAlign: 'center',
    borderRadius: '15px',
    backgroundColor: '#e8e8e8',
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
  },
  stockDetail: {
    fontSize: '18px',
    padding: '10px',
    marginBottom: '5px',
    textAlign: 'left',
    width: '90%',
  },

  // rightSection
  // rightSection - top
  // 보유종목에 대한 의견
  rupSection: {
    padding: '10px',
    marginBottom: '3%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    borderStyle: 'solid',
    borderColor: '#EFEFEF'
  },
  opinionBox: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    padding: '12px',
    margin: '10px 0',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // 조절 가능
    textAlign: 'center',
  },
  hold: {
    width: '90%',
    backgroundColor: '#f0ad4e',
  },
  buy: {
    width: '90%',
    backgroundColor: '#5cb85c',
  },
  sell: {
    width: '90%',
    backgroundColor: '#d9534f',
  },
  opinionText: {
    margin: '0 10px',
  },

  // rightSection - down
  // 매수 추천 종목
  rdownSection: {
    padding: '10px',
    marginBottom: '3%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    borderStyle: 'solid',
    borderColor: '#EFEFEF'
  },
  recommendStocksBox: {
    backgroundColor: 'rgba(242, 246, 239, 1)',
    textAlign: 'center',
    borderRadius: '8px',
    width: '90%',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  recommendStocks: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    textAlign: 'center',
  },
};


function Info() {
  const [selectedMenu, setSelectedMenu] = useState('Trading');
  const [selectedStock, setSelectedStock] = useState(null);

  const menuItems = ["Trading", "Popularity", "Soaring", "Decline", "Interest"];

  const stockData = {
    Trading: [
      { rank: 1, name: "Apple", price: "61,024원", change: "+3.0%", symbol: "up" },
      { rank: 2, name: "MS", price: "58,599원", change: "-12.2%", symbol: "down" },
      { rank: 3, name: "Alphabet", price: "56,407원", change: "+2.2%", symbol: "up" },
      { rank: 4, name: "Amazon", price: "84,329원", change: "+1.4%", symbol: "up" },
      { rank: 5, name: "NVIDIA", price: "11,056원", change: "+4.5%", symbol: "up" },
      { rank: 6, name: "Meta", price: "248,878원", change: "+2.3%", symbol: "up" },
      { rank: 7, name: "TSLA", price: "60,133원", change: "+6.6%", symbol: "up" },
      { rank: 8, name: "Broadcom", price: "1,265,547원", change: "+1.1%", symbol: "up" },
      { rank: 9, name: "COST", price: "82,109원", change: "+0.5%", symbol: "up" },
      { rank: 10, name: "ASML", price: "128,006원", change: "+0.7%", symbol: "up" }
    ],
    Popularity: [
      { rank: 1, name: "Apple", price: "61,024원", change: "+3.0%", symbol: "up" },
      { rank: 2, name: "MS", price: "58,056원", change: "-12.2%", symbol: "down" },
      { rank: 3, name: "Alphabet", price: "56,599원", change: "+2.2%", symbol: "up" },
      { rank: 4, name: "Amazon", price: "60,329원", change: "+1.4%", symbol: "up" },
      { rank: 5, name: "NVIDIA", price: "11,056원", change: "+4.5%", symbol: "up" },
      { rank: 6, name: "Meta", price: "248,878원", change: "+2.3%", symbol: "up" },
      { rank: 7, name: "TSLA", price: "60,133원", change: "+6.6%", symbol: "up" },
      { rank: 8, name: "Broadcom", price: "1,265,133원", change: "+1.1%", symbol: "up" },
      { rank: 9, name: "COST", price: "60,109원", change: "+0.5%", symbol: "up" },
      { rank: 10, name: "ASML", price: "128,006원", change: "+0.7%", symbol: "up" }
    ],
    Soaring: [
      { rank: 1, name: "Apple", price: "61,024원", change: "+3.0%", symbol: "up" },
      { rank: 2, name: "MS", price: "58,599원", change: "-12.2%", symbol: "down" },
      { rank: 3, name: "Alphabet", price: "56,407원", change: "+2.2%", symbol: "up" },
      { rank: 4, name: "Amazon", price: "84,329원", change: "+1.4%", symbol: "up" },
      { rank: 5, name: "NVIDIA", price: "248,056원", change: "+4.5%", symbol: "up" },
      { rank: 6, name: "Meta", price: "265,878원", change: "+2.3%", symbol: "up" },
      { rank: 7, name: "TSLA", price: "60,133원", change: "+6.6%", symbol: "up" },
      { rank: 8, name: "Broadcom", price: "1,265,547원", change: "+1.1%", symbol: "up" },
      { rank: 9, name: "COST", price: "82,109원", change: "+0.5%", symbol: "up" },
      { rank: 10, name: "ASML", price: "128,006원", change: "+0.7%", symbol: "up" }
    ],
    Decline: [
      { rank: 1, name: "Apple", price: "61,024원", change: "+3.0%", symbol: "up" },
      { rank: 2, name: "MS", price: "58,599원", change: "-12.2%", symbol: "down" },
      { rank: 3, name: "Alphabet", price: "56,407원", change: "+2.2%", symbol: "up" },
      { rank: 4, name: "Amazon", price: "84,329원", change: "+1.4%", symbol: "up" },
      { rank: 5, name: "NVIDIA", price: "11,056원", change: "+4.5%", symbol: "up" },
      { rank: 6, name: "Meta", price: "248,878원", change: "+2.3%", symbol: "up" },
      { rank: 7, name: "TSLA", price: "60,133원", change: "+6.6%", symbol: "up" },
      { rank: 8, name: "Broadcom", price: "1,265,547원", change: "+1.1%", symbol: "up" },
      { rank: 9, name: "COST", price: "82,109원", change: "+0.5%", symbol: "up" },
      { rank: 10, name: "ASML", price: "128,006원", change: "+0.7%", symbol: "up" }
    ],
    Interest: [
      { rank: 1, name: "Apple", price: "61,024원", change: "+3.0%", symbol: "up" },
      { rank: 2, name: "MS", price: "58,599원", change: "-12.2%", symbol: "down" },
      { rank: 3, name: "Alphabet", price: "56,407원", change: "+2.2%", symbol: "up" },
      { rank: 4, name: "Amazon", price: "84,329원", change: "+1.4%", symbol: "up" },
      { rank: 5, name: "NVIDIA", price: "11,056원", change: "+4.5%", symbol: "up" },
      { rank: 6, name: "Meta", price: "248,878원", change: "+2.3%", symbol: "up" },
      { rank: 7, name: "TSLA", price: "60,133원", change: "+6.6%", symbol: "up" },
      { rank: 8, name: "Broadcom", price: "1,265,547원", change: "+1.1%", symbol: "up" },
      { rank: 9, name: "COST", price: "82,109원", change: "+0.5%", symbol: "up" },
      { rank: 10, name: "ASML", price: "128,006원", change: "+0.7%", symbol: "up" }
    ]
  };

  useEffect(() => {
    setSelectedMenu('Trading');
    setSelectedStock(stockData.Trading[0]);
  }, []);

  function renderStockList(category) {
    const list = stockData[category]?.map(stock => (
      <div key={stock.rank} 
           style={styles.stockItem}
           onClick={() => setSelectedStock(stock)}>
        <div>{stock.rank}</div>
        <div>{stock.name}</div>
        <div>{stock.price}</div>
        <div>{stock.change}</div>
        <div style={stock.symbol === "up" ? styles.symbolUp : styles.symbolDown}>
          {stock.symbol === "up" ? "↑" : "↓"}
        </div>
      </div>
    ));
    return <div>{list}</div>;
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.lleftSection}>
            <div style={styles.topSection}>
              {menuItems.map((item) => (
                <div 
                  key={item}
                  style={selectedMenu === item ? {...styles.tab, ...styles.activeTab} : styles.tab}
                  onClick={() => {
                    setSelectedMenu(item);
                    setSelectedStock(null);
                  }}>
                  {item}
                </div>
              ))}
            </div>
            <div style={styles.downSection}>
              {selectedMenu ? renderStockList(selectedMenu) : "Please select a category above."}
            </div>
          </div>
          <div style={styles.lrightSection}>
            <div style={styles.downSection2}>
              {selectedStock ? (
              <React.Fragment>
                <div style={styles.stockBox}>
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <LineChart />
                  </div>
                </div>
                <div style={styles.stockDetail}><b>Name:</b> {selectedStock.name}</div>
                <div style={styles.stockDetail}><b>Price:</b> {selectedStock.price}</div>
                <div style={styles.stockDetail}><b>Change:</b> {selectedStock.change}</div>
                <div style={styles.stockDetail}><b>Symbol:</b> {selectedStock.symbol === "up" ? "↑" : "↓"}</div>
                </React.Fragment>
              ) : "Select a stock to view details."}
            </div>
          </div>
        </div>
        <div style={styles.rightSection}>
        <div style={styles.rupSection}>
          <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>Your Portfolio Opinion</div>
            <div style={{ ...styles.opinionBox, ...styles.hold }}>
              <span style={styles.opinionText}>Apple</span>
              <span>Hold</span>
            </div>
            <div style={{ ...styles.opinionBox, ...styles.buy }}>
              <span style={styles.opinionText}>Amazon</span>
              <span>Buy</span>
            </div>
            <div style={{ ...styles.opinionBox, ...styles.sell }}>
              <span style={styles.opinionText}>NVIDIA</span>
              <span>Sell</span>
            </div>
          </div>
          <div style={styles.rdownSection}>
              <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>Recommended Stocks to Buy</div>
              <div style={styles.recommendStocksBox}>
                {['Apple', 'Amazon', 'NVIDIA', 'Alphabet', 'Meta'].map((stock, index) => (
                  <div key={index} style={styles.recommendStocks}> {stock} </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
