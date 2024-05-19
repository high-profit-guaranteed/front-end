import React from 'react';
import SComponent from './SComponent.jsx';
import StockData from './StockData';

// 보유종목들

function MySComponent() {
  const tickers = ['AAPL', 'GOOGL', 'MSFT'];
  
//   useEffect(() => {
//     fetchStockData();
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       const responses = await Promise.all(
//         tickers.map(ticker => fetch(`/api/stock/${ticker}`))
//       );
//       const stockDataList = await Promise.all(
//         responses.map(response => response.json())
//       );

//       setStocks(stockDataList);
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };

  return (
    <div>
      <h1>My Stock</h1>
      <div className="portfolio-list">
        {tickers.map((ticker) => (
          <SComponent key={ticker} stock={StockData[ticker]} />
        ))}
      </div>
    </div>
  );
}

export default MySComponent;