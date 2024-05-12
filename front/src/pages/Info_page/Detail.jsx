import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  mystockContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '530px',
    height: '250px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  contentContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    marginBottom: '15px',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
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
      <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '5px' }}>
        {`${companyName}는 대한민국의 인터넷 서비스 기업이다.`}
      </div>
      <br></br><hr></hr><br></br>
      <div style={styles.buttonContainer}>
        <div style={styles.button} onClick={goToCommunityPage}>
          Community
        </div>
        <div style={styles.button} onClick={goToNewsPage}>
          News
        </div>
      </div>
      <br></br><br></br>
      <p style={styles.a}>최신 글 혹은 인기 글 불러오기</p>
    </div>
  );
};

export default Present;