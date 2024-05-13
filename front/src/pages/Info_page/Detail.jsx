import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  mystockContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
  },
  text:{
    textAlign: 'center',
    fontSize: '15px',
    marginTop: '-15px',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    borderRadius: '8px',
    padding: '20px',
  },
  line: {
    borderTop: '1px solid rgba(242, 246, 239, 1)',
    marginTop: '10px',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: 'rgba(100,120,50)',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    marginLeft: '10px',
    marginRight: '10px',
  },
  a:{
    textAlign:'center',
  },
  section: {
    //최신글 인기글 커뮤/뉴스별로 왼쪽 오른쪽 섹션 나눠서 불러오기
  }
};

const Present = () => {
  const companyName = "NAVER";
  const navigate = useNavigate();

  const goToCommunityPage = () => {
    navigate('../../Channel');
  };

  const goToNewsPage = () => {
    navigate('../../News');
  };

  return (
    <div style={styles.mystockContainer}>
      <div style={styles.title}>
        <h2>{companyName}</h2>
      </div>
      <div style={styles.text}>
        {`${companyName}는 대한민국의 인터넷 서비스 기업이다.`}
      </div>
      <div style={styles.line}></div> 
      <div style={styles.section}>
        <p style={styles.a}>최신 글 혹은 인기 글 불러오기</p>
      </div>
      <div style={styles.buttonContainer}>
        <div style={styles.button} onClick={goToCommunityPage}>
          Community
        </div>
        <div style={styles.button} onClick={goToNewsPage}>
          News
        </div>
      </div>
      <br></br><br></br>
    </div>
  );
};

export default Present;