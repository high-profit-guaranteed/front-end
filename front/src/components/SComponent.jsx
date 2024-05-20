import React, { useState, useEffect } from "react";
import axios from "axios";
import stockData from "./StockData";

const axiosInstance = axios.create({
  baseURL: "https://duckling-back.d-v.kro.kr",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
    "Access-Control-Allow-Credentials": "true",
  },
});

const SComponent = ({ ticker, accountId, onPriceUpdate }) => {
  const [stock, setStock] = useState({
    stockCode: "",
    lastPrice: "",
    sign: "",
    diffrence: "",
    diffrenceRate: "",
  });

  useEffect(() => {
    if (accountId === "-1") return;
    const getStockPrice = async () => {
      async function getStock() {
        try {
          return await axiosInstance.get(`/api/stock?accountId=${accountId}&stockCode=${ticker}`);
        } catch (error) {
          console.error("Error fetching stock data:", error);
          setTimeout(getStockPrice, 500);
          return null;
        }
      };
      const response = await getStock();
      if (!response) return;
      const stockPrice = response.data ?? {
        'stockCode': 'AAPL', 
        'lastPrice': '100', 
        'sign': '1', 
        'diffrence': '1', 
        'diffrenceRate': '1%'
      };
      console.log("stockPrice", stockPrice);
      setStock(stockPrice);

      // 주식 정보 업데이트 시 onPriceUpdate 콜백 호출
      onPriceUpdate(ticker, stockPrice.lastPrice, stockPrice.diffrence, stockPrice.sign);
    };
    getStockPrice();
  }, [accountId, ticker, onPriceUpdate]);

  // const { name, logo, price, change, symbol } = stock;
  // 1 || 2 -> up, 4 || 5 -> down, 3 -> same, '↑' : '↓'
  const symbolIcon =
    stock.sign === "1" || stock.sign === "2"
      ? "↑"
      : stock.sign === "4" || stock.sign === "5"
      ? "↓"
      : "-";
  const symbolColor =
    stock.sign === "1" || stock.sign === "2"
      ? "red"
      : stock.sign === "4" || stock.sign === "5"
      ? "blue"
      : "gray";

  const containerStyle = {
    display: "flex", // 가로로 요소를 정렬하기 위해 flex 사용
    flexDirection: "row", // 가로 방향으로 요소를 나열
    alignItems: "center", // 요소들을 세로 중앙 정렬
    justifyContent: "space-around", // 요소들을 컨테이너의 시작 부분에 정렬
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    width: "auto",
    boxSizing: "border-box",
    cursor: "pointer",
    backgroundColor: "#00ff0000",
  };

  // 로고 스타일
  const logoStyle = {
    width: "40px",
    height: "40px",
    marginRight: "15px", // 로고와 이름 사이의 간격 조정
  };

  // 텍스트 스타일
  const textStyle = {
    margin: "0 10px", // 텍스트 요소들 사이의 간격 조정
    fontWeight: "bold",
  };

  // symbol 스타일
  const symbolStyle = {
    ...textStyle, // 기본 텍스트 스타일을 상속
    color: symbolColor, // 색상을 동적으로 설정
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <img
        src={stockData[ticker]?.logo ?? ""}
        style={logoStyle}
        alt={`${stockData[ticker]?.name ?? ticker} logo`}
      />
      <p style={textStyle}>{stockData[ticker]?.name ?? ticker}</p>
      <p style={textStyle}>{stock.lastPrice}</p>
      <p style={textStyle}>{stock.diffrenceRate}</p>
      <p style={symbolStyle}>{symbolIcon}</p>
    </div>
  );
};

export default SComponent;
