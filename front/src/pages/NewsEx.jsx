import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import newsImage from '../images/news/news1.png';
import additionalImage1 from '../images/news/test.png';
import additionalImage2 from '../images/news/test1.jpg';
import sideNewsIcon from '../images/news/test2.jpg';
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: "https://duckling-back.d-v.kro.kr",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
    "Access-Control-Allow-Credentials": "true",
  },
});

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
    padding: '20px',
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






// 백엔드에서 요청 성공하면 지울
const newsData = [
  {
    id: 1,
    title: "제주항공, 작년 호텔·지상조업·IT 자회사 역대 최대 매출",
    image: newsImage,
    content: "(서울=연합뉴스) 이승연 기자 = 제주항공은 호텔, 지상조업, 정보기술(IT) 서비스 사업 등을 담당하는 자회사들이 지난해 역대 최대 매출을 기록했다고 21일 밝혔다.",
    link : "https://www.naver.com"

  },
  {
    id: 2,
    title: "새로운 IT 혁신 발표",
    image: newsImage,
    content: "최신 IT 기술들이 시장에 미치는 영향에 대한 포괄적 분석.",
    link : "www.naver.com"
  },
  {
    id: 3,
    title: "News",
    image: additionalImage1,
    content: "News",
    link : "www.naver.com"
  },
  {
    id: 4,
    title: "News",
    image: additionalImage2,
    description: "News",
    link : "www.naver.com"
  },
  {
    id: 5,
    title: "News",
    image: additionalImage2,
    description: "News",
    link : "www.naver.com"
  },
  {
    id: 6,
    title: "제주항공, 작년 호텔·지상조업·IT 자회사 역대 최대 매출",
    image: sideNewsIcon,
    description: "News",
    link : "www.naver.com"
  },
  {
    id: 7,
    title: "News",
    image: sideNewsIcon,
    description: "News",
    link : "www.naver.com"
  },
  {
    id: 8,
    title: "제주항공, 작년 호텔·지상조업·IT 자회사 역대 최대 매출",
    image: sideNewsIcon,
    description: "News",
    link : "www.naver.com"
  },
];


//link: "efgs0",
// title: "Dfsdfg",
// content: "sdfs",
// imageLink: "sdfsf",
// type: "hot"

// Extra Hot 뉴스
function NewsCard({ newsItem }) {
  return (
    <div style={styles.mainCard}>
      <a href={newsItem.link} target="_blank">
        <img src={newsItem.imageLink} alt={newsItem.title} style={styles.newsImage}/>
      </a>
      <h2 style={styles.cardHeader}>{newsItem.title}</h2>
      <p style={styles.note}>{newsItem.content}</p>
    </div>
  );
}

// Hot 뉴스
function AdditionalCard({ newsItem }) {
  return (
    <div style={styles.additionalCard}>
      <a href={newsItem.link} target="_blank">
        <img src={newsItem.imageLink} alt={newsItem.title} style={styles.additionalImage} />
      </a>
      <h2 style={styles.cardHeader}>{newsItem.title}</h2>
      <p style={styles.note}>{newsItem.content}</p>
    </div>
  );
}

// My 뉴스 자세히
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

// Interest 뉴스 자세히
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

function News({ accountId, setAccountId }) {

  const [hotNews, setHotNews] = useState([]);
  const [myNews, setMyNews] = useState([]);
  const [intNews, setIntNews] = useState([]);

  const checkHotNews = async () => {
    try {
      const response = await axiosInstance.get("https://duckling-back.d-v.kro.kr/api/checkSession");
      if (response.status === 200) {
        setHotNews(response.data.news);
      }
    } catch (error) {
      console.error(error);
    }
    /*
    {
      news: [
        {
          link: "efgs0",
          title: "Dfsdfg",
          content: "sdfs",
          imageLink: "sdfsf",
          type: "hot"
        },
        {
          link: "efgs0",
          title: "Dfsdfg",
          content: "sdfs",
          imageLink: "sdfsf",
          type: "hot"
        }
      ]
    }
    */
  }

  const checkMyNews = async () => {
    try {
      const response = await axiosInstance.get("https://duckling-back.d-v.kro.kr/api/checkSession");
      if (response.status === 200) {
        setMyNews(response.data.news);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const checkIntNews = async () => {
    try {
      const response = await axiosInstance.get("https://duckling-back.d-v.kro.kr/api/checkSession");
      if (response.status === 200) {
        setIntNews(response.data.news);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (hotNews.length === 0)
      checkHotNews();
  }, [hotNews]);

  useEffect(() => {
    if (myNews.length === 0)
      checkMyNews();
  }, [myNews]);

  useEffect(() => {
    if (intNews.length === 0)
      checkIntNews();
  }, [intNews]);

  return (
    <div>
      <Navbar accountId={accountId} setAccountId={setAccountId} />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.mainCardsContainer}>
            <NewsCard newsItem={hotNews[0]} />
            <NewsCard newsItem={hotNews[1]} />
          </div>
          <div style={styles.additionalContainer}>
            {newsData.slice(2, 5).map((item, index) => (
              <AdditionalCard newsItem={hotNews[index+2]} />
            ))}
          </div>
        </div>
        <div style={styles.sideNewsContainer}>
          <div>
            <div style={styles.sideNewsContainer1}>
              <h2 style={styles.sectionHeader}>보유종목 뉴스</h2>
              {newsData.slice(5, 7).map((item, index)=> (
                <SideNewsCard1 newsItem={myNews[index]} />
              ))}
            </div>
          </div>
          <div>
            <div style={styles.sideNewsContainer2}>
              <h2 style={styles.sectionHeader}>관심종목 뉴스</h2>
              {newsData.slice(7, 9).map((item, index) => (
                <SideNewsCard2 newsItem={intNews[index]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;