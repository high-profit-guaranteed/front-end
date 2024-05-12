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
            <option value="애플 게시판">애플 게시판</option>
            <option value="MS 게시판">MS 게시판</option>
            <option value="알파벳 게시판">알파벳 게시판</option>
            <option value="아마존 게시판">아마존 게시판</option>
            <option value="엔비디아 게시판">엔비디아 게시판</option>
            <option value="메타 게시판">메타 게시판</option>
            <option value="테슬라 게시판">테슬라 게시판</option>
            <option value="브로드컴 게시판">브로드컴 게시판</option>
            <option value="코스트코 게시판">코스트코 게시판</option>
            <option value="ASML 게시판">ASML 게시판</option>
          </select>
        </div>
        <BoardList selectedBoard={selectedBoard} />
      </div>
    </div>
  );
}

export default Channel;
