import React from 'react';

const BoardList = () => {
  const boards = ['자유', 'Apple', 'MS', 'Alphabet', 'Amazon', 'NVIDIA', 'Meta', 'TSLA', 
                  'Broadcom', 'COST', 'ASML'];
  
  return (
    <>
      {boards.map((board, index) => (
        <option key={index} value={board}>{board}</option>
      ))}
    </>
  );
};

export default BoardList;
