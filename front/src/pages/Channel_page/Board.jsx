import React from 'react';
import PostList from './PostList';
import NewPostButton from './NewPostButton';

const styles = {
  container: {
    marginTop: '40px',
    marginLeft: '25px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginLeft: '50px',
  },
};

function Board({ board }) {
  return (
    <div style={styles.container}>
      <PostList board={board} />
      <div style={styles.buttonContainer}>
        <NewPostButton />
      </div>
    </div>
  );
}

export default Board;
