import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import ducklingImage from "../images/logo/Duckling2.png";
import axios from "axios";

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
    fontSize: '26px',
    cursor: 'pointer',
    marginLeft: '10px',
    paddingRight: '20px',
    // 수정 - icon color 추가
    color: 'black'
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

  // 추가 - 추후 업데이트 예정입니다
  develop:{
    color: 'red',
    fontStyle: 'italic',
    position: 'absolute',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
    padding: '10px',
    borderRadius: '10px',
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
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

const Topbar = ({ accountId, setAccountId }) => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [accounts, setAccounts] = useState([["loading", "loading"]]); // 계좌 목록 상태
  const [selectedAccount, setSelectedAccount] = useState(accountId); // 선택된 계좌 상태
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const navigate = useNavigate();
  // 추가: 개발 메시지 상태
  const [showDevelopMessage, setShowDevelopMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  // Search 창에 검색할 내용들
  const searchKeywordMap = {
    apple: "aapl",
    microsoft: "msft",
    google: "goog",
    amazon: "amzn",
    nvidia: "nvda",
    meta: "meta",
    tesla: "tsla",
    broadcom: "avgo",
    costco: "cost",
    asml: "asml",
  };

  const handleSelectChange = (e) => {
    // console.log(event.target.value);

    // 계좌 변경
    setSelectedAccount(e.target.value);
    console.log(e.target.value);
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
      setLoading(false);
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
    if (event.key === "Enter") {
      executeSearch();
    }
  };

  // 수정 - 추가
  const handleBellClick = () => {
    setShowDevelopMessage(!showDevelopMessage); // 클릭할 때마다 메시지 상태
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

    if (isLoading) {
      checkSession();
      return () => {
        return <p>Loading...</p>;
      };
    } else {
      setAccounts([nullAccount]);
    }

    // 세션 체크
  }, [isLoading, navigate]);

  useEffect(() => {
    console.log("accounts", accounts, accountId, loading);
    // 로딩중일때는 계좌 정보를 불러오지 않음
    if (
      accounts.length === 1 &&
      accounts[0][0] === "loading" &&
      accounts[0][1] === "loading"
    )
      return;
    // 로딩이 끝났을 때
    else if (
      accounts.length === 1 &&
      accounts[0][0] === nullAccount[0] &&
      accounts[0][1] === nullAccount[1]
    )
      getAccounts();
    // 계좌 정보가 없을 때
    else if (
      accounts.length === 1 &&
      (accounts[0][0] === "계좌 정보 없음" ||
        accounts[0][0] === "계좌 조회 실패") &&
      accounts[0][1] === ""
    ) {
      setSelectedAccount("-1");
    }
    // 계좌 정보가 있을 때
    else if (!loading && !isSelected) {
      if (accountId === "" || accountId === "-1") {
        setSelectedAccount(accounts[0][1]);
      } else {
        let found = false;
        for (let account of accounts) {
          console.log("account:", account[1], accountId);
          console.log(typeof account[1], typeof accountId);
          if (account[1] === parseInt(accountId)) {
            console.log("이전 accountId found");
            setSelectedAccount(account[1]);
            found = true;
            break;
          }
        }
        if (!found) {
          console.log("이전 accountId not found:", accountId);
          setSelectedAccount(accounts[0][1]);
        }
      }
      setIsSelected(true);
    }
  }, [accounts, accountId, loading, isSelected]);

  useEffect(() => {
    // 선택된 계좌가 있을 때만 accountId 변경
    if (setAccountId) {
      setAccountId(selectedAccount);
      console.log("selectedAccount: ", selectedAccount);
    }
  }, [selectedAccount, setAccountId]);

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
        <AiOutlineBell style={styles.icon} onClick={handleBellClick} />
        {showDevelopMessage && <p style={styles.develop}>추후 업데이트 예정입니다</p>}

        {/* 수정 - profile로 가는 link 추가 */}
        <Link to = '/settings'>
          <AiOutlineUser style={styles.icon} />
        </Link>
        <select
          style={styles.select}
          onChange={handleSelectChange}
          // defaultValue={() => {
          //   if (!(
          //     (accounts.length === 1 &&
          //       accounts[0][0] === "loading" &&
          //       accounts[0][1] === "loading") ||
          //     (accounts.length === 1 &&
          //       accounts[0][0] === nullAccount[0] &&
          //       accounts[0][1] === nullAccount[1]) ||
          //     (accounts.length === 1 &&
          //       (accounts[0][0] === "계좌 정보 없음" ||
          //         accounts[0][0] === "계좌 조회 실패") &&
          //       accounts[0][1] === "")
          //   )) {
          //     return accountId;
          //   }
          // }}
          value={accountId}
        >
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
