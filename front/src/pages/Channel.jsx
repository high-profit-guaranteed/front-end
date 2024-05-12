import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import commonStyles from './commonStyles.jsx';
import BoardList from './Channel_page/BoardList.jsx';

const styles = {
  container: {
    ...commonStyles.container,
  },
  selectContainer: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

function Channel() {
  const [selectedBoard, setSelectedBoard] = useState('자유게시판');

  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
  };

  useEffect(() => {
    setSelectedBoard('자유게시판');
  }, []);

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.selectContainer}>
          <select value={selectedBoard} onChange={handleBoardChange} style={styles.select}>
            <option value="자유게시판">자유게시판</option>
            <option value="네이버 게시판">네이버 게시판</option>
          </select>
        </div>
        <BoardList selectedBoard={selectedBoard} />
      </div>
    </div>
  );
}

export default Channel;
