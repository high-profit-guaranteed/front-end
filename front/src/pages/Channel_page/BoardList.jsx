import React from 'react';

const BoardList = () => {
  const boards = ['자유 게시판', '애플 게시판', 'MS 게시판', '알파벳 게시판', '아마존 게시판', '엔비디아 게시판',
                  '메타 게시판', '테슬라 게시판', '브로드컴 게시판', '코스트코 게시판', 'ASML 게시판'];
  
  return (
    <>
      {boards.map((board, index) => (
        <option key={index} value={board}>{board}</option>
      ))}
    </>
  );
};

export default BoardList;
