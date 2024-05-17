import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const nullAccount = ["계좌 불러오는 중...", ""]; // 계좌 정보가 없을 때의 상태

const Topbar = ({ selectAccount }) => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [accounts, setAccounts] = useState(['loading', 'loading']); // 계좌 목록 상태
  const [selectedAccount, setSelectedAccount] = useState(''); // 선택된 계좌 상태
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const navigate = useNavigate();

  // Search 창에 검색할 내용들
  const searchKeywordMap = {
    "apple": "aapl",
    "microsoft": "msft",
    "google": "goog",
    "amazon": "amzn",
    "nvidia": "nvda",
    "meta": "meta",
    "tesla": "tsla",
    "broadcom": "avgo",
    "costco": "cost",
    "asml": "asml"
  };

  const handleSelectChange = (event) => {
    // console.log(event.target.value);

    // 계좌 변경
    setSelectedAccount(event.target.value);
    if (selectAccount) selectAccount(event.target.value);
  };

  const getAccounts = async () => {
    try {
      const response = await axiosInstance.get(
        "https://duckling-back.d-v.kro.kr/api/accounts"
      );
      if (response.status === 200 && response.data.accounts.length > 0) {
        let accountList = [];
        response.data.accounts.forEach((account) => {
          accountList.push([account.accountName, account.accountId]);
        });

        setAccounts(accountList);
      } else {
        setAccounts([["계좌 정보 없음", ""]]);
      }
    } catch (error) {
      console.error(error);
      setAccounts([["계좌 조회 실패", ""]]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const executeSearch = () => {
    const keyword = searchTerm.toLowerCase();
    if (searchKeywordMap[keyword]) {
      console.log(`/detail/${searchKeywordMap[keyword]}`);
      navigate(`/detail/${searchKeywordMap[keyword]}`);
      console.log(searchKeywordMap[keyword]);
    } else {
      console.log("Searching for:", searchTerm);
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      executeSearch();
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axiosInstance.get(
          "https://duckling-back.d-v.kro.kr/api/checkSession"
        );
        if (response.status === 200 && response.data === "Success") {
          setIsLoading(false);
        }
      } catch (error) {
        // console.error(error);
        console.log("Session is not valid");
        navigate("/");
      }
    };

    checkSession();
    if (isLoading) {
      return () => {
        return <p>Loading...</p>;
      };
    } else {
      setAccounts([nullAccount]);
    }

    // 세션 체크
  }, [isLoading, navigate]);

  useEffect(() => {
    if (accounts.length === 1 && accounts[0][0] === "loading" && accounts[0][1] === "loading")
      return;
    else if (accounts.length === 1 && accounts[0][0] === nullAccount[0] && accounts[0][1] === nullAccount[1])
      getAccounts();
    else if (accounts.length === 1 && accounts[0][0] === "계좌 정보 없음" && accounts[0][1] === "")
      setSelectedAccount("-1");
    else
      setSelectedAccount(accounts[0][1]);
  }, [accounts]);

  useEffect(() => {
    if (selectedAccount !== "" && selectAccount) selectAccount(selectedAccount);
  }, [selectedAccount, selectAccount]);

  return (
    <div style={styles.topbar}>
      <Link to="/Home" style={styles.duckling}>
        <img src={ducklingImage} alt="Duckling" style={styles.ducklingImage} />
        <span style={styles.ducklingText}>Duckling</span>
      </Link>
      <div style={styles.iconsContainer}>
        <AiOutlineSearch style={{ ...styles.icon, ...styles.searchIcon }} />
        <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyDown}
        />
        <AiOutlineBell style={styles.icon} />
        <AiOutlineUser style={styles.icon} />
        <select style={styles.select} onChange={handleSelectChange} value={selectedAccount}>
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