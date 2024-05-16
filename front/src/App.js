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

import Ddetail from './pages/Info_page/Detail';
import Order from './pages/Info_page/Order';
import Stock from './pages/Info_page/Stock';
import Holding_news from './pages/News_pages/Holding_news';
import Interest_news from './pages/News_pages/Interest_news';

import Board from './pages/Channel_page/Board';
import Post from './pages/Channel_page/Post';
import NewPost from './pages/Channel_page/NewPost';
import PostDetail from './pages/Channel_page/PostDetail';

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
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/news" element={<News />} />
        <Route path="/channel" element={<Channel boards={boards} setBoards={setBoards} />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/ddetail" element={<Ddetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/stock" element={<Stock />} />
          
        <Route path="/News/Holding_news" element={<Holding_news />} />
        <Route path="/News/Interest_news" element={<Interest_news />} />

        <Route path="/board" element={<Board />} />
        <Route path="/channel/board" element={<Board />} />
        <Route path="/new-post" element={<NewPost boards={boards} setBoards={setBoards} />} />
        <Route path="/post/:postId" element={<PostDetail boards={boards} />} />
      </Routes>
    </div>
  );
}

export default App;