import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineBook, AiOutlinePlayCircle } from 'react-icons/ai';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#005C42',
      padding: '20px 10px',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '120px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    logo: {
      marginBottom: '30px'
    },
    pageNames: {
      marginBottom: '50px',
      padding: 0, // 리스트의 패딩 제거
      listStyle: 'none' // 리스트 스타일 제거
    },
    listItem: {
      marginBottom: '20px', // 각 리스트 아이템 간격 조정
      display: 'flex', // 아이콘과 텍스트를 가로로 배열하기 위해 flex 설정
      alignItems: 'center' // 아이콘과 텍스트를 세로 중앙 정렬하기 위해 설정
    },
    logoutButton: {
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'none' // 로그아웃 버튼에 밑줄 제거
    },
    icon: {
      marginRight: '10px' // 아이콘과 텍스트 사이 간격 조정
    }
  };

  const handleLogout = () => {
    console.log("로그아웃 버튼이 클릭되었습니다.");
    // 로그아웃 처리 로직 추가
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        {/* <img src={require('../images/logo/Logo.PNG')} alt="Logo" style={styles.logo.img} /> */}
      </div>

      <div style={styles.pageNames}>
        <ul>
          <li style={styles.listItem}><AiOutlineHome style={styles.icon} /><Link to="/home" style={styles.pageNames.a}>Home</Link></li>
          <li style={styles.listItem}><AiOutlineInfoCircle style={styles.icon} /><Link to="/info" style={styles.pageNames.a}>Info</Link></li>
          <li style={styles.listItem}><AiOutlineBook style={styles.icon} /><Link to="/news" style={styles.pageNames.a}>News</Link></li>
          <li style={styles.listItem}><AiOutlinePlayCircle style={styles.icon} /><Link to="/channel" style={styles.pageNames.a}>Channel</Link></li>
        </ul>
      </div>

      <div>
        <Link to="/profile">
          {/* <img src={require('../images/navBar/profile.jpg')} alt="Profile" style={styles.profileImg} /> */}
        </Link>
      </div>

      <div>
        <Link to="/settings">
          {/* <img src={require('../images/navBar/set.PNG')} alt="Settings" style={styles.settingsImg} /> */}
        </Link>
      </div>

      <Link to="/" style={styles.logoutButton} onClick={handleLogout}>Logout</Link>
    </nav>
  );
}

export default Navbar;
