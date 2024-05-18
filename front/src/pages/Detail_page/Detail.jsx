import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  downsection: {
    display: 'flex',
    width: '100%',
    height: '90%',
    justifyContent: 'space-between',
  },
  leftsection: {
    width: '55%',
  },
  rightsection: {
    width: '38%',
    flexDirection: 'column',
  },
  title: {
    height: '35%',
    textAlign: 'center',
  },
  text: {
    height: '80%',
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '-15px',
    backgroundColor: 'rgba(242, 246, 239, 1)',
    padding: '10px 15px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  buttonContainer: {
    marginTop: '-15px',
    marginLeft: '10px',
    flexDirection: 'column',
    height: '100%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "25px",
  },
  button: {
    width: '100%',
    fontSize: '18px',
    padding: '20px 10px',
    borderRadius: '10px',
    backgroundColor: '#8bc78e',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '5px 0',
  },
  line: {
    borderTop: '1px solid rgba(207, 207, 207)',
    width: '100%',
  },
};

const Detail = () => {
  const { ticker } = useParams();
  const navigate = useNavigate();
  const companyName = "Apple Inc.";
  const companyInfo = {
    aapl: {
      name: 'APPLE',
      description: '혁신적인 제품으로 유명한 미국의 기술 기업으로, iPhone, iPad, Mac 등의 제품을 제공합니다.',
      link: 'Apple'
    },
    msft: {
      name: 'MICROSOFT',
      description: `미국의 소프트웨어 기업으로, Windows 운영 체제와 Office 제품군으로 잘 알려져 있습니다.`,
      link: 'MS'
    },
    goog: {
      name: 'ALPHABET',
      description: `Google의 소유주로, 검색 엔진, 온라인 광고, 클라우드 컴퓨팅 등 다양한 온라인 서비스를 제공합니다.`,
      link: 'Alphabet'
    },
    amzn: {
      name: 'AMAZON',
      description: '미국의 전자 상거래 및 인공지능 기업으로, 전 세계적으로 온라인 쇼핑과 클라우드 컴퓨팅 서비스를 제공합니다.',
      link: 'Amazon'
    },
    nvda: {
      name: 'NVIDIA',
      description: '그래픽 처리 장치 및 시각 컴퓨팅 기술을 제공하는 미국의 기술 기업으로, 인공지능 및 자율 주행 차량 분야에서 주목받고 있습니다.',
      link: 'NVIDIA'
    },
    meta: {
      name: 'META',
      description: '소셜 네트워크 서비스인 Facebook의 소유주로, 메타버스와 가상 현실 기술을 중심으로 다양한 온라인 플랫폼을 제공합니다.',
      link: 'Meta'
    },
    tsla: {
      name: 'TESLA',
      description: '전기 자동차와 관련된 기술을 개발 및 생산하는 미국의 자동차 제조 기업으로, 혁신적인 자율 주행 기술로 유명합니다.',
      link: 'TSLA'
    },
    avgo: {
      name: 'BROADCOM',
      description: '반도체 및 인프라 솔루션을 제공하는 글로벌한 기술 기업으로, 네트워크 및 통신 분야에서 선두 주자입니다.',
      link: 'Broadcom'
    },
    cost: {
      name: 'COSTCO',
      description: '미국의 대형 멤버십 창고 클럽 체인으로, 저렴한 가격에 고품질의 제품을 대량으로 판매합니다.',
      link: 'COST'
    },
    asml: {
      name: 'ASML',
      description: '네덜란드의 반도체 장비 제조 기업으로, 미세한 반도체 패턴을 제조하기 위한 노광 장비를 공급합니다.',
      link: 'ASML'
    }
  };  

  const info = companyInfo[ticker.toLowerCase()] || companyInfo.aapl;

  tickerData.map((data) => {
    if (data["Symbol"].toLowerCase() === ticker) {
      console.log(data);
    }
    return null;
  });

  const goToCommunityPage = () => {
    const company = Object.values(companyInfo).find(company => company.name.toUpperCase() === info.name.toUpperCase());
    if (company) {
      navigate(`/channel/${company.link}`);
    } else {
      // 해당하는 회사 정보가 없는 경우 예외 처리
      console.error(`Company not found for ticker: ${ticker}`);
    }
  };
  

  const goToNewsPage = () => {
    navigate(`/news`);
  };

  return (
    <div style={styles.mystockContainer}>
      <div style={styles.title}>
        <h2>{info.name}</h2>
      </div>
      <div style={styles.downsection}>
        <div style={styles.leftsection}>
          <div style={styles.text}>
            {info.description}
          </div>
        </div>
        <div style={styles.rightsection}>
          <div style={styles.buttonContainer}>
            <div style={styles.button} onClick={goToCommunityPage}>
              Community
            </div>
            <div style={styles.line}></div> 
            <div style={styles.button} onClick={goToNewsPage}>
              News
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
