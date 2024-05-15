import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import Channel from './pages/Channel';
import Settings from './pages/Settings';
import Holding_news from './pages/News_pages/Holding_news';
import Interest_news from './pages/News_pages/Interest_news';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to="/Login">Login</Link> |
        <Link to="/Home">Home</Link> |
        <Link to="/Info"> Info</Link> |
        <Link to="/News"> News</Link> |
        <Link to="/Channel"> Channel</Link> |
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/News" element={<News />} />
        <Route path="/Channel" element={<Channel />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Holding_news" element={<Holding_news />} />
        <Route path="/Interest_news" element={<Interest_news />} />
      </Routes>
    </div>
  );
}

export default App;