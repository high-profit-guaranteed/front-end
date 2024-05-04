import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';

const styles = {
  container: {
    display: 'grid',
    marginLeft: '210px',
    marginRight: '20%',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  cardHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  notesSection: {
    backgroundColor: '#eceff1',
    padding: '10px',
    borderRadius: '10px'
  },
  note: {
    fontSize: '14px',
    lineHeight: '20px',
    marginBottom: '10px'
  }
};

function News() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <h1 style={styles.header}>News</h1>
        <div style={styles.card}>
          <h2 style={styles.cardHeader}>1</h2>
          <div style={styles.notesSection}>
          <div style={styles.note}>2</div>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardHeader}>1</h2>
          <div style={styles.notesSection}>
            <p style={styles.note}>2</p>
            <p style={styles.note}>3</p>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardHeader}>1</h2>
          <div style={styles.notesSection}>
            <p style={styles.note}>2</p>
            <p style={styles.note}>2</p>
            <p style={styles.note}>2</p>
            <p style={styles.note}>2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;