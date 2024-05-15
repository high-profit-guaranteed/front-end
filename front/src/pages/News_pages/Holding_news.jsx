import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Topbar from '../../components/Topbar.jsx';
import additionalImage1 from '../../images/news/test.png';

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
  leftSection: {
    width: '55%',
    marginRight: '20px',
    padding: '10px',
    borderRadius: '8px',
  },
  rightSection: {
    width: '35%', 
    padding: '10px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  
  // leftSection
  // leftSection - top
  topSection: {
    display: 'flex',
    marginBottom: '20px',
    borderBottom: '1px solid #CCC',
    padding: '10px 0',
  },
  tab: {
    flex: '0 0 auto',
    marginRight: '15px',
    cursor: 'pointer',
    padding: '10px',
    fontWeight: 'bold',
    color: '#666',
  },
  activeTab: {
    borderBottom: '3px solid #8bc78e',
    color: 'black',
  },

  // leftSection - under
  underSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    color: '#333',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  newsCard: {
    background: '#FFF',
    border: '1px solid #DDD',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  newsImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  newsContent: {
    padding: '15px',
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  newsMeta: {
    fontSize: '12px',
    color: '#666',
  },
};

const tabs = ['Apple', 'MS', 'Alphabet', 'Amazon'];

const newsData = {
  'Apple': [
    { title: "Apple Launches New iPhone", date: "Oct 5", readTime: "5 Mins read", imageUrl: additionalImage1 },
    { title: "Apple Stock Hits New Highs", date: "Oct 12", readTime: "3 Mins read", imageUrl: additionalImage1 },
    { title: "Exploring Apple's Latest MacOS", date: "Nov 1", readTime: "8 Mins read", imageUrl: additionalImage1 },
    { title: "Apple Announces New iPad", date: "Nov 20", readTime: "6 Mins read", imageUrl: additionalImage1 }
  ],
  'MS': [
    { title: "Microsoft Releases Surface Pro", date: "Sep 22", readTime: "4 Mins read", imageUrl: additionalImage1 },
    { title: "Microsoft", date: "Oct 12", readTime: "3 Mins read", imageUrl: additionalImage1 },
    { title: "Microsoft", date: "Nov 1", readTime: "8 Mins read", imageUrl: additionalImage1 },
    { title: "Microsoft", date: "Nov 20", readTime: "6 Mins read", imageUrl: additionalImage1 }
  ],
  'Alphabet': [
    { title: "Alphabet", date: "Sep 22", readTime: "4 Mins read", imageUrl: additionalImage1 },
    { title: "Alphabet", date: "Oct 12", readTime: "3 Mins read", imageUrl: additionalImage1 },
    { title: "Alphabet", date: "Nov 1", readTime: "8 Mins read", imageUrl: additionalImage1 },
    { title: "Alphabet", date: "Nov 20", readTime: "6 Mins read", imageUrl: additionalImage1 }
  ],
  'Amazon': [
    { title: "Amazon", date: "Sep 22", readTime: "4 Mins read", imageUrl: additionalImage1 },
    { title: "Amazon", date: "Oct 12", readTime: "3 Mins read", imageUrl: additionalImage1 },
    { title: "Amazon", date: "Nov 1", readTime: "8 Mins read", imageUrl: additionalImage1 },
    { title: "Amazon", date: "Nov 20", readTime: "6 Mins read", imageUrl: additionalImage1 }
  ],
};

function getFourNewsItems(newsArray) {
    // 항상 4개의 뉴스 아이템을 반환하도록 함.
    const filledNews = [...newsArray];
    while (filledNews.length < 4) {
      // 뉴스 배열을 반복하며 4개를 채웁니다.
      filledNews.push(...newsArray);
    }
    return filledNews.slice(0, 4); // 첫 4개 아이템만 반환
}


function Holding_news() {
    // const [stocks, setStocks] = useState([]); // 보유 종목 목록 상태
    const [activeTab, setActiveTab] = useState('Apple'); // 초기 탭 설정
    const [activeNews, setActiveNews] = useState(newsData['Apple']); // 초기 뉴스 설정


    // 컴포넌트가 마운트되었을 때 보유 종목 목록을 로드
    // useEffect(() => {
    //   fetchStocks();
    // }, []);
  
    // const fetchStocks = async () => {
    //   try {
    //     const response = await fetch('/api/stocks');
    //     if (!response.ok) throw new Error('Failed to fetch stocks');
    //     const data = await response.json();
    //     setStocks(data);
    //     if (data.length > 0) {
    //       setActiveTab(data[0].name);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching stocks:', error);
    //   }
    // };
  
    // const handleTabClick = (stock) => {
    //   setActiveTab(stock.name);
    // };

    const handleClick = (tab) => {
        setActiveTab(tab);
        setActiveNews(newsData[tab]);
    };
  
    return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.topSection}>
            {tabs.map((tab, index) => (
              <div
                key={index}
                style={activeTab === tab ? {...styles.tab, ...styles.activeTab} : styles.tab}
                onClick={() => handleClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div style={styles.underSection}>
            {activeNews.map((item, index) => (
              <div key={index} style={styles.newsCard}>
                <img src={item.imageUrl} alt="News" style={styles.newsImage} />
                <div style={styles.newsContent}>
                  <div style={styles.newsTitle}>{item.title}</div>
                  <div style={styles.newsMeta}>{item.date} • {item.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.rightSection}>
          <h3>More {activeTab} News</h3>
        </div>
      </div>
    </div>
  );
}

export default Holding_news;