import React from 'react';
import Navbar from '../components/Navbar.jsx';

function Info() {
  return (
    <div>
      <Navbar />
      <br/><br/>
      {/* <h1>INFO</h1> */}
 
      <div className="info-container">

        <div className="info-major">
          <h2>주요지수</h2>
          <p>테슬라 29.32</p>
        </div>

        <div className="info-realtime">
          <h2>실시간현황</h2>
          <p>거래량 인기 급상승 급하락 관심</p>
          <img src="../images/del/news-1.jpg" alt="Graph" />
        </div>

        <div className="info-popular">
          <h2>인기 카테고리</h2>
          <p>삼성전자</p>
          <p>LG전자</p>
        </div>

      </div>

      <style>{`
        .info-container {
          display: grid;
          gap: 20px;
          margin-top: 30px;
          margin-left: 250px;
          margin-right: 250px;
          justify-content: center;
          grid-template-columns: repeat(3, 1fr);
        }

        .info-major {
          grid-column: span 3;
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 5px;
        }

        .info-realtime {
          grid-column: 1;
          grid-row: 2;
          background-color: #f0f0f0;
          width: 350px;
          padding: 20px;
          border-radius: 5px;
        }

        .info-popular {
          grid-column: 3;
          grid-row: 2;
          background-color: #f0f0f0;
          width: 350px;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}

export default Info;
