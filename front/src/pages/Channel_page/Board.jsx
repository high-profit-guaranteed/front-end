import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardList from './BoardList';

const styles = {
  boardContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  boardSelect: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  boardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  postButton: {
    padding: '5px 10px',
    fontSize: '16px',
  },
  tableStyle: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  tableRowEven: {
    backgroundColor: '#f9f9f9',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
};

const Board = ({ posts, setPosts }) => {
  const [selectedBoard, setSelectedBoard] = useState('자유');
  const navigate = useNavigate();

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };
  
  const handleWriteClick = () => {
    navigate('/post');
  };

  // 새로운 글을 추가하는 함수
  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]); // 새로운 글을 기존 게시물 목록에 추가
  };

  return (
    <div style={styles.boardContainer}>
      <select style={styles.boardSelect} value={selectedBoard} onChange={handleBoardChange}>
        <BoardList />
      </select>
      <div style={styles.boardHeader}>
        <h2>{selectedBoard} 게시판</h2>
        <button style={styles.postButton} onClick={handleWriteClick}>글 올리기</button>
      </div>
      <table style={styles.tableStyle}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>번호</th>
            <th style={styles.tableCell}>제목</th>
            <th style={styles.tableCell}>작성자</th>
            <th style={styles.tableCell}>작성일</th>
            <th style={styles.tableCell}>댓글수</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.tableRowEven : null}>
              <td style={styles.tableCell}>{index + 1}</td>
              <td style={styles.tableCell}>{post.title}</td>
              <td style={styles.tableCell}>{post.author}</td>
              <td style={styles.tableCell}>{post.date}</td>
              <td style={styles.tableCell}>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;