// 각 종목들간의 정보
// 추후 수정
import AppleImage from "../images/ent/apple.png";
import MSImage from "../images/ent/microsoft.png";
import AlphabetImage from "../images/ent/alphabet.png";
import AmazonImage from "../images/ent/amazon.png";
import NVIDIAImage from "../images/ent/nvidia.png";
import MetaImage from "../images/ent/meta.png";
import TSLAImage from "../images/ent/tesla.png";
import BroadcomImage from "../images/ent/broadcom.png";
import COSTImage from "../images/ent/costco.png";
import ASMLImage from "../images/ent/asml.png";


const stockData = {
  AAPL: { name: 'Apple', price: '$61,024', change: '+3.0%', symbol: 'up', logo: AppleImage },
  MSFT: { name: 'Microsoft', price: '$58,599', change: '-12.2%', symbol: 'down', logo: MSImage },
  GOOG: { name: 'Alphabet', price: '$56,407', change: '+2.2%', symbol: 'up', logo: AlphabetImage },
  AMZN: { name: 'Amazon', price: '$84,329', change: '+1.4%', symbol: 'up', logo: AmazonImage },
  NVDA: { name: 'Nvidia', price: '$11,056', change: '+4.5%', symbol: 'up', logo: NVIDIAImage },
  META: { name: 'Meta', price: '$248,878', change: '+2.3%', symbol: 'up', logo: MetaImage },
  TSLA: { name: 'Tesla', price: '$60,133', change: '+6.6%', symbol: 'up', logo: TSLAImage },
  AVGO: { name: 'Broadcom', price: '$1,265,547', change: '+1.1%', symbol: 'up', logo: BroadcomImage },
  COST: { name: 'COST', price: '$82,109', change: '+0.5%', symbol: 'up', logo: COSTImage },
  ASML: { name: 'ASML', price: '$128,006', change: '+0.7%', symbol: 'up', logo: ASMLImage }
};
export default stockData;