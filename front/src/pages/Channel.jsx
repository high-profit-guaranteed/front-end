import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { useNavigate } from 'react-router-dom';
import Board from './Channel_page/Board';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '210px',
    marginRight: '20%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'space-between',
  },
  boardcontainer: {
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
  boardselect: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  select: {
    padding: '5px',
    fontSize: '16px',
    width: '130px',
  },
  button: {
    padding: '5px 10px',
    fontSize: '16px',
    marginLeft: '10px',
  },
};

const Channel = ({ boards, setBoards }) => {
  const [selectedBoard, setSelectedBoard] = useState(boards[0].title);
  const navigate = useNavigate();

  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
  };

  const addPost = (boardTitle, newPost) => {
    const newBoards = boards.map((board) => {
      if (board.title === boardTitle) {
        return { ...board, posts: [...board.posts, newPost] };
      }
      return board;
    });
    setBoards(newBoards);
  };

  const deletePost = (boardTitle, postIndex) => {
    const newBoards = boards.map((board) => {
      if (board.title === boardTitle) {
        const updatedPosts = board.posts.filter((_, index) => index !== postIndex);
        return { ...board, posts: updatedPosts };
      }
      return board;
    });
    setBoards(newBoards);
  };

  const navigateToNewPost = () => {
    navigate('/new-post', { state: { boardTitle: selectedBoard } });
  };

  return (
    <>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.boardcontainer}>
          <div style={styles.boardselect}>
            <select style={styles.select} onChange={handleBoardChange} value={selectedBoard}>
              {boards.map((board) => (
                <option key={board.title} value={board.title}>
                  {board.title}
                </option>
              ))}
            </select>
            <button style={styles.button} onClick={navigateToNewPost}>게시글 추가</button>
          </div>
          <Board
            boardTitle={selectedBoard}
            boards={boards}
            deletePost={deletePost}
          />
        </div>
      </div>
    </>
  );
}

export default Channel;
