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
  AAPL: { name: 'Apple', price: '0', change: '0', symbol: '/', logo: AppleImage },
  TSLA: { name: 'Tesla', price: '0', change: '0', symbol: '/', logo: TSLAImage },
  MSFT: { name: 'Microsoft', price: '0', change: '0', symbol: '/', logo: MSImage },
  GOOG: { name: 'Alphabet', price: '0', change: '0', symbol: '/', logo: AlphabetImage },
  AMZN: { name: 'Amazon', price: '0', change: '0', symbol: '/', logo: AmazonImage },
  NVDA: { name: 'Nvidia', price: '0', change: '0', symbol: '/', logo: NVIDIAImage },
  META: { name: 'Meta', price: '0', change: '0', symbol: '/', logo: MetaImage },
  AVGO: { name: 'Broadcom', price: '0', change: '0', symbol: '/', logo: BroadcomImage },
  COST: { name: 'COST', price: '0', change: '0', symbol: '/', logo: COSTImage },
  ASML: { name: 'ASML', price: '0', change: '0', symbol: '/', logo: ASMLImage }
};
export default stockData;