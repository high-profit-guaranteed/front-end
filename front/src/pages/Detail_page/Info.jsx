import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Apple from "../../images/ent/apple.png";
import Microsoft from "../../images/ent/microsoft.png";
import Alphabet from "../../images/ent/alphabet.png";
import Amazon from "../../images/ent/amazon.png";
import Nvidia from "../../images/ent/nvidia.png";
import Meta from "../../images/ent/meta.png";
import Tesla from "../../images/ent/tesla.png";
import Broadcom from "../../images/ent/broadcom.png";
import Costco from "../../images/ent/costco.png";
import Asml from "../../images/ent/asml.png";
import LineChart from "./components/linechart.jsx";

const styles = {
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },

  topContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  titleContainer: {
    display: "flex",
    marginBottom: "5px",
  },

  image: {
    width: "50px",
    height: "50px",
    marginTop: "5px",
    marginRight: "10px",
  },

  contentContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  won: {
    fontSize: "18px",
  },

  percent: {
    fontSize: "16px",
    marginLeft: "10px",
  },

  lineContainer: {
    width: "100%",
    marginTop: "20px",
  },

  period: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
};

const companyInfo = {
  aapl: {
    name: "Apple",
    image: Apple,
  },
  msft: {
    name: "Microsoft",
    image: Microsoft,
  },
  goog: {
    name: "Alphabet",
    image: Alphabet,
  },
  amzn: {
    name: "Amazon",
    image: Amazon,
  },
  nvda: {
    name: "Nvidia",
    image: Nvidia,
  },
  meta: {
    name: "Meta",
    image: Meta,
  },
  tsla: {
    name: "Tesla",
    image: Tesla,
  },
  avgo: {
    name: "Broadcom",
    image: Broadcom,
  },
  cost: {
    name: "Costco",
    image: Costco,
  },
  asml: {
    name: "Asml",
    image: Asml,
  },
};

const Chart = ({ ticker }) => {
  const percentValue = +2800;
  // const { ticker } = useParams();
  const { name, image } = companyInfo[ticker.toLowerCase()] || companyInfo.aapl;
  const [term, setTerm] = useState("day");

  const handleDayClick = (e) => {
    setTerm("day");
  };

  const handleWeekClick = (e) => {
    setTerm("week");
  };

  const handleMonthClick = (e) => {
    setTerm("month");
  };

  const handle3MonthClick = (e) => {
    setTerm("3month");
  };

  const handleYearClick = (e) => {
    setTerm("year");
  };

  const handle3YearClick = (e) => {
    setTerm("3year");
  };

  return (
    <div style={styles.chartContainer}>
      <div style={styles.topContainer}>
        <div style={styles.titleContainer}>
          <img
            src={image}
            alt={name}
            style={{
              marginTop: "5px",
              marginRight: "10px",
              width: "50px",
              height: "50px",
            }}
          />
          <h2>{name}</h2>
        </div>
        <div style={styles.contentContainer}>
          <h2 style={styles.won}>22,000 USD</h2>
          <p
            style={{
              ...styles.percent,
              color: percentValue >= 0 ? "green" : "red",
            }}
          >
            {percentValue >= 0 ? "+" : ""}
            {percentValue} USD ({((percentValue / 22000) * 100).toFixed(1)}%)
          </p>
        </div>
      </div>
      <div style={styles.lineContainer}>
        <LineChart ticker={ticker.toUpperCase()} term={term} />
        <div style={styles.period}>
          <div onClick={handleDayClick}>
            <small className="small">
              1일
            </small>
          </div>
          <div onClick={handleWeekClick}>
            <small className="small">
              1주일
            </small>
          </div>
          <div onClick={handleMonthClick}>
            <small className="small">
              1개월
            </small>
          </div>
          <div onClick={handle3MonthClick}>
            <small className="small">
              3개월
            </small>
          </div>
          <div onClick={handleYearClick}>
            <small className="small">
              1년
            </small>
          </div>
          <div onClick={handle3YearClick}>
            <small className="small">
              3년
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
