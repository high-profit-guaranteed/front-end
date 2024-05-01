import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import ducklingImage from '../images/logo/Duckling2.png';

const Topbar = () => {
  const styles = {
    topbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    iconsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: '24px',
      cursor: 'pointer',
      marginLeft: '-30px',
      paddingRight: '50px'
    },
    duckling: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    ducklingText: {
      fontSize: '25px',
      fontWeight: 'bold',
      marginLeft: '-5px',
      color: 'black',
    },
    ducklingImage: {
      width: '50px',
      height: '50px',
      marginRight: '-15px', 
    },
  };

  return (
    <div style={styles.topbar}>
      <Link to="/Home" style={styles.duckling}>
        <img src={ducklingImage} alt="Duckling" style={styles.ducklingImage} />
        <span style={styles.ducklingText}>Duckling</span>
      </Link>

      <div style={styles.iconsContainer}>
        <AiOutlineBell style={styles.icon} />
        <AiOutlineUser style={styles.icon} />
      </div>
    </div>
  );
};

export default Topbar;
