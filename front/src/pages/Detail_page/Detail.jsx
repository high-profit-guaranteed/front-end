import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import path from 'path';

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
    padding: '10px',
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
    width: '20%',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#8bc78e',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '0px 5px',
  },
  develop:{
    fontStyle: 'italic',
    textAlign:'center',
    color: '#808080',
  },
};

const Detail = ({ stockData }) => {
  const ticker = useParams();
  const companyName = "Apple Inc.";
  const navigate = useNavigate();
  // const stockData = XLSX.readFile(path.join(__dirname, 'nas_code.xlsx'), { type: 'binary' });

  console.log(stockData.Sheets['Sheet1']['D'].v);

  const goToCommunityPage = () => {
    navigate(`/channel/${ticker}`);
  };

  const goToNewsPage = () => {
    navigate('/news');
  };

  return (
    <div style={styles.mystockContainer}>
      <div style={styles.title}>
        <h2>{companyName}</h2>
      </div>
      <div style={styles.text}>
        <pre>
        {`미국 캘리포니아의 아이폰, 아이패드, 애플 워치, 에어팟, 아이맥, 맥북, 맥 스튜디오와
맥 프로, 홈팟, 비전 프로, 에어태그 등의 하드웨어와
그 제품들의 iOS, iPadOS, Watch OS, macOS, Vision OS, TV OS 등의 소프트웨어를
설계, 디자인하는 기업이다.`}
        </pre>
      </div>
      <div style={styles.line}></div> 
      <div style={styles.section}>
        <p style={styles.develop}>추후 개발 예정입니다</p>
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

export default Detail;
