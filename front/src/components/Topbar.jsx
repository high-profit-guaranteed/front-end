import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import ducklingImage from '../images/logo/Duckling2.png';

// 스타일 정의
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
    select: {
        marginLeft: '10px',
        padding: '5px 10px',
        cursor: 'pointer',
        border: '1px solid #CCC',
        borderRadius: '5px',
    }
};

// 계좌 목록 초기 상태
const initialAccounts = ['Account 1', 'Account 2', 'Account 3'];

const Topbar = () => {
    const [accounts, setAccounts] = useState(initialAccounts); // 계좌 목록 상태

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
                <select style={styles.select}>
                    {accounts.map((account, index) => (
                        <option key={index} value={account}>{account}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Topbar;
