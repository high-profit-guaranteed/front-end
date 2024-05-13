import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import { AiOutlineUser, AiOutlinePlus, AiOutlineSetting, 
  AiOutlineQuestionCircle, AiOutlineGlobal } from 'react-icons/ai';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
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
  leftSection: {
    width: '40%',
    marginRight: '20px',
    padding: '10px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  rightSection: {
    width: '50%', 
    padding: '10px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // leftsection 메뉴들
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    margin: '10px 0',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s',
  },
  icon: {
    marginRight: '10px',
    color: '#666666',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  description: {
    fontSize: 'small',
    color: '#666666',
  },

  // rightsection 세부적인
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    gap: '10px'
  },
  inputField: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%'
  },

  // 계좌추가 버튼
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#8bc78e',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

function Settings() {
  const [activeMenu, setActiveMenu] = useState('profile');

  const renderRightSection = () => {
    switch (activeMenu) {
      // 개인정보
      case 'profile':
        return (
          <div style={styles.profileDetails}>
            <h2>Profile</h2>
            <label>
              Name
              <input type="text" defaultValue="" style={styles.inputField} />
            </label>
            <label>
              E-mail
              <input type="email" defaultValue="" style={styles.inputField} />
            </label>
            <label>
              ID
              <input type="text" defaultValue="" style={styles.inputField} />
            </label>
            <label>
              Description
              <textarea defaultValue="" style={{ ...styles.inputField, height: '100px' }} placeholder="Put your description here."></textarea>
            </label>
          </div>
        );

      // 계좌추가
      case 'addAccount':
        return (
          <div style={styles.profileDetails}>
            <h2>Add Account</h2>
            <p>Before adding an account, please sign up and create an account through the Korea Investment & Securities Open API.</p>
            <button style={styles.linkButton} onClick={() => window.open('https://securities.koreainvestment.com/main/member/login/login.jsp?returnUrl=%2Fmain%2Fcustomer%2Fsystemdown%2FRestAPIService.jsp&auth=LX', '_blank')}>
              Go to Korea Investment & Securities
            </button>
            <label>
              Account Number
              <input type="text" placeholder="Enter Account Number" style={styles.inputField} />
            </label>
            <label>
              Account Product Code
              <input type="text" placeholder="Enter Account Product Code" style={styles.inputField} />
            </label>
            <label>
              Account Name
              <input type="text" placeholder="Enter account name" style={styles.inputField} />
            </label>
            <label>
            I have a virtual account
              <input type="checkbox" style={{...styles.inputField, width: 'auto', margin: '10px'}} />
            </label>
            <label>
              APP KEY
              <input type="text" placeholder="Enter APP KEY" style={styles.inputField} />
            </label>
            <label>
              APP SECRET
              <input type="text" placeholder="Enter APP SECRET" style={styles.inputField} />
            </label>
            <button style={styles.button} onClick={() => console.log('Add account clicked')}>Add Account</button>
          </div>
        );

      // 개인설정
      case 'personal settings':
        return (
          <div style={styles.profileDetails}>
            <h2>Personal settings</h2>
            <label>
              Theme
              <select style={styles.inputField}>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </label>
          </div>
        );

      // 고객센터
      case 'service center':
        return (
          <div style={styles.profileDetails}>
            <h2>Service center</h2>
            <label>
              Enable Two-Factor Authentication
              <input type="checkbox" style={{...styles.inputField, width: 'auto', margin: '10px'}} />
            </label>
          </div>
        );

      // 약관 오픈소스  
      case 'openSource':
        return (
          <div style={styles.profileDetails}>
            <h2>Open Source Licenses</h2>
            <textarea style={{ ...styles.inputField, height: '200px' }} defaultValue="List of open source licenses..." />
          </div>
        );
      default:
        return <div>Select a menu option to see details here.</div>;
    }
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.menuItem} onClick={() => setActiveMenu('profile')}>
            <AiOutlineUser style={styles.icon}/>
            <div>
              <div style={styles.title}>Profile</div>
              <div style={styles.description}>Profile, Name, ID, Email</div>
            </div>
          </div>
          <div style={styles.menuItem} onClick={() => setActiveMenu('addAccount')}>
            <AiOutlinePlus style={styles.icon}/>
            <div>
              <div style={styles.title}>Add Account</div>
              <div style={styles.description}>Account creation</div>
            </div>
          </div>
          <div style={styles.menuItem} onClick={() => setActiveMenu('personal settings')}>
            <AiOutlineSetting style={styles.icon}/>
            <div>
              <div style={styles.title}>Personal settings</div>
              <div style={styles.description}>Screen Theme, Alarm</div>
            </div>
          </div>
          <div style={styles.menuItem} onClick={() => setActiveMenu('service center')}>
            <AiOutlineQuestionCircle style={styles.icon}/>
            <div>
              <div style={styles.title}>Service center</div>
              <div style={styles.description}>Q&A, Frequently Asked Questions, announcement</div>
            </div>
          </div>
          <div style={styles.menuItem} onClick={() => setActiveMenu('openSource')}>
            <AiOutlineGlobal style={styles.icon}/>
            <div>
              <div style={styles.title}>Open Source</div>
              <div style={styles.description}>Licenses and Contributions</div>
            </div>
          </div>
        </div>
        <div style={styles.rightSection}>
          {renderRightSection()}
        </div>
      </div>
    </div>
  );
}

export default Settings;