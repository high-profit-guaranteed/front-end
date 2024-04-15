import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #85D8CE, #E8CE5B)',
      padding: '1px 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    },
    logo: {
      img: {
        width: '80px',
        marginRight: '30px'
      }
    },
    pageNames: {
      ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
      },
      li: {
        display: 'inline-block',
        marginRight: '20px'
      },
      a: {
        color: '#fff',
        textDecoration: 'none'
      }
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '100px'
    },
    searchBoxImg: {
      width: '20px',
      marginRight: '10px'
    },
    searchBoxInput: {
      padding: '5px',
      border: 'none',
      borderRadius: '5px',
      outline: 'none'
    },
    profileImg: {
      width: '30px',
      marginLeft: '15px'
    },
    settingsImg: {
      width: '30px',
      marginLeft: '15px'
    },
    logoutButton: {
      color: '#fff',
      marginLeft: '15px',
      cursor: 'pointer'
    }
  };

  const handleLogout = () => {
    console.log("로그아웃 버튼이 클릭되었습니다.");
    window.location.href = '/';
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src={require('../images/logo/Logo.PNG')} alt="Logo" style={styles.logo.img} />
      </div>

      <div style={styles.pageNames}>
        <ul style={styles.pageNames.ul}>
          <li style={styles.pageNames.li}><Link to="/home" style={styles.pageNames.a}>Home</Link></li>
          <li style={styles.pageNames.li}><Link to="/info" style={styles.pageNames.a}>Info</Link></li>
          <li style={styles.pageNames.li}><Link to="/news" style={styles.pageNames.a}>News</Link></li>
          <li style={styles.pageNames.li}><Link to="/channel" style={styles.pageNames.a}>Channel</Link></li>
        </ul>
      </div>

      <div style={styles.searchBox}>
        <img src={require('../images/navBar/find1.png')} alt="Search" style={styles.searchBoxImg} />
        <input type="text" placeholder="Search..." style={styles.searchBoxInput} />
      </div>

      <div>
        <Link to="/profile">
          <img src={require('../images/navBar/profile.jpg')} alt="Profile" style={styles.profileImg} />
        </Link>
      </div>

      <div>
        <Link to="/settings">
          <img src={require('../images/navBar/set.PNG')} alt="Settings" style={styles.settingsImg} />
        </Link>
      </div>

      <div style={styles.logoutButton} onClick={handleLogout}>Logout</div>
    </nav>
  );
}

export default Navbar;
