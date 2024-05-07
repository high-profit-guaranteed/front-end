import React from 'react';

const styles = {
  mystockContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '280px',
    height: '210px',
  },
  title: {
    marginTop: '-10px',
    textAlign: 'center',
    marginBottom: '15px',
  },
  contentContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    marginBottom: '-15px',
  },
  total: {
    marginTop: '15px',
  },
  change: {
    marginTop: '-5px',
    textAlign: 'right',
    color: '#007bff',
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
      <br></br><hr></hr>
      <div style={styles.total}>
        <div style={styles.contentContainer}>
          <p>총 금액</p>
          <p>{totalPrice.toFixed(2)}</p>
        </div>
        <p style={styles.change}>+{((totalPrice - averagePrice * quantity) * 100 / (averagePrice * quantity)).toFixed(1)}%</p>
      </div>
    </div>
);
}

export default Mystock;