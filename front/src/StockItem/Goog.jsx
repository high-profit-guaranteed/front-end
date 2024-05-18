import React from 'react';
// import GoogLogo from "../images/logo/Duckling2.png";

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

function Goog() {
    return (
        <div style={styles.stockItem}>
            <div style={styles.logoArea}>
                {/* <img src={GoogLogo} alt="GoogLogo" style={styles.GoogLogo} /> */}
            </div>
            <div style={styles.details}>
                <div style={styles.name}>Goog</div>
                <div style={styles.price}>1,025원</div>
                <div style={styles.change}>+47 (4.8%)</div>
            </div>
        </div>
    );
}

export default Goog;