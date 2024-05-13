import React, { useState, useEffect } from 'react';

const styles = {
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '95%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  buyOrder: {
    color: 'green',
    fontSize: '20px',
    textAlign: 'left',
    marginRight: 'auto',
  },
  sellOrder: {
    color: 'red',
    fontSize: '20px',
    textAlign: 'right',
    marginLeft: 'auto',
  },
  quantity: {
    fontSize: '20px',
  },
  boldRow: {
    fontWeight: 'bold',
  },
  buttonContainer: {
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
  table: {
    marginBottom: '30px',
    borderCollapse: 'separate',
    borderSpacing: '20px 7px',
    fontSize: '25px',
  },
  clickedRow: {
    backgroundColor: 'rgba(242, 246, 239, 1)',
    padding: '20px',
  },
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
    <div style={styles.orderContainer}>
      <table style={styles.table}>
        <tbody>
          {orderData.map((order, index) => (
            <tr
              key={index}
              style={selectedRow === index ? styles.clickedRow : null}
              onClick={() => handleRowClick(index)}
            >
              <td style={styles.buyOrder}>
                {order.type === 'bid' ? (
                  <span style={styles.quantity}>{order.quantity}</span>
                ) : null}
              </td>
              <td style={{ textAlign: 'center' }}>
                <span>{order.price.toFixed(2)}</span>
              </td>
              <td style={styles.sellOrder}>
                {order.type === 'ask' ? (
                  <span style={styles.quantity}>{order.quantity}</span>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={buyStock}>구매</button>
        <button style={styles.button} onClick={sellStock}>판매</button>
      </div>
    </div>
  );
};

export default Order;
