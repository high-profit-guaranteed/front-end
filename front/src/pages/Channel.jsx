import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import commonStyles from './commonStyles';
import Board from './Channel_page/Board';

const styles = {
  container: {
    ...commonStyles.container,
  },
};

function Channel({ posts, setPosts }) {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/post');
  };

  const addPost = (title, author, date, views) => {
    const newPost = { title, author, date, views };
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <Board posts={posts} setPosts={setPosts} onWriteClick={handleWriteClick} onAddPost={addPost} />
      </div>
    </div>
  );
}

export default Channel;
