import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import newsImage from '../images/news/news1.png';
import newsImage2 from '../images/news/qjflfrjdla.png';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1.3r 1fr',
    marginLeft: '210px',
    marginRight: '1%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    alignItems: 'center',  // 이미지를 중앙 정렬하기 위해 변경
    justifyContent: 'center'  // 이미지를 중앙 정렬하기 위해 추가
  },
  // mainCard: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   backgroundColor: '#fff',
  //   borderRadius: '10px',
  //   alignItems: 'center',
  //   marginBottom: '20px',
  //   padding: '20px',
  //   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  // },
  // smallCard: {
  // },
  // newsImage: {
  //   width: '50%',
  //   height: 'auto',
  //   borderRadius: '30px',
  // },
  image:{
    width: '100%',
    borderRadius: '15px',
  }
};

// const newsData = [
//   {
//     id: 1,
//     title: "제주항공, 작년 호텔.지상조업.IT 자회사 역대 최대 매출",
//     image: newsImage,
//     description: "(서울=연합뉴스) 이승연 기자 = 제주항공은 호텔, 지상조업, 정보기술(IT) 서비스 사업 등을 담당하는 자회사들이 지난해 역대 최대 매출을 기록했다고 21일 밝혔다."
//   },
//   // 다른 뉴스 아이템들...
// ];

// function NewsCard({ newsItem, isMain }) {
//   const cardStyle = isMain ? styles.mainCard : styles.smallCard;
//   return (
//     <div style={cardStyle}>
//       <img src={newsItem.image} alt="News" style={isMain ? styles.mainImage : styles.smallImage} />
//       <h2 style={styles.cardHeader}>{newsItem.title}</h2>
//       {isMain && <p style={styles.note}>{newsItem.description}</p>}
//     </div>
//   );
// }


function News() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <img src={newsImage2} alt="News Image" style={styles.image} />
        {/* {newsData.map((item, index) => (
          <NewsCard newsItem={item} isMain={index === 0} />
        ))} */}
      </div>
    </div>
  );
}

export default News;