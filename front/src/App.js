  import React from "react";
  import { Routes, Route } from "react-router-dom";

  import Login from './pages/Login';
  import Logout from './pages/Logout';
  import Home from './pages/Home';
  import Info from './pages/Info';
  import News from './pages/News';
  import Channel from './pages/Channel';
  import Profile from './pages/Profile';
  import Settings from './pages/Settings';

  import Detail from './pages/Info_page/Detail';
  import Order from './pages/Info_page/Order';
  import Stock from './pages/Info_page/Stock';

  import Board from './pages/Channel_page/Board';
  import BoardList from './pages/Channel_page/BoardList';
  import Post from './pages/Channel_page/Post';

  function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/news" element={<News />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/detail" element={<Detail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/stock" element={<Stock />} />

          <Route path="/board" element={<Board />} />
          <Route path="/boardlist" element={<BoardList />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    );
  }

  export default App;
