import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineBook, AiOutlinePlayCircle, AiOutlineLogout, AiOutlineUser, AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
import ducklingImage from '../images/logo/Duckling2.png';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px 10px',
      position: 'fixed',
      top: 30,
      left: 10,
      height: '100%',
      width: '150px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    pageNames: {
      marginBottom: '50px',
      padding: 0,
      listStyle: 'none'
    },
    listItem: {
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center'
    },
    logoutButton: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '18px',
      color: 'black'
    },
    icon: {
      marginRight: '10px',
      marginLeft: '-30px',
      cursor: 'pointer'
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '18px'
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '2px',
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '20px',
      boxSizing: 'border-box'
    },
    searchIcon: {
      marginRight: '3px',
      cursor: 'pointer'
    },
    searchInput: {
      border: 'none',
      outline: 'none',
      width: '100%',
      fontSize: '16px',
      paddingLeft: '5px'
    }
  };

  const handleLogout = () => {
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.searchBox}>
        <AiOutlineSearch style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
        />
      </div>

      <div style={styles.pageNames}>
        <ul>
          <li style={styles.listItem}>
            <AiOutlineHome
              style={styles.icon}
              onClick={() => window.location.href = "/home"}
            />
            <Link to="/home" style={styles.link}>
              Home
            </Link>
          </li>
          <li style={styles.listItem}>
            <AiOutlineInfoCircle
              style={styles.icon}
              onClick={() => window.location.href = "/info"}
            />
            <Link to="/info" style={styles.link}>
              Info
            </Link>
          </li>
          <li style={styles.listItem}>
            <AiOutlineBook
              style={styles.icon}
              onClick={() => window.location.href = "/news"}
            />
            <Link to="/news" style={styles.link}>
              News
            </Link>
          </li>
          <li style={styles.listItem}>
            <AiOutlinePlayCircle
              style={styles.icon}
              onClick={() => window.location.href = "/channel"}
            />
            <Link to="/channel" style={styles.link}>
              Channel
            </Link>
          </li>
          <li style={styles.listItem}>
            <AiOutlineLogout
              style={styles.icon}
              onClick={() => {
                handleLogout();
                window.location.href = "/";
              }}
            />
            <span
              style={styles.logoutButton}
              onClick={() => {
                handleLogout();
                window.location.href = "/";
              }}
            >
              Logout
            </span>
          </li>
          <li style={styles.listItem}>
            <AiOutlineUser
              style={styles.icon}
              onClick={() => window.location.href = "/profile"}
            />
            <Link to="/profile" style={styles.link}>
              Profile
            </Link>
          </li>
          <li style={styles.listItem}>
            <AiOutlineSetting
              style={styles.icon}
              onClick={() => window.location.href = "/settings"}
            />
            <Link to="/settings" style={styles.link}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
