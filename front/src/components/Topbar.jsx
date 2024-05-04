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
            padding: '0px 20px',
            backgroundColor: '#F8F9FA',
            borderBottom: '1px solid #E1E4E8',
        },
        iconsContainer: {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
        },
        icon: {
            fontSize: '26px',
            cursor: 'pointer',
            marginLeft: '10px',
            paddingRight: '20px'
        },
        searchIcon: {
            position: 'absolute',
            left: '1px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ccc'
        },
        searchInput: {
            padding: '10px 25px 8px 45px', 
            border: '1px solid #CCC',
            borderRadius: '20px',
            outline: 'none',
            width: '180px',
            marginRight: '20px',
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
            width: '60px',
            height: '60px',
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
                <AiOutlineSearch style={{ ...styles.icon, ...styles.searchIcon }} />
                <input type="text" placeholder="Search" style={styles.searchInput} />
                <AiOutlineBell style={styles.icon} />
                <AiOutlineUser style={styles.icon} />
            </div>
        </div>
    );
}

export default Topbar;