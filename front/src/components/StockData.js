// 각 종목들간의 정보
// 추후 수정

const stockData = {
  AAPL: { name: 'Apple', price: '$61,024', change: '+3.0%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  MSFT: { name: 'MS', price: '$58,599', change: '-12.2%', symbol: 'down', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  GOOGL: { name: 'Alphabet', price: '$56,407', change: '+2.2%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  AMZN: { name: 'Amazon', price: '$84,329', change: '+1.4%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  NVDA: { name: 'NVIDIA', price: '$11,056', change: '+4.5%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Nvidia_logo.svg' },
  META: { name: 'Meta', price: '$248,878', change: '+2.3%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo.svg' },
  TSLA: { name: 'TSLA', price: '$60,133', change: '+6.6%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png' },
  AVGO: { name: 'Broadcom', price: '$1,265,547', change: '+1.1%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Broadcom_Limited_Logo.svg' },
  COST: { name: 'COST', price: '$82,109', change: '+0.5%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Costco_Wholesale_logo_2010-10-26.svg' },
  ASML: { name: 'ASML', price: '$128,006', change: '+0.7%', symbol: 'up', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/db/ASML_Holding_logo.svg' }
};
export default stockData;