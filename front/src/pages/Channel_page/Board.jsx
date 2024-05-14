import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  boardcontainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  titlecontainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

function Board({ boardName }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // 글 작성하기
  const handlePostSubmit = (newPost) => {
    newPost.date = new Date().toLocaleDateString();
    newPost.comments = [];
    setPosts([...posts, newPost]);
  };

  const handleWriteButtonClick = () => {
    navigate('/write');
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  // 한 페이지에 보여줄 글 수
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div style={styles.boardcontainer}>
      <div>
        <div style={styles.titlecontainer}>
          <h2>{boardName}</h2>
          <button onClick={handleWriteButtonClick}>글 작성하기</button>
        </div>
        <ul>
          {currentPosts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>작성자: {post.author}</p>
              <p>날짜: {post.date}</p>
              <p>댓글 수: {post.comments.length}</p>
            </li>
          ))}
        </ul>
      </div>
      {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
        <button key={i} onClick={() => changePage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Board;
