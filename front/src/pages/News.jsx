import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';
import news1 from '../images/news/news1.png';
import news2 from '../images/news/news2.png';
import news3 from '../images/news/news3.png';
import news4 from '../images/news/news4.png';
import news5 from '../images/news/news5.png';
import news6 from '../images/news/apple2.png';
import news7 from '../images/news/apple1.png';
import news8 from '../images/news/google1.png';
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

  // 수정
  // contentContainer과 sideNewsContainer 비율 바꿈
  contentContainer: {
    width: '60%',
    flexDirection: 'column',
  },
  sideNewsContainer: {
    width: '40%',
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
    // 추가
    overflow: 'hidden',
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
    // 추가
    overflow: 'hidden',
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
    gap: '20px',
  },
  titleButtonContainer: {
    display: 'flex',
    gap: '50px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end', // 수정 - 추가
    overflow: 'hidden',
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

// newsData 찐뉴스로 수정
const newsData = [
  {
    id: 1,
    title: "Stock Market LIVE Updates: Sensex up 230 pts, Nifty near 22,450; auto stocks lead gains",
    image: news1,
    description: "Sensex Today | Stock Market LIVE Updates | Nifty Consumer durables Index led gains, up 2.2%. Nifty Auto and Realty followed, rising 1.4% and 1% respectively. Meanwhile, Nifty IT saw the biggest decline, down 0.4%.",
    // 수정
    // url 추가
    newsUrl:"https://www.thetimes.co.uk/money-mentor/investing/should-i-buy-tesla-shares"
  },
  {
    id: 2,
    title: "A surging stock market may not need a catalyst — but it's getting one",
    image: news2,
    description: "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:",
    // 수정
    // url 추가
    newsUrl: "https://finance.yahoo.com/news/a-surging-stock-market-may-not-need-a-catalyst--but-its-getting-one-100459469.html"
  },
  {
    id: 3,
    title: "Stock Market Highlights, May 17: Sensex up 253 pts, Nifty tops 22,450; broader indices outperform",
    image: news3,
    description: "Closing Bell on May 17, 2024: Equity markets stayed range-bound on Friday after a significantly volatile session a day before. The S&P BSE Sensex settled 253 points, or 0.34 per cent, higher at 73,917 levels, while the Nifty50 ended at 22,466, up 62 points or 0.28 per cent",
    // 수정
    // url 추가
    newsUrl: "https://www.business-standard.com/markets/news/stock-market-live-updates-may-17-sensex-nifty-q4-vodafone-biocon-vedanta-pb-fintech-ipo-124051700067_1.html"
  },
  {
    id: 4,
    title: "Reddit Stock Soars After Company Inks Partnership With ChatGPT Owner OpenAI",
    image: news4,
    description: "Reddit (RDDT) shares soared nearly 12% in extended-hours trading Thursday after the company announced a partnership with OpenAI that allows the ChatGPT owner to train its artificial intelligence (AI) models using the news aggregation social network’s content",
    // 수정
    // url 추가
    newsUrl: "https://www.investopedia.com/reddit-stock-soars-after-company-inks-partnership-with-chatgpt-owner-openai-8649996"
  },
  {
    id: 5,
    title: "Stock market today: World shares retreat, though China stocks are lifted by new property measures",
    image: news5,
    description: "World shares were mostly lower on Friday, though Chinese stocks reversed earlier losses following the announcement of fresh measures to revive the ailing property market.",
    // 수정
    // url 추가
    newsUrl: "https://finance.yahoo.com/news/stock-market-today-asian-shares-070114215.html"
  },
  {
    id: 6,
    title: "Apple Shares Are Back to Winning Ways as AI Optimism Builds",
    image: news6,
    // 수정
    // url 추가
    newsUrl: "https://finance.yahoo.com/news/apple-shares-back-winning-ways-122134268.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAALcwVlRbuaS0VdmeCRpOVcUDndK1NBN34yD6Q7ycVu5Hv3MsKYiKF-tHVJXiIjhKwwrAs64-nauLUdp75B7EvuO6pMK4NdL6hkxA5OIRV2wPJDIn7eKlNy_DR3YyhVOnCevO3ruxJtYkYqYN0IitE0L4bNM9uHBEtK_RBtQFJ15k"
  },
  {
    id: 7,
    title: "World shares were mostly lower on Friday, though Chinese stocks reversed earlier losses following the announcement of fresh measures to revive the ailing property market.s",
    image: news7,
    description: "News",
    // 수정
    // url 추가
    newsUrl: "https://www.tradingview.com/news/investorplace:5f775ce51094b:0-shiny-apple-3-reasons-to-buy-and-hold-aapl-stock-forever/"
  },
  {
    id: 8,
    title: "Google surges after buying back billions of dollars of its own stock",
    image: news8,
    description: "News",
    // 수정
    // url 추가
    newsUrl: "https://edition.cnn.com/2024/04/25/tech/google-tech-earnings-dividend/index.html"
  },
];

// 메인 뉴스
function NewsCard({ newsItem }) {
  // 수정 - 추가
  // url로 갈 수 있는 hadleCardClick
  const handleCardClick = () => {
    if (newsItem.newsUrl) {
      window.open(newsItem.newsUrl, '_blank');
    }
  };
  return (
    // onClick 추가
    <div style={styles.mainCard} onClick={handleCardClick}> 
      <img src={newsItem.image} alt={newsItem.title} style={styles.newsImage} />
      <h2 style={styles.cardHeader}>{newsItem.title}</h2>
      <p style={styles.note}>{newsItem.description}</p>
    </div>
  );
}

// 부가적인 뉴스
function AdditionalCard({ newsItem }) {
  // 수정 - 추가
  // url로 갈 수 있는 hadleCardClick
  const handleCardClick = () => {
    if (newsItem.newsUrl) {
      window.open(newsItem.newsUrl, '_blank');
    }
  };
  return (
    // onClick 추가
    <div style={styles.additionalCard} onClick={handleCardClick}>
      <img src={newsItem.image} alt={newsItem.title} style={styles.additionalImage} />
      <h2 style={styles.cardHeader}>{newsItem.title}</h2>
      <p style={styles.note}>{newsItem.description}</p>
    </div>
  );
}

// 보유종목 뉴스 자세히
function SideNewsCard1({ newsItem }) {
  // 수정 - 추가
  // url로 갈 수 있는 hadleCardClick
  const handleCardClick = () => {
    if (newsItem.newsUrl) {
      window.open(newsItem.newsUrl, '_blank');
    }
  };
  return (
    <div style={styles.sideNewsCard1}>
      <div style={styles.sideNewsContent}>
        <img src={newsItem.image} alt={newsItem.title} style={styles.sideNewsIcon} />
        <div style={styles.titleButtonContainer}>
          <h2 style={styles.cardHeader}>{newsItem.title}</h2>
          {/* onClick 추가 */}
          <button style={styles.detailButton} onClick={handleCardClick}> 
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
  // 수정 - 추가
  // url로 갈 수 있는 hadleCardClick
  const handleCardClick = () => {
    if (newsItem.newsUrl) {
      window.open(newsItem.newsUrl, '_blank');
    }
  };
  return (
    <div style={styles.sideNewsCard2}>
      <div style={styles.sideNewsContent}>
        <img src={newsItem.image} alt={newsItem.title} style={styles.sideNewsIcon} />
        <div style={styles.titleButtonContainer}>
          <h2 style={styles.cardHeader}>{newsItem.title}</h2>
          {/* onClick 추가 */}
          <button style={styles.detailButton} onClick={handleCardClick}>
            자세히
            <span style={styles.arrowIcon}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function News() {
  const navigate = useNavigate();

  const handleHoldingNewsClick = () => {
    navigate('/News/Holding_news');
  };

  const handleInterestNewsClick = () => {
    navigate('/News/Interest_news');
  };

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
              <h2 style={{ ...styles.sectionHeader, cursor: 'pointer' }} onClick={handleHoldingNewsClick}>보유종목 뉴스</h2>
              {newsData.slice(5, 7).map(item => (
                <SideNewsCard1 newsItem={item} key={item.id} />
              ))}
            </div>
          </div>
          <div>
            <div style={styles.sideNewsContainer2}>
              <h2 style={{ ...styles.sectionHeader, cursor: 'pointer' }} onClick={handleInterestNewsClick}>관심종목 뉴스</h2>
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