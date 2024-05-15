import React from 'react';

const styles = {
  mystockContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  contentContainer: {
    borderRadius: '8px',
    paddingLeft: '10px',
    paddingRight: '10px',
    justifyContent: 'space-between',
    display: 'flex',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    marginBottom: '10px',
  },
  total: {
    marginTop: '15px',
  },
  price: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  change: {
    textAlign: 'right',
    color: '#007bff',
    marginLeft: '10px',
  },
  line: {
    borderTop: '1px solid rgba(242, 246, 239, 1)',
    marginTop: '10px',
    marginBottom: '10px',
  },
};

const Mystock = () => {
  const averagePrice = 22.16;
  const quantity = 700;
  const totalPrice = averagePrice * quantity;

  return (
    <div style={styles.mystockContainer}>
      <h2 style={styles.title}>MY STOCK</h2>

      <div style={styles.contentContainer}>
        <p style={styles.label}>1주 평균가격</p>
        <p style={styles.value}>{averagePrice.toFixed(2)}</p>
      </div>
      <div style={styles.contentContainer}>
        <p style={styles.label}>보유수량</p>
        <p style={styles.value}>{quantity}</p>
      </div>
      <div style={styles.line}></div> 
      <div style={styles.total}>
        <div style={styles.contentContainer}>
          <p>총 금액</p>
          <div style={styles.price}>
            <p>{totalPrice.toFixed(2)}</p>
            <p style={styles.change}>+{((totalPrice - averagePrice * quantity) * 100 / (averagePrice * quantity)).toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mystock;
