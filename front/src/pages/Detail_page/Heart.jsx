import React, { createContext, useState } from 'react';

export const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]); //likedItems에 관심종목 저장

  const toggleLike = (item) => {
    setLikedItems((prevItems) =>
      prevItems.includes(item) ? prevItems.filter((i) => i !== item) : [...prevItems, item]
    );
  };

  return (
    <HeartContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </HeartContext.Provider>
  );
};