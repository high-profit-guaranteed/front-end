import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Topbar from '../../components/Topbar.jsx';
import google1 from '../../images/news/google1.png';
import google2 from '../../images/news/google2.png';
import google3 from '../../images/news/google3.png';
import google4 from '../../images/news/google4.png';
import google5 from '../../images/news/google5.png';
import google6 from '../../images/news/google6.png';
import google7 from '../../images/news/google7.png';
import google8 from '../../images/news/google8.png';
import microsoft1 from '../../images/news/microsoft1.png';
import microsoft2 from '../../images/news/microsoft2.png';
import microsoft3 from '../../images/news/microsoft3.png';
import microsoft4 from '../../images/news/microsoft4.png';
import microsoft5 from '../../images/news/microsoft5.png';
import microsoft6 from '../../images/news/microsoft6.png';
import microsoft7 from '../../images/news/microsoft7.png';
import microsoft8 from '../../images/news/microsoft8.png';
// 수정 - 사진 추가


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
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    cursor: 'pointer',
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

  // rightSection
  newsItem: {
    display: 'flex',
    marginBottom: '10px',
    width: '100%',
    height: '20%',
    border: '1px solid #DDD',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  newsItemImage: {
    // width 수정
    width: '100%',
    height: '100%',
  },
  newsItemContent: {
    padding: '20px',
    width: '100%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  newsItemTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  newsItemMeta: {
    fontSize: '13px',
    color: '#666',
  },
  newsItemAuthor: {
    fontSize: '13px',
    color: '#888',
    marginBottom: '7px',
  },  
};

const tabs = ['Google', 'Microsoft'];

const newsData = {
  'Google': {
    news: [
      { title: "Google surges after buying back billions of dollars of its own stock", date: "April 25", readTime: "4 Mins read", imageUrl: google1, newsUrl:"https://edition.cnn.com/2024/04/25/tech/google-tech-earnings-dividend/index.html" },
      { title: "Google CEO Sundar Pichai makes first-ever LinkedIn post: Shares Google I/O preparations", date:"May 14", readTime: "3 Mins read", imageUrl: google2, newsUrl:"https://timesofindia.indiatimes.com/technology/tech-news/google-ceo-sundar-pichai-makes-first-ever-linkedin-post-shares-google-i/o-preparations/articleshow/110115166.cms" },
      { title: "Alphabet Stock Forecast: Is GOOGL a Good Buy in 2024?", date: "April 30", readTime: "8 Mins read", imageUrl: google3, newsUrl:"https://www.techopedia.com/investing/alphabet-stock-forecast" },
      { title: "Google stock slips on Apple-ChatGPT rumors; OpenAI to reveal updates", date: "May 13", readTime: "6 Mins read", imageUrl: google4, newsUrl:"https://www.investing.com/news/stock-market-news/google-stock-slips-on-applechatgpt-rumors-openai-to-reveal-updates-3436551" }
    ],
    morenews: [
      { title: "3 Reasons to Buy Alphabet Stock Like There's No Tomorrow", date: "May 16", readTime: "4 Mins read", imageUrl: google5, newsUrl: "https://www.fool.com/investing/2024/05/16/3-reasons-buy-alphabet-stock-ai/"},
      { title: "Google stock surges on soaring profits and first-ever cash dividend", date: "April 25", readTime: "5 Mins read", imageUrl: google6, newsUrl: "https://qz.com/alphabet-google-stock-earnings-gemini-1851436696"},
      { title: "Alphabet surges past $2tn valuation as search giant announces first dividend", date: "April 27", readTime: "5 Mins read", imageUrl: google7, newsUrl: "https://www.ft.com/content/23b4b384-5971-4f91-a9c9-8a779d10b6bc"},
      { title: "Alphabet hails ‘once-in-a-generation’ AI opportunity as revenue rises", date: "April 25", readTime: "5 Mins read", imageUrl: google8, newsUrl: "https://www.theguardian.com/technology/2024/apr/25/google-revenue-quarter-one"},
    ]
  },
  'Microsoft': {
    news: [
      { title: "Microsoft Stock Outlook: Is MSFT a Millionaire-Maker AI Play to Make?", date: "May 17", readTime: "4 Mins read", imageUrl: microsoft1, newsUrl:"https://www.tradingview.com/news/investorplace:40d8cf50a094b:0-microsoft-stock-outlook-is-msft-a-millionaire-maker-ai-play-to-make/" },
      { title: "Microsoft Stock: ‘Don't Overlook This Tailwind,’ Says Piper Sandler", date: "May 17", readTime: "3 Mins read", imageUrl: microsoft2, newsUrl:"https://www.tipranks.com/news/microsoft-stock-dont-overlook-this-tailwind-says-piper-sandler" },
      { title: "Microsoft, Meta Platforms, Applied Materials, and Other Tech Stocks in Focus Today", date: "May 17", readTime: "8 Mins read", imageUrl: microsoft3, newsUrl:"https://www.barrons.com/articles/microsoft-meta-applied-materials-tech-stocks-today-1aad8957" },
      { title: "Bill Gates Sells Microsoft, Berkshire Hathaway Shares In Q1: Are These Still Top Positions?", date: "May 17", readTime: "6 Mins read", imageUrl: microsoft4, newsUrl:"https://finance.yahoo.com/news/bill-gates-sells-microsoft-berkshire-192048032.html" }
    ],
    morenews: [
      { title: "Microsoft Corp. stock underperforms Thursday when compared to competitors", date: "May 16", readTime: "4 Mins read", imageUrl: microsoft5, newsUrl: "https://www.marketwatch.com/data-news/microsoft-corp-stock-underperforms-thursday-when-compared-to-competitors-7ebf5d8e-e9c72a1f7f78"},
      { title: "5 Things to Know Before the Stock Market Opens", date: "May 16", readTime: "4 Mins read", imageUrl: microsoft6, newsUrl: "https://www.investopedia.com/5-things-to-know-before-the-stock-market-opens-may-16-2024-8649372"},
      { title: "Microsoft Unveils AMD-Powered AI Chips To Rival Nvidia: Report", date: "May 17", readTime: "5 Mins read", imageUrl: microsoft7, newsUrl: "https://finance.yahoo.com/news/microsoft-unveils-amd-powered-ai-120531968.html"},
      { title: "Why Microsoft Stock Is the Pick of the Magnificent Seven Litter", date: "May 14", readTime: "4 Mins read", imageUrl: microsoft8, newsUrl: "https://investorplace.com/2024/05/why-microsoft-stock-is-the-pick-of-the-magnificent-seven-litter/"},
    ]
  }
};

