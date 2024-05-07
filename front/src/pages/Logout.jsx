import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const axios1 = axios.create({
        baseURL: "http://duckling-back.d-v.kro.kr",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": window.location.origin, // CORS 문제 해결
          "Access-Control-Allow-Credentials": "true",
        },
      });

      const response = await axios1.post(
        "http://duckling-back.d-v.kro.kr/api/signout", {}
      );
      if (response.status === 200) {
        if (response.data === "success") {
          setIsLoading(false);
          navigate("/");
        }
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
