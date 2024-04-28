import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineBook, AiOutlinePlayCircle, AiOutlineLogout, AiOutlineUser, AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
import ducklingImage from '../images/logo/Duckling2.png';

const Navbar = () => {
  const location = useLocation();

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
      marginLeft: '-20px', 
      marginRight: '10px',
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
    },
    activeItem: {
      backgroundColor: '#65bf97',
      width: '100%',
      marginLeft: '-10px',
      padding: '2px 10px',
      borderRadius: '10px'
    }
  };

  const handleLogout = () => {
  };

  const menuItems = [
    { Icon: AiOutlineHome, text: 'Home', path: '/home' },
    { Icon: AiOutlineInfoCircle, text: 'Info', path: '/info' },
    { Icon: AiOutlineBook, text: 'News', path: '/news' },
    { Icon: AiOutlinePlayCircle, text: 'Channel', path: '/channel' },
    { Icon: AiOutlineUser, text: 'Profile', path: '/profile' },
    { Icon: AiOutlineSetting, text: 'Settings', path: '/settings' },
    { Icon: AiOutlineLogout, text: 'Logout', path: '/' }
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.searchBox}>
        <AiOutlineSearch style={styles.searchIcon} />
        <input
          type="text"
          style={styles.searchInput}
        />
      </div>

      <div style={styles.pageNames}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} style={{ ...styles.listItem, ...(location.pathname === item.path && styles.activeItem) }}>
              <item.Icon
                style={{ ...styles.icon, ...(location.pathname === item.path && styles.activeItem) }}
                onClick={() => window.location.href = item.path}
              />
              <Link to={item.path} style={{ ...styles.link, ...(location.pathname === item.path && styles.activeItem) }}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
