import React from 'react';
// import AmazonLogo from "../images/logo/Duckling2.png";

const styles = {
    stockItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '8px',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif'
    },
    logoArea: {
        width: '40px',
        height: '40px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '12px'
    },
    name: {
        fontSize: '16px',
        fontWeight: 'bold'
    },
    price: {
        fontSize: '14px'
    },
    change: {
        fontSize: '14px',
        color: '#4CAF50'
    }
};

function Amazon() {
    return (
        <div style={styles.stockItem}>
            <div style={styles.logoArea}>
                {/* <img src={AmazonLogo} alt="AmazonLogo" style={styles.AmazonLogo} /> */}
            </div>
            <div style={styles.details}>
                <div style={styles.name}>Amazon</div>
                <div style={styles.price}>1,025원</div>
                <div style={styles.change}>+47 (4.8%)</div>
            </div>
        </div>
    );
}

export default Amazon;