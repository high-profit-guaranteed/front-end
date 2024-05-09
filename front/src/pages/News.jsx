import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import newsImage from '../images/news/news1.png';
import additionalImage1 from '../images/news/test.png';
import additionalImage2 from '../images/news/test1.jpg';
import sideNewsIcon from '../images/news/test2.jpg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '210px',
    marginRight: '1%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'space-between',
  },

  contentContainer: {
    display: 'flex',
    flex: '3',
    flexDirection: 'column',
  },
  sideNewsContainer: {
    display: 'flex',
    flex: '0.5',
    flexDirection: 'column',
    gap: '0px',    
    marginLeft: '6%',
    position: 'sticky',
    top: '100px',
    alignSelf: 'flex-start', 
    height: 'fit-content',
  },

  // 메인 뉴스
  mainCardsContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
    justifyContent: 'flex-start',
    gap: '20px',
  },
  mainCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },

  // 부가적인 뉴스
  additionalCard: {
    width: '100%', 
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  additionalContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '20px',
    cursor: 'pointer',
  },

  // 보유종목 뉴스 (사이드)
  sideNewsContainer1: {
    width: '80%', 
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '9%',
  },
  sideNewsCard1: {
    width: '100%',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  

  // 관심종목 뉴스 (사이드)
  sideNewsContainer2: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sideNewsCard2: {
    width: '100%',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },


  sideNewsContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },
  titleButtonContainer: {
    display: 'flex',
    gap: '50px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden', // 넘치는 내용은 숨김 처리
  },
  

  // 이미지
  newsImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    marginBottom: '10px'
  },
  additionalImage: { 
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    marginBottom: '10px'
  },
  sideNewsIcon: {
    width: '50%',
    borderRadius: '15px',
    marginBottom: '5px'
  },

  // 속성
  cardHeader: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
  },
  note: {
    fontSize: '1rem',
    color: '#666'
  },
  sectionHeader: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },

  // 자세히 버튼
  detailButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100px',
    boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
  },
  // 화살표 아이콘 스타일
  arrowIcon: {
    marginLeft: '5px',
  },  
};

const newsData = [
  {
    id: 1,
    title: "제주항공, 작년 호텔·지상조업·IT 자회사 역대 최대 매출",
    image: newsImage,
    description: "(서울=연합뉴스) 이승연 기자 = 제주항공은 호텔, 지상조업, 정보기술(IT) 서비스 사업 등을 담당하는 자회사들이 지난해 역대 최대 매출을 기록했다고 21일 밝혔다."
  },
  {
    id: 2,
    title: "새로운 IT 혁신 발표",
    image: newsImage,
    description: "최신 IT 기술들이 시장에 미치는 영향에 대한 포괄적 분석."
  },
  {
    id: 3,
    title: "News",
    image: additionalImage1,
    description: "News"
  },
  {
    id: 4,
    title: "News",
    image: additionalImage2,
    description: "News"
  },
  {
    id: 5,
    title: "News",
    image: additionalImage2,
    description: "News"
  },
  {
    id: 6,
    title: "제주항공, 작년 호텔·지상조업·IT 자회사 역대 최대 매출",
    image: sideNewsIcon,
    description: "News"
  },
  {
    id: 7,
    title: "News",
    image: sideNewsIcon,
    description: "News"
  },
  {
    id: 8,
    title: "제주항공, 작년 호텔·지상조업·IT 자회사 역대 최대 매출",
    image: sideNewsIcon,
    description: "News"
  },
];

// 메인 뉴스
function NewsCard({ newsItem }) {
  return (
    <div style={styles.mainCard}>
      <img src={newsItem.image} alt={newsItem.title} style={styles.newsImage} />
      <h2 style={styles.cardHeader}>{newsItem.title}</h2>
      <p style={styles.note}>{newsItem.description}</p>
    </div>
  );
}

// 부가적인 뉴스
function AdditionalCard({ newsItem }) {
  return (
    <div style={styles.additionalCard}>
      <img src={newsItem.image} alt={newsItem.title} style={styles.additionalImage} />
      <h2 style={styles.cardHeader}>{newsItem.title}</h2>
      <p style={styles.note}>{newsItem.description}</p>
    </div>
  );
}

// 보유종목 뉴스 자세히
function SideNewsCard1({ newsItem }) {
  return (
    <div style={styles.sideNewsCard1}>
      <div style={styles.sideNewsContent}>
        <img src={newsItem.image} alt={newsItem.title} style={styles.sideNewsIcon} />
        <div style={styles.titleButtonContainer}>
          <h2 style={styles.cardHeader}>{newsItem.title}</h2>
          <button style={styles.detailButton}>
            자세히
            <span style={styles.arrowIcon}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// 관심종목 뉴스 자세히
function SideNewsCard2({ newsItem }) {
  return (
    <div style={styles.sideNewsCard2}>
      <div style={styles.sideNewsContent}>
        <img src={newsItem.image} alt={newsItem.title} style={styles.sideNewsIcon} />
        <div style={styles.titleButtonContainer}>
          <h2 style={styles.cardHeader}>{newsItem.title}</h2>
          <button style={styles.detailButton}>
            자세히
            <span style={styles.arrowIcon}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.mainCardsContainer}>
            <NewsCard newsItem={newsData[0]} />
            <NewsCard newsItem={newsData[1]} />
          </div>
          <div style={styles.additionalContainer}>
            {newsData.slice(2, 5).map(item => (
              <AdditionalCard newsItem={item} key={item.id} />
            ))}
          </div>
        </div>
        <div style={styles.sideNewsContainer}>
          <div>
            <div style={styles.sideNewsContainer1}>
              <h2 style={styles.sectionHeader}>보유종목 뉴스</h2>
              {newsData.slice(5, 7).map(item => (
                <SideNewsCard1 newsItem={item} key={item.id} />
              ))}
            </div>
          </div>
          <div>
            <div style={styles.sideNewsContainer2}>
              <h2 style={styles.sectionHeader}>관심종목 뉴스</h2>
              {newsData.slice(7, 9).map(item => (
                <SideNewsCard2 newsItem={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;