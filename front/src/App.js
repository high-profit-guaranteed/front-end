import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import Channel from './pages/Channel';

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
      </Routes>
    </div>
  );
}

export default App;