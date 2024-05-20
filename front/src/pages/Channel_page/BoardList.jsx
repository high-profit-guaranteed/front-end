import React from 'react';

const BoardList = () => {
  const boards = ['FREE', 'APPLE', 'MS', 'ALPHABET', 'AMAZON', 'NVIDIA', 'META', 'LSTM', 
                  'BROADCOM', 'COST', 'ASML'];
  
  return (
    <>
      {boards.map((board, index) => (
        <option key={index} value={board}>{board}</option>
      ))}
    </>
  );
};

export default BoardList;
