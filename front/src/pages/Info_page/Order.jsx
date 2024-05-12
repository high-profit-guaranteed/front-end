import React, { useRef, useEffect } from 'react';

const styles = {
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '500px',
    height: '760px',
    overflowY: 'auto',
    position: 'relative',
    margin: 'auto', // 수평 가운데 정렬
    display: 'flex', // 내부 요소 가운데 정렬
    flexDirection: 'column', // 내부 요소 수직
    justifyContent: 'center', // 내부 요소 수직 가운데 정렬
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
    fontSize: '0.8em',
  },
  currentOrderMarker: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
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
    marginTop: '100px',
    marginBottom: '30px',
  }
};

const Order = ({ orderData }) => {
  const currentPrice = 101.80;
  const currentOrderRef = useRef(null); 

  useEffect(() => {
    if (currentOrderRef.current) {
      currentOrderRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentPrice]);

  return (
    <div style={styles.orderContainer}>
      <table style={styles.table}>
        <tbody>
          {orderData.map((order, index) => (
            <tr key={index} style={{ ...styles.tableRow, fontWeight: order.price === currentPrice ? 'bold' : 'normal' }} ref={order.price === currentPrice ? currentOrderRef : null}>
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
      <div style={styles.currentOrderMarker}></div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>구매</button>
        <button style={styles.button}>판매</button>
      </div>
    </div>
  );
};

export default Order;