function getFourNewsItems(newsArray) {
    // 항상 4개의 뉴스 아이템을 반환하도록 함.
    const filledNews = [...newsArray];
    while (filledNews.length < 4) {
      // 뉴스 배열을 반복하며 4개를 채웁니다.
      filledNews.push(...newsArray);
    }
    return filledNews.slice(0, 4); // 첫 4개 아이템만 반환
};


function Interest_news() {
    // 수정
    const [activeTab, setActiveTab] = useState('Google'); // 초기 탭 설정
    const [activeNews, setActiveNews] = useState(newsData['Google'].news); // 초기 뉴스 설정
    const [morenewsNews, setmorenewsNews] = useState(newsData['Google'].morenews); // 초기 새로운 카테고리 뉴스 설정


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
        setActiveNews(newsData[tab].news);
        setmorenewsNews(newsData[tab].morenews); // 수정 - 추가
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
                {/* 수정 */}
                <a href={item.newsUrl} target="_blank">
                  <img src={item.imageUrl} alt="News" style={styles.newsImage} />
                </a>
                <div style={styles.newsContent}>
                  <div style={styles.newsTitle}>{item.title}</div>
                  <div style={styles.newsMeta}>{item.date} • {item.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.rightSection}>
          <h3>더 많은 {activeTab} 뉴스</h3>
          {morenewsNews.map((item, index) => (
            <div key={index} style={styles.newsItem}>
              {/* 수정 */}
              <a href={item.newsUrl} target="_blank">
                <img src={item.imageUrl} alt="News" style={styles.newsItemImage} />
              </a>
              <div style={styles.newsItemContent}>
                <div style={styles.newsItemAuthor}>By {item.author}</div>
                <div style={styles.newsItemTitle}>{item.title}</div>
                <div style={styles.newsItemMeta}>{item.date} • {item.readTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest_news;