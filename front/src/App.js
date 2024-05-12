import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import Channel from './pages/Channel';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
// import Holding_news from './Home_pages/Holding_news';
// import Interest_news from './Home_pages/Interest_news';
// import Holding_Portfolio from './Home_pages/Holding_Portfolio';
// import Interest_Portfolio from './Home_pages/Interest_Portfolio';
// import Total_assets from './Home_pages/Total_assets';
import Detail from './pages/Info_pages/Detail.jsx';
import Order from './pages/Info_pages/Order';
import Stock from './pages/Info_pages/Stock';

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
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        {/* <Route path="/Holding_news" element={<Holding_news />} />
        <Route path="/Interest_news" element={<Interest_news />} />
        <Route path="/Holding_Portfolio" element={<Holding_Portfolio />} />
        <Route path="/Interest_Portfolio" element={<Interest_Portfolio />} />
        <Route path="/Total_assets" element={<Total_assets />} /> */}
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Stock" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;