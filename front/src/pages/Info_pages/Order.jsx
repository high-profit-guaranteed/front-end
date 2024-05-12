import React, { useRef, useEffect } from 'react';

const styles = {
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '270px',
    height: '500px',
    overflowY: 'auto',
    position: 'relative',
  },
  buyOrder: {
    color: 'green',
    textAlign: 'left',
    marginBottom: '7px',
  },
  sellOrder: {
    color: 'red',
    textAlign: 'right',
    marginBottom: '7px',
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
    padding: '10px 20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(100,120,50)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
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
      <div>
        {orderData.map((order, index) => (
          <div key={index} style={{ fontWeight: 'bold' }} ref={order.price === currentPrice ? currentOrderRef : null}>
            {order.type === 'bid' ? (
              <div style={styles.buyOrder}>
                <span style={{ fontWeight: order.price === currentPrice ? 'bold' : 'normal' }}>{order.price.toFixed(2)}</span>
                <br />
                <span style={{ ...styles.quantity, fontWeight: order.price === currentPrice ? 'bold' : 'normal' }}>{order.quantity}</span>
              </div>
            ) : (
              <div style={styles.sellOrder}>
                <span style={{ fontWeight: order.price === currentPrice ? 'bold' : 'normal' }}>{order.price.toFixed(2)}</span>
                <br />
                <span style={{ ...styles.quantity, fontWeight: order.price === currentPrice ? 'bold' : 'normal' }}>{order.quantity}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={styles.currentOrderMarker}></div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>구매</button>
        <button style={styles.button}>판매</button>
      </div>
    </div>
  );
};

export default Order;