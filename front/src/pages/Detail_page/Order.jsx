import React, { useState, useEffect } from 'react';
import axios from "axios";

const styles = {
  dummyContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '95%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: '1000px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  orderContainer: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  quantity: {
    fontSize: '20px',
  },
  boldRow: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: '10px 0 0 0',
    position: 'sticky',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: '1',
  },
  button: {
    margin: '0 5px',
    padding: '10px 60px',
    borderRadius: '10px',
    backgroundColor: '#8bc78e',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  clickedPriceContainer: {
    backgroundColor: 'rgba(242, 246, 239, 1)',
  },
  clickedPrice: {
    border: '2px solid',
    borderColor: '#000',
  },
  buy_sell_box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)', // 가로선
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)', // 가로선
  },
  buyOrder: {
    width: '10%',
    textAlign: 'right',
    margin: 'auto',
  },
  sellOrder: {
    width: '10%',
    textAlign: 'left',
    margin: 'auto',
  },
  price: {
    width: '30%',
    textAlign: 'center',
    fontSize: '25px',
    margin: 'auto',
    cursor: 'pointer',
    border: '2px solid',
    borderColor: 'rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.1)',
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

const Order = ({ orderData, ticker, currentPrice, accountId }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    setSelectedPrice(currentPrice);
  }, [currentPrice]);

  const handlePriceClick = (price) => {
    setSelectedPrice(price);
  };

  const tradeStock = (method) => {
    const quantity = prompt(`${ method === 'buy' ? '매수' : method === 'sell' ? '매도' : 'Error' }할 수량을 입력하세요:`);
    if (quantity !== null && !isNaN(quantity) && quantity !== '') {
      axiosInstance
      .post(`https://duckling-back.kro.kr/api/trade?accountId=${accountId}`, {
        stockCode: ticker,
        orderAmount: quantity,
        orderPrice: selectedPrice,
        method: method
      }).then((response) => {
        if (response.status === 200) alert("주문 완료");
        else throw new Error("주문 실패 (server error)");
      }).catch((error) => {
        console.log("error: ", error);
      });
    } else {
      console.log('올바르지 않은 입력입니다.');
    }
  };

  return (
    <div style={styles.dummyContainer}>
      <div style={styles.orderContainer}>
        <div style={{fontSize:'35px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          매수 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;매도</div>
        {orderData.map((order, index) => (
          <div
            key={index}
            style={{
              ...styles.buy_sell_box,
              ...((selectedPrice === order.price) && styles.clickedPriceContainer),
            }}
            onClick={() => handlePriceClick(order.price)}
          >
            <div style={styles.buyOrder}>
              {order.type === 'bid' ? (
                <span style={styles.quantity}>{order.quantity}</span>
              ) : null}
            </div>
            <div style={{
              ...styles.price,
              ...((selectedPrice === order.price) && styles.clickedPrice),
              }}>
              <span>{order.price.toFixed(2)}</span>
            </div>
            <div style={styles.sellOrder}>
              {order.type === 'ask' ? (
                <span style={styles.quantity}>{order.quantity}</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => {tradeStock('buy')}}>매수</button>
        <button style={styles.button} onClick={() => {tradeStock('sell')}}>매도</button>
      </div>
    </div>
  );
};

export default Order;
