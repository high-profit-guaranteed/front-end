import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import commonStyles from '../commonStyles';

const styles = {
  container: {
    ...commonStyles.container,
  },
  input: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textArea: {
    width: '100%',
    height: '200px',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: '#fff',
  },
};

const Post = ({ location }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const selectedBoard = location?.state?.selectedBoard || '자유 게시판';
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    console.log('Submitted:', { title, content });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <h2>{selectedBoard}</h2>
        <input
          style={styles.input}
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={styles.textArea}
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, ...styles.cancelButton }}
            onClick={handleCancel}
          >
            취소
          </button>
          <button
            style={{ ...styles.button, ...styles.submitButton }}
            onClick={handleSubmit}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
