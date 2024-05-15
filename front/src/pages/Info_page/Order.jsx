import React, { useState, useEffect } from 'react';

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
    backgroundColor: 'rgba(100,120,50)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  clickedRow: {
    backgroundColor: 'rgba(242, 246, 239, 1)',
  },
  buy_sell_box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignitems: 'center',
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
    textAlign: 'center',
    fontSize: '25px',
    margin: 'auto',
  }
};

const Order = ({ orderData, currentPrice }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    setSelectedRow(currentPrice !== null ? orderData.findIndex(order => order.price === currentPrice) : null);
  }, [currentPrice, orderData]);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const buyStock = () => {
    console.log('주식을 구매합니다.');
    // 주식 구매 추가 예정
  };

  const sellStock = () => {
    console.log('주식을 판매합니다.');
    // 주식 판매 추가 예정
  };

  return (
    <div style={styles.dummyContainer}>
      <div style={styles.orderContainer}>
        {orderData.map((order, index) => (
          <div style={styles.buy_sell_box}>
            <div style={styles.buyOrder}>
              {order.type === 'bid' ? (
                <span style={styles.quantity}>{order.quantity}</span>
              ) : null}
            </div>
            <div style={styles.price}>
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
        <button style={styles.button} onClick={buyStock}>구매</button>
        <button style={styles.button} onClick={sellStock}>판매</button>
      </div>
    </div>
  );
};

export default Order;
