import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import ducklingImage from "../images/logo/Duckling2.png";
import axios from "axios";

// 스타일 정의
const styles = {
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    backgroundColor: "#F8F9FA",
    borderBottom: "1px solid #E1E4E8",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    fontSize: "26px",
    cursor: "pointer",
    marginLeft: "10px",
    paddingRight: "20px",
  },
  searchIcon: {
    position: "absolute",
    left: "1px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#ccc",
  },
  searchInput: {
    padding: "10px 25px 8px 45px",
    border: "1px solid #CCC",
    borderRadius: "20px",
    outline: "none",
    width: "180px",
    marginRight: "20px",
  },
  duckling: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
  },
  ducklingText: {
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: "-5px",
    color: "black",
  },
  ducklingImage: {
    width: "60px",
    height: "60px",
    marginRight: "-15px",
  },
  select: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer",
    border: "1px solid #CCC",
    borderRadius: "5px",
  },
};

const axiosInstance = axios.create({
  baseURL: "https://duckling-back.d-v.kro.kr",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
    "Access-Control-Allow-Credentials": "true",
  },
});

const nullAccount = ["", ""]; // 계좌 정보가 없을 때의 상태

const Topbar = ({selectAccount}) => {
  const [accounts, setAccounts] = useState([nullAccount]); // 계좌 목록 상태
  const [selectedAccount, setSelectedAccount] = useState(''); // 선택된 계좌 상태

  const getAccounts = async () => {
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/accounts"
      );
      if (response.status === 200) {
        let accountList = [];
        response.data.accounts.forEach(account => {
          accountList.push([account.accountName, account.accountId]);
        });
        
        setAccounts(accountList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    // console.log(event.target.value);
  
    // 계좌 변경
    setSelectedAccount(event.target.value);
    if (selectAccount) selectAccount(event.target.value);
  }

  useEffect(() => {
    if (accounts.length === 1 && accounts[0] === nullAccount) getAccounts();
    else setSelectedAccount(accounts[0][1]);
  }, [accounts]);

  return (
    <div style={styles.topbar}>
      <Link to="/Home" style={styles.duckling}>
        <img src={ducklingImage} alt="Duckling" style={styles.ducklingImage} />
        <span style={styles.ducklingText}>Duckling</span>
      </Link>
      <div style={styles.iconsContainer}>
        <AiOutlineSearch style={{ ...styles.icon, ...styles.searchIcon }} />
        <input type="text" placeholder="Search" style={styles.searchInput} />
        <AiOutlineBell style={styles.icon} />
        <AiOutlineUser style={styles.icon} />
        <select style={styles.select} onChange={handleSelectChange}>
          {accounts.map((account, index) => (
            <option key={index} value={account[1]}>
              {account[0]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Topbar;
