import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { useNavigate, useParams } from 'react-router-dom';
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
    borderRadius: '5px',
    padding: '5px',
    fontSize: '16px',
    width: '130px',
  },
  button: {
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
};

const Channel = ({ boards, setBoards, accountId, setAccountId }) => {
  const navigate = useNavigate();

  const { ticker } = useParams();
  console.log("ticker", ticker);

  // ticker가 boards.title에 없으면 /channel/free로 리다이렉트
  const boardTitles = boards.map((board) => board.title);
  if (!boardTitles.includes(ticker)) {
    navigate('/channel/Free');
  }

  const handleBoardChange = (e) => {
    // setSelectedBoard(e.target.value);
    navigate(`/channel/${e.target.value}`);
  };

  // const addPost = (boardTitle, newPost) => {
  //   const newBoards = boards.map((board) => {
  //     if (board.title === boardTitle) {
  //       return { ...board, posts: [...board.posts, newPost] };
  //     }
  //     return board;
  //   });
  //   setBoards(newBoards);
  // };

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
    navigate(`/post/${ticker}/new`);
  };

  return (
    <>
      <Navbar accountId={accountId} setAccountId={setAccountId} />
      <Topbar accountId={accountId} setAccountId={setAccountId} />
      <div style={styles.container}>
        <div style={styles.boardcontainer}>
          <div style={styles.boardselect}>
            <select style={styles.select} onChange={handleBoardChange} value={ticker}>
              {boards.map((board, id) => (
                <option key={id} value={board.title}>
                  {board.title}
                </option>
              ))}
            </select>
            <button style={styles.button} onClick={navigateToNewPost}>게시글 작성하기</button>
          </div>
          <Board
            boardTitle={ticker}
            boards={boards}
            deletePost={deletePost}
          />
        </div>
      </div>
    </>
  );
}

export default Channel;
