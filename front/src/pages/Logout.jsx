import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://duckling-back.d-v.kro.kr",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
    "Access-Control-Allow-Credentials": "true",
  },
});

function Logout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.post(
        "https://duckling-back.d-v.kro.kr/api/signout", {}
      );
      if (response.status === 200) {
        setIsLoading(false);
        navigate("/");
      }
    };
    getData();
  });

  if (isLoading) {
    return (
      <div>
        <h1>Logout</h1>
      </div>
    );
  }
}

export default Logout;
