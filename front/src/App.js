import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HeartProvider } from './pages/Detail_page/Heart';

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

import tickerData from './data/tickerData';

const App = () => {
  // 게시판 데이터 초기값
  const initialBoards = [
    { title: 'FREE', posts: [] },
    { title: 'APPLE', posts: [] },
    { title: 'MICROSOFT', posts: [] },
    { title: 'ALPHABET', posts: [] },
    { title: 'AMAZON', posts: [] },
    { title: 'NVIDIA', posts: [] },
    { title: 'META', posts: [] },
    { title: 'TESLA', posts: [] },
    { title: 'BROADCOM', posts: [] },
    { title: 'COSTCO', posts: [] },
    { title: 'ASML', posts: [] },
  ];
  // 게시판 데이터
  const [boards, setBoards] = useState(initialBoards);

  // 계좌 id
  const [accountId, setAccountId] = useState('-1');

  useEffect(() => {
    console.log("accountId: ", accountId);
  }, [accountId]);

  return (
    <HeartProvider>
    <div className="App">
      <Routes>
        {/* 좌측 메뉴바 페이지 */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/info" element={<Info accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/news" element={<News accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/channel/:ticker" element={<Channel boards={boards} setBoards={setBoards} accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/settings" element={<Settings accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/logout" element={<Logout />} />
        
        {/* 종목별 상세 페이지 */}
        <Route path="/detail/:ticker" element={<Detail tickerData={tickerData} accountId={accountId} setAccountId={setAccountId} />} />

        {/* 보유/관심 종목 뉴스 페이지 */}
        <Route path="/News/Holding_news" element={<HoldingNews accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/News/Interest_news" element={<InterestNews accountId={accountId} setAccountId={setAccountId} />} />

        {/* 게시판 페이지 */}
        <Route path="/post/:ticker/new" element={<NewPost boards={boards} setBoards={setBoards} accountId={accountId} setAccountId={setAccountId} />} />
        <Route path="/post/:ticker/:postId" element={<Post boards={boards} setBoards={setBoards} accountId={accountId} setAccountId={setAccountId} />} />
      </Routes>
    </div>
    </HeartProvider>
  );
}

export default App;