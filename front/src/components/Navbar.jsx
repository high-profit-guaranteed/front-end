import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineHome, AiOutlineInfoCircle, AiOutlineBook,
  AiOutlinePlayCircle, AiOutlineUser, AiOutlineSetting, AiOutlineLogout
} from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();

  const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px 10px',
      position: 'fixed',
      top: 65,
      left: 0,
      height: '100%',
      width: '180px',
      borderRadius: '20px',
      marginLeft: '5px',
      marginRight: 'auto',
      background: '#fff',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      width: '100%',
      color: 'black',
      textDecoration: 'none'
    },
    active: {
      background: '#F3F3F3',
      width: '130px',
      borderRadius: '10px'
    },
    logo: {
      marginBottom: '40px'
    },
    icon: {
      marginRight: '20px'
    }
  };

  const menuItems = [
    { Icon: AiOutlineHome, text: 'Home', path: '/home' },
    { Icon: AiOutlineInfoCircle, text: 'Info', path: '/info' },
    { Icon: AiOutlineBook, text: 'News', path: '/news' },
    { Icon: AiOutlinePlayCircle, text: 'Channel', path: '/channel/Free' },
    { Icon: AiOutlineSetting, text: 'Settings', path: '/settings' },
    { Icon: AiOutlineLogout, text: 'Logout', path: '/logout' }
  ];

  return (
    <div style={styles.navbar}>
      {menuItems.map(({ Icon, text, path, action }) => (
        <Link
          key={text}
          to={path}
          onClick={action}
          style={{ ...styles.link, ...(location.pathname === path ? styles.active : {}) }}
        >
          <Icon style={styles.icon} />
          <span>{text}</span>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
