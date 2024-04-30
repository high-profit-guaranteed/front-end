import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';

const style = {
  container: {
    marginLeft: '200px',
    marginRight: '30%',
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "30px",
    borderRadius: "50px",
    background: "#f2f6ef",
    boxShadow: "20px 20px 24px 10px rgba(0,0,0,0.1)",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  column: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    position: "relative",
    overflow: "hidden",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  heading: {
    cursor: 'pointer',
    width: "100%",
    fontSize: "1.3vw",
    textAlign: "center",
    color: "#000",
  },
  bar: {
    alignSelf: "stretch",
    width: "100%",
    height: "5px",
    borderRadius: "10px",
    background: "#5a5a5a",
  },
  whiteBox: {
    gridColumn: "1 / -1",
    width: "100%",
    height: "300px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "5px",
  },
};


function Home() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <br/><br/>

      <div style={style.container}>
        <div style={style.section}>
          <div style={style.column}>
            <p style={style.heading}>총 자산 평균</p>
            <div style={style.bar} />
          </div>
          <div style={style.column}>
            <p style={style.heading}>주문 내역</p>
            <div style={style.bar} />
          </div>
          <div style={style.column}>
            <p style={style.heading}>대기 주문</p>
            <div style={style.bar} />
          </div>
        </div>
        <div style={style.whiteBox}></div>
      </div>
    </div>
  );
}

export default Home;