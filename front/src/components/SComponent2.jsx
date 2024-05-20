import React from 'react';

const SComponent2 = ({ stock }) => {
  if (!stock) return null;

  const { name, logo, price, change } = stock;

  const containerStyle = {
    display: 'flex',                // 가로로 요소를 정렬하기 위해 flex 사용
    flexDirection: 'row',           // 가로 방향으로 요소를 나열
    alignItems: 'center',           // 요소들을 세로 중앙 정렬
    justifyContent: 'space-around', // 요소들을 컨테이너의 시작 부분에 정렬
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    width: 'auto',
    boxSizing: 'border-box',
    cursor : 'pointer',
    backgroundColor: '#00ff0000',
  };

  // 로고 스타일
  const logoStyle = {
    width: '40px',
    height: '40px',
    marginRight: '15px',  // 로고와 이름 사이의 간격 조정
  };

  // 텍스트 스타일
  const textStyle = {
    margin: '0 10px',  // 텍스트 요소들 사이의 간격 조정
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <img src={logo} style={logoStyle} alt={`${name} logo`} />
      <p style={textStyle}>{price}</p>
      <p style={textStyle}>{change}</p>
    </div>
  );
};

export default SComponent2;
