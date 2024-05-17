import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '0 5px',
    width: '100px',
    cursor: 'pointer',
  }
};

const DeletePost = ({ boardTitle, postIndex, deletePost }) => {
  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deletePost(boardTitle, postIndex);
    }
  };

  return (
    <div>
      <button style={styles.button} onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default DeletePost;
