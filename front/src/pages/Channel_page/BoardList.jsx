import React from 'react';
import Board from './Board';

function BoardList({ selectedBoard }) {
  return (
    <div>
      <Board board={selectedBoard} />
    </div>
  );
}

export default BoardList;
