import React from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import { useParams, useNavigate } from 'react-router-dom';

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
  content: {
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
  info: {
    textAlign: 'right',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  line: {
    borderTop: '1px solid #8f8d8d',
    marginTop: '10px',
    marginBottom: '10px',
  },
};

const PostDetail = ({ boards }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIndex = parseInt(postId, 10);
  const post = boards[0].posts[postIndex];
  const boardName = boards[0].title;

  if (!post) {
    return <div>게시글이 없습니다.</div>;
  }

  const handleBackToBoard = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.title}>
          <h2>{boardName} Board</h2>
        </div>
        <div style={styles.content}>
          <h2>{post.title}</h2>
          <div style={styles.line}></div> 
          <div style={styles.info}>
            <p>작성자: {post.author}</p>
            <p>작성일: {post.date}</p>
          </div>
          <br/>
          <h2>{post.content}</h2>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleBackToBoard}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
