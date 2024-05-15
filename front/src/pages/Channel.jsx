import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import commonStyles from './commonStyles';
import Board from './Channel_page/Board';
import Post from './Channel_page/Post'; // Post 컴포넌트를 임포트

const styles = {
  container: {
    ...commonStyles.container,
  },
};

function Channel({ posts, setPosts }) {
  const navigate = useNavigate();

  // 새로운 글을 추가하는 함수
  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]); // 새로운 글을 기존 게시물 목록에 추가
  };

  const handleWriteClick = () => {
    navigate('/post', { state: { onAddPost: handleAddPost } }); // Post 컴포넌트로 onAddPost 함수 전달
  };

  return (
    <>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <Board posts={posts} setPosts={setPosts} onWriteClick={handleWriteClick} />
      </div>
    </>
  );
}

export default Channel;