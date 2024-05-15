import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, handleAddPost }}>
      {children}
    </PostContext.Provider>
  );
};
