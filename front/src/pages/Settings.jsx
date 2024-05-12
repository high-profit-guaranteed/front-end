import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '210px',
    marginRight: '1%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  }
}

function Settings() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.section}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Store Name</label>
            <input style={styles.input} type="text" placeholder="Enter store name"/>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" placeholder="Enter email"/>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" placeholder="Enter password"/>
          </div>
        </div>
        <div style={styles.section}>
        </div>
      </div>
    </div>
  );
}

export default Settings;