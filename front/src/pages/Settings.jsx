import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import { AiOutlineUser, AiOutlinePlus, AiOutlineSetting, 
  AiOutlineQuestionCircle, AiOutlineGlobal, AiOutlineRight } from 'react-icons/ai';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '210px',
    marginRight: '20%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'space-between',
  },
  leftSection: {
    width: '30%',
    marginRight: '20px',
    padding: '10px',
    backgroundColor: '#F3F3F3',
    borderRadius: '8px',
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
  menuItem: (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '13px',
    margin: '50px 0',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s, background-color 0.3s',
  }),
  iconBox: (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    marginRight: '10px',
    borderWidth: '1.5px', 
    borderStyle: 'solid',
    borderColor: isActive ? '#8bc78e' : '#CCCCCC',
  }),
  icon: {
    width: '20px',
    height: '20px',
    color: '#838f77',
  },
  title: (isActive) => ({
    fontWeight: 'bold',
    color: isActive ? '#8bc78e' : '#666666',
    fontSize: '16px',
    textAlign: 'left',
    marginBottom: '5px',
  }),
  description: {
    fontSize: '14px',
    color: '#838f77',
    textAlign: 'left',
  },
  arrowIcon: (isActive) => ({
    color: isActive ? '#8bc78e' : '#CCCCCC',
  }),

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
    width: '100%',
    resize: 'none'
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

  // 한국투자증권 url
  linkButton: {
    padding: '10px 20px',
    marginBottom: '20px',
    backgroundColor: '#8bc78e',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none'
  },

  //추후 업데이트 예정입니다
  develop:{
    color: '#808080',
    fontStyle: 'italic',
  },
}

const iconMapping = {
  Profile: <AiOutlineUser />,
  AddAccount: <AiOutlinePlus />,
  PersonalSettings: <AiOutlineSetting />,
  ServiceCenter: <AiOutlineQuestionCircle />,
  OpenSource: <AiOutlineGlobal />
};

function Settings() {
  const [activeMenu, setActiveMenu] = useState('Profile');

  const renderRightSection = () => {
    switch (activeMenu) {
      // 개인정보
      case 'Profile':
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
      case 'AddAccount':
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
              API KEY
              <input type="text" placeholder="Enter API KEY" style={styles.inputField} />
            </label>
            <label>
              API SECRET
              <input type="text" placeholder="Enter API SECRET KEY" style={styles.inputField} />
            </label>
            <button style={styles.button} onClick={() => console.log('Add account clicked')}>Add Account</button>
          </div>
        );
  
      // 개인설정
      case 'PersonalSettings':
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
            <p style={styles.develop}>추후 업데이트 예정입니다</p>
          </div>
        );
  
      // 고객센터
      case 'ServiceCenter':
        return (
          <div style={styles.profileDetails}>
            <h2>Service center</h2>
            <p style={styles.develop}>추후 업데이트 예정입니다</p>
          </div>
        );
  
      // 약관 오픈소스
      case 'OpenSource':
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
          {Object.keys(iconMapping).map(menuItem => (
            <div
              key={menuItem}
              style={styles.menuItem(activeMenu === menuItem)}
              onClick={() => setActiveMenu(menuItem)}
            >
              <div style={styles.iconBox(activeMenu === menuItem)}>
                {React.cloneElement(iconMapping[menuItem], {
                  style: styles.icon
                })}
              </div>
              <div>
                <div style={styles.title(activeMenu === menuItem)}>{menuItem}</div>
                <div style={styles.description}>{menuItem}</div>
              </div>
              <AiOutlineRight style={styles.arrowIcon(activeMenu === menuItem)} />
            </div>
          ))}
        </div>
        <div style={styles.rightSection}>
          {renderRightSection()}
        </div>
      </div>
    </div>
  );
}

export default Settings;