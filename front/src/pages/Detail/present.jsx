import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  mystockContainer: {
    border: '2px solid #ccc',
    borderRadius: '20px',
    padding: '20px',
    width: '280px',
    height: '200px',
  },
  title: {
    marginTop: '-10px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  contentContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    marginBottom: '15px',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  value: {
    fontSize: '14px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
    padding: '10px',
    borderRadius: '30px',
    backgroundColor: '#54764F',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    marginLeft: '10px',
    marginRight: '10px',
  },
};

const Present = () => {
  const companyName = "NAVER";
  const navigate = useNavigate();

  const goToCommunityPage = () => {
    navigate('../Channel');
  };

  const goToNewsPage = () => {
    navigate('../News');
  };

  return (
    <div style={styles.mystockContainer}>
      <div style={styles.title}>
        {companyName}
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
      <p>최신 글 혹은 인기 글 불러오기</p>
    </div>
  );
};

export default Present;