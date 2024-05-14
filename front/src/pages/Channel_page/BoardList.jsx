import React, { useState } from 'react';
import Board from './board';

function BoardList() {
  const [selectedBoard, setSelectedBoard] = useState('자유게시판');

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };

  return (
    <div>
      <select value={selectedBoard} onChange={handleBoardChange}
      style={{padding: '5px 10px',
              border: '2px solid #ccc',
              borderRadius: '4px'}}>
        <option value="자유게시판">자유게시판</option>
        <option value="애플게시판">애플게시판</option>
        <option value="MS게시판">MS게시판</option>
        <option value="알파벳게시판">알파벳게시판</option>
        <option value="아마존게시판">아마존게시판</option>
        <option value="엔비디아게시판">엔비디아게시판</option>
        <option value="메타게시판">메타게시판</option>
        <option value="테슬라게시판">테슬라게시판</option>
        <option value="브로드컴게시판">브로드컴게시판</option>
        <option value="코스트코게시판">코스트코게시판</option>
        <option value="ASML게시판">ASML게시판</option>
      </select>
      <Board boardName={selectedBoard} />
    </div>
  );
}

export default BoardList;
