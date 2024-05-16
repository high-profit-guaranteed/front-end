import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Topbar from '../../components/Topbar.jsx';
import apple1 from '../../images/news/apple1.png';
import apple2 from '../../images/news/apple2.png';
import apple3 from '../../images/news/apple3.png';
import apple4 from '../../images/news/apple4.png';
import tesla1 from '../../images/news/tesla1.png';
import tesla2 from '../../images/news/tesla2.png';
import tesla3 from '../../images/news/tesla3.png';
import tesla4 from '../../images/news/tesla4.png';

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
    width: '98%',
    border: '1px solid #DDD',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  newsItemImage: {
    width: '40%',
    height: '100%',
  },
  newsItemContent: {
    padding: '20px',
    width: '70%',
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

const tabs = ['Apple', 'Tesla'];

const newsData = {
  'Apple': [
    { title: "Shiny Apple? 3 Reasons to Buy and Hold AAPL Stock Forever.", date: "May 16", readTime: "5 Mins read", imageUrl: apple1, newsUrl:"https://www.tradingview.com/news/investorplace:5f775ce51094b:0-shiny-apple-3-reasons-to-buy-and-hold-aapl-stock-forever/" },
    { title: "Apple Shares Are Back to Winning Ways as AI Optimism Builds", date:"May 16", readTime: "3 Mins read", imageUrl: apple2, newsUrl:"https://finance.yahoo.com/news/apple-shares-back-winning-ways-122134268.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAALcwVlRbuaS0VdmeCRpOVcUDndK1NBN34yD6Q7ycVu5Hv3MsKYiKF-tHVJXiIjhKwwrAs64-nauLUdp75B7EvuO6pMK4NdL6hkxA5OIRV2wPJDIn7eKlNy_DR3YyhVOnCevO3ruxJtYkYqYN0IitE0L4bNM9uHBEtK_RBtQFJ15k" },
    { title: "Apple Stock Rises. It May Be Bringing OpenAI to the iPhone.", date: "May 13", readTime: "8 Mins read", imageUrl: apple3, newsUrl:"https://www.barrons.com/articles/apple-stock-price-openai-580dfcb0" },
    { title: "Apple Addiction: 3 Fund Managers Doubling Down on AAPL Stock", date: "May 16", readTime: "6 Mins read", imageUrl: apple4, newsUrl:"https://investorplace.com/2024/05/apple-addiction-3-fund-managers-doubling-down-on-aapl-stock/" }
  ],
  'Tesla': [
    { title: "Should I buy Tesla shares?", date: "May 17", readTime: "4 Mins read", imageUrl: tesla1, newsUrl:"https://www.thetimes.co.uk/money-mentor/investing/should-i-buy-tesla-shares" },
    { title: "Tesla Stock: Hold or Fold? Unpacking the Robotaxi Roadmap and EV Outlook.", date: "May 16", readTime: "3 Mins read", imageUrl: tesla2, newsUrl:"https://investorplace.com/2024/05/tesla-stock-hold-or-fold-unpacking-the-robotaxi-roadmap-and-ev-outlook/" },
    { title: "Magnificent Seven Stocks: Nvidia, Tesla Rally; Google, Meta Slide", date: "May 16", readTime: "8 Mins read", imageUrl: tesla3, newsUrl:"https://www.investors.com/research/magnificent-seven-stocks-to-buy-and-and-watch/" },
    { title: "Tesla Stock in Focus after EV Maker Launches Model Y Financing Initiative", date: "May 13", readTime: "6 Mins read", imageUrl: tesla4, newsUrl:"https://www.investopedia.com/tesla-stock-in-focus-after-ev-maker-launches-model-y-financing-initiative-8647318" }
  ]
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


function Interest_news() {
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
          <h3>More {activeTab} News</h3>
          {activeNews.map((item, index) => (
            <div key={index} style={styles.newsItem}>
              <img src={item.imageUrl} alt="News" style={styles.newsItemImage} />
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
}

export default Interest_news;