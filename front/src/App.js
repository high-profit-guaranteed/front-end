import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Info from './pages/Info';
import Detail from './pages/Detail';
import News from './pages/News';
import Channel from './pages/Channel';
import Settings from './pages/Settings';

import HoldingNews from './pages/News_pages/Holding_news';
import InterestNews from './pages/News_pages/Interest_news';

import Board from './pages/Channel_page/Board';
import NewPost from './pages/Channel_page/NewPost';
import Post from './pages/Channel_page/PostDetail';

const App = () => {
  const initialBoards = [
    { title: 'Free', posts: [] },
    { title: 'Apple', posts: [] },
    { title: 'MS', posts: [] },
    { title: 'Alphabet', posts: [] },
    { title: 'Amazon', posts: [] },
    { title: 'NVIDIA', posts: [] },
    { title: 'Meta', posts: [] },
    { title: 'TSLA', posts: [] },
    { title: 'Broadcom', posts: [] },
    { title: 'COST', posts: [] },
    { title: 'ASML', posts: [] },
  ];
  const [boards, setBoards] = useState(initialBoards);

  return (
    <div className="App">
      <Routes>
        {/* 좌측 메뉴바 페이지 */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/news" element={<News />} />
        <Route path="/channel/:ticker" element={<Channel boards={boards} setBoards={setBoards} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        
        {/* 종목별 상세 페이지 */}
        <Route path="/detail/:ticker" element={<Detail />} />

        {/* 보유/관심 종목 뉴스 페이지 */}
        <Route path="/News/Holding_news" element={<HoldingNews />} />
        <Route path="/News/Interest_news" element={<InterestNews />} />

        <Route path="/board" element={<Board />} />
        <Route path="/channel/board" element={<Board />} />
        <Route path="/post/:ticker/new" element={<NewPost boards={boards} setBoards={setBoards} />} />
        <Route path="/post/:ticker/:postId" element={<Post boards={boards} setBoards={setBoards} />} />
      </Routes>
    </div>
  );
}

export default App;