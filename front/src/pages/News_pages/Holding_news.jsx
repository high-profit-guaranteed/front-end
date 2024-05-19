import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Topbar from '../../components/Topbar.jsx';
import apple1 from '../../images/news/apple1.png';
import apple2 from '../../images/news/apple2.png';
import apple3 from '../../images/news/apple3.png';
import apple4 from '../../images/news/apple4.png';
import apple5 from '../../images/news/apple5.png';
import apple6 from '../../images/news/apple6.png';
import apple7 from '../../images/news/apple7.png';
import apple8 from '../../images/news/apple8.png';
import tesla1 from '../../images/news/tesla1.png';
import tesla2 from '../../images/news/tesla2.png';
import tesla3 from '../../images/news/tesla3.png';
import tesla4 from '../../images/news/tesla4.png';
import tesla5 from '../../images/news/tesla5.png';
import tesla6 from '../../images/news/tesla6.png';
import tesla7 from '../../images/news/tesla7.png';
import tesla8 from '../../images/news/tesla8.png';
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

const tabs = ['Apple', 'Tesla'];

// newsData 수정 및 추가
const newsData = {
  'Apple': {
    news: [
      { title: "Shiny Apple? 3 Reasons to Buy and Hold AAPL Stock Forever.", date: "May 16", readTime: "5 Mins read", imageUrl: apple1, newsUrl:"https://www.tradingview.com/news/investorplace:5f775ce51094b:0-shiny-apple-3-reasons-to-buy-and-hold-aapl-stock-forever/", author: "John Doe" },
      { title: "Apple Shares Are Back to Winning Ways as AI Optimism Builds", date:"May 16", readTime: "3 Mins read", imageUrl: apple2, newsUrl:"https://finance.yahoo.com/news/apple-shares-back-winning-ways-122134268.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAALcwVlRbuaS0VdmeCRpOVcUDndK1NBN34yD6Q7ycVu5Hv3MsKYiKF-tHVJXiIjhKwwrAs64-nauLUdp75B7EvuO6pMK4NdL6hkxA5OIRV2wPJDIn7eKlNy_DR3YyhVOnCevO3ruxJtYkYqYN0IitE0L4bNM9uHBEtK_RBtQFJ15k", author: "Jane Smith" },
      { title: "Apple Stock Rises. It May Be Bringing OpenAI to the iPhone.", date: "May 13", readTime: "8 Mins read", imageUrl: apple3, newsUrl:"https://www.barrons.com/articles/apple-stock-price-openai-580dfcb0", author: "Tom Brown" },
      { title: "Apple Addiction: 3 Fund Managers Doubling Down on AAPL Stock", date: "May 16", readTime: "6 Mins read", imageUrl: apple4, newsUrl:"https://investorplace.com/2024/05/apple-addiction-3-fund-managers-doubling-down-on-aapl-stock/", author: "Lisa White" }
    ],
    morenews: [
      { title: "If You'd Invested $10,000 in Apple Stock 5 Years Ago, Here's How Much You'd Have Today", date: "May 14", readTime: "4 Mins read", imageUrl: apple5, newsUrl: "https://www.fool.com/investing/2024/05/14/if-youd-invested-10000-in-apple-stock-5-years-ago/"},
      { title: "Wall Street predicts Apple stock price for next 12 months", date: "May 15", readTime: "5 Mins read", imageUrl: apple6, newsUrl: "https://finbold.com/wall-street-predicts-apple-stock-price-for-next-12-months/"},
      { title: "Why Is Everyone Talking About Apple Stock?", date: "May 15", readTime: "5 Mins read", imageUrl: apple7, newsUrl: "https://finance.yahoo.com/news/why-everyone-talking-apple-stock-091500174.html"},
      { title: "Ahead of Earnings, is Apple Stock a Buy or Sell?", date: "April 25", readTime: "5 Mins read", imageUrl: apple8, newsUrl: "https://www.morningstar.co.uk/uk/news/248663/ahead-of-earnings-is-apple-stock-a-buy-or-sell.aspx"},
    ]
  },
  'Tesla': {
    news: [
      { title: "Should I buy Tesla shares?", date: "May 17", readTime: "4 Mins read", imageUrl: tesla1, newsUrl:"https://www.thetimes.co.uk/money-mentor/investing/should-i-buy-tesla-shares", author: "David Green" },
      { title: "Tesla Stock: Hold or Fold? Unpacking the Robotaxi Roadmap and EV Outlook.", date: "May 16", readTime: "3 Mins read", imageUrl: tesla2, newsUrl:"https://investorplace.com/2024/05/tesla-stock-hold-or-fold-unpacking-the-robotaxi-roadmap-and-ev-outlook/", author: "Megan Brown" },
      { title: "Magnificent Seven Stocks: Nvidia, Tesla Rally; Google, Meta Slide", date: "May 16", readTime: "8 Mins read", imageUrl: tesla3, newsUrl:"https://www.investors.com/research/magnificent-seven-stocks-to-buy-and-and-watch/", author: "Samuel Clark" },
      { title: "Tesla Stock in Focus after EV Maker Launches Model Y Financing Initiative", date: "May 13", readTime: "6 Mins read", imageUrl: tesla4, newsUrl:"https://www.investopedia.com/tesla-stock-in-focus-after-ev-maker-launches-model-y-financing-initiative-8647318", author: "Emily Harris" }
    ],
    morenews: [
      { title: "Tesla Rehires Some Supercharger Workers Weeks After Musk’s Cuts", date: "May 14", readTime: "4 Mins read", imageUrl: tesla5, newsUrl: "https://www.bloomberg.com/news/articles/2024-05-13/tesla-rehires-some-supercharger-workers-weeks-after-musk-s-culling"},
      { title: "Tesla Stock Shrugs Off Legal Problems. Why They Are No Surprise.", date: "May 17", readTime: "4 Mins read", imageUrl: tesla6, newsUrl: "https://www.barrons.com/articles/tesla-musk-stock-price-77cafc10"},
      { title: "This Lidar Stock Is Surging While Tesla Looks To Build Self-Driving Data Center In China", date: "May 17", readTime: "5 Mins read", imageUrl: tesla7, newsUrl: "https://www.investors.com/news/lidar-stock-tesla-autonomous-driving/"},
      { title: "Tesla's stock surges on optimism for Musk's affordable car line-up", date: "April 24", readTime: "4 Mins read", imageUrl: tesla8, newsUrl: "https://www.euronews.com/business/2024/04/24/teslas-stock-surges-on-optimism-for-musks-affordable-car-line-up"},
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
}


function Holding_news() {
    // 수정
    const [activeTab, setActiveTab] = useState('Apple'); // 초기 탭 설정
    const [activeNews, setActiveNews] = useState(newsData['Apple'].news); // 초기 뉴스 설정
    const [morenewsNews, setmorenewsNews] = useState(newsData['Apple'].morenews); // 초기 새로운 카테고리 뉴스 설정


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
  }
  
  export default Holding_news;