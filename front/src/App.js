import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import Channel from './pages/Channel';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Holding_news from './Home_pages/Holding_news';
import Interest_news from './Home_pages/Interest_news';
import Holding_Portfolio from './Home_pages/Holding_Portfolio';
import Interest_Portfolio from './Home_pages/Interest_Portfolio';
import Total_assets from './Home_pages/Total_assets';
import Major_Indices from './Info_pages/Major_Indices';
import RealTime_Status from './Info_pages/RealTime_Status';
import Popular_Categories from './Info_pages/Popular_Categories';


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
        <Route path="/Home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/News" element={<News />} />
        <Route path="/Channel" element={<Channel />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Holding_news" element={<Holding_news />} />
        <Route path="/Interest_news" element={<Interest_news />} />
        <Route path="/Holding_Portfolio" element={<Holding_Portfolio />} />
        <Route path="/Interest_Portfolio" element={<Interest_Portfolio />} />
        <Route path="/Total_assets" element={<Total_assets />} />
        <Route path="/Major_Indices" element={<Major_Indices />} />
        <Route path="/RealTime_Status" element={<RealTime_Status />} />
        <Route path="/Popular_Categories" element={<Popular_Categories />} />
      </Routes>
    </div>
  );
}

export default App;