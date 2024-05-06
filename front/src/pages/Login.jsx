import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
// import HttpsProxyAgent from "https-proxy-agent";

function LoginPage() {
  const navigate = useNavigate();

  const [signInInputId, setSignInInputId] = useState("");
  const [signInInputPW, setSignInInputPW] = useState("");

  const handleSignInInputId = (e) => {
    setSignInInputId(e.target.value);
  };

  const handleSignInInputPW = (e) => {
    setSignInInputPW(e.target.value);
  };

  const onClickSignIn = (event) => {
    event.preventDefault();

    console.log("onClickSignIn");
    console.log("ID: ", signInInputId);
    console.log("PW: ", signInInputPW);

    // const httpsAgent = new HttpsProxyAgent({ host: "http://duckling-back.d-v.kro.kr", port: 80 });
    // axios = axios.create({ httpsAgent });

    axios
      .post(
        "http://duckling-back.d-v.kro.kr/api/signin",
        {
          uid: signInInputId,
          password: signInInputPW,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("answer");
        console.log(response.headers);
        console.log(response.data);
        navigate('/Home');
      })
      .catch((error) => {
        console.log("error: ", error);
      });

  };

  const handleChangeToSignUpClick = () => {
    const loginIn = document.getElementById("login-in");
    const loginUp = document.getElementById("login-up");
    loginIn.classList.remove("block");
    loginIn.classList.add("none");
    loginUp.classList.remove("none");
    loginUp.classList.add("block");
  };

  const handleChangeToSignInClick = () => {
    const loginIn = document.getElementById("login-in");
    const loginUp = document.getElementById("login-up");
    loginIn.classList.remove("none");
    loginIn.classList.add("block");
    loginUp.classList.remove("block");
    loginUp.classList.add("none");
  };

  return (
    <>
      <style>
        {`
        body {
            background: url('your-background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            background-color: #fffcf5;
            background-image: linear-gradient(to right top, #85D8CE, #E8CE5B);
          }
          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: "Open Sans", sans-serif;
            font-size: 0.938rem;
            color: #23004d;
          }

          h1 {
            margin: 0;
          }

          a {
            text-decoration: none;
          }

          img {
            max-width: 100%;
            height: auto;
            display: block;
          }

          .login {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }          

          .login__content {
            display: grid;
          }

          .login__forms {
            position: relative;
            height: 368px;
          }

          .login__register,
          .login__create {
            position: absolute;
            bottom: 1rem;
            width: 100%;
            background-color: #f2f2f2;
            padding: 2rem 1rem;
            border-radius: 1rem;
            text-align: center;
            box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
            animation-duration: 0.4s;
            animation-name: animateLogin;
          }

          .login__title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .login__box {
            display: grid;
            grid-template-columns: max-content 1fr;
            column-gap: 0.5rem;
            padding: 1.125rem 1rem;
            background-color: #fff;
            margin-top: 1rem;
            border-radius: 0.5rem;
          }

          .login__icon {
            font-size: 1.5rem;
            color: #005C42;
          }

          .login__input {
            border: none;
            outline: none;
            font-size: 0.938rem;
            font-weight: 700;
            color: #23004d;
            width: 100%;
          }

          .login__input::placeholder {
            font-size: 0.938rem;
            font-family: "Open Sans", sans-serif;
            color: #a49eac;
          }

          .login__remember {
            margin-top: 1rem;
            display: flex;
            align-items: center;
          }
          
          .login__checkbox {
            margin-right: 0.5rem;
          }
          
          .login__remember-label {
            font-size: 0.813rem;
            color: #a49eac;
          }          

          .login__forgot {
            display: block;
            width: max-content;
            margin-left: auto;
            margin-top: 0.5rem;
            font-size: 0.813rem;
            font-weight: 600;
            color: #a49eac;
          }

          .login__forgot-remember {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
          }          

          .login__button {
            display: block;
            padding: 1rem;
            margin: 2rem 0;
            background-color: #005C42;
            color: #fff;
            font-weight: 600;
            text-align: center;
            border-radius: 0.5rem;
            transition: 0.3s;
          }

          .login__button:hover {
            background-color: #65bf97;
          }

          .login__account {
            font-weight: 600;
            font-size: 0.813rem;
          }

          .login__signin,
          .login__signup {
            font-weight: 600;
            font-size: 0.813rem;
            color: #005C42;
            cursor: pointer;
            text-decoration: underline;
          }

          .login__account--account {
            color: #23004d;
          }

          .login__signin--signin,
          .login__signup--signup {
            color: #005C42;
            cursor: pointer;
          }

          .block {
            display: block;
          }

          .none {
            display: none;
          }

          @keyframes animateLogin {
            0% {
              transform: scale(1, 1);
            }
            50% {
              transform: scale(1.1, 1.1);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          @media screen and (min-width: 576px) {
            .login__forms {
              width: 348px;
              justify-self: center;
            }
          }

          @media screen and (min-width: 1024px) {
            .login {
              height: 100vh;
              overflow: hidden;
            }

            .login__content {
              grid-template-columns: repeat(2, max-content);
              justify-content: center;
              align-items: center;
              margin-left: 10rem;
            }

            .login__img {
              display: flex;
              width: 550px;
              height: 550px;
              background-color: #005C42;
              border-radius: 100rem;
              padding-left: 1rem;
            }

            .login__img img {
              width: 80%;
              margin-top: 0;
            }

            .login__register,
            .login__create {
              left: -11rem;
            }

            .login__register {
              bottom: -2rem;
            }

            .login__create {
              bottom: -5.5rem;
            }

            .circle-icon text {
              font-size: 3px;
              font-weight: bold;
            } 
          }
        `}
      </style>
      <div className="login">
        <div className="login__content">
          <div className="login__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="circle-icon"
            >
              <circle cx="12" cy="12" r="10" fill="#005C42" />
              <text
                x="1.2%"
                y="46%"
                textAnchor="start"
                alignmentBaseline="middle"
                fill="#fff"
                style={{ overflow: "visible" }}
              >
                DUCKLING
                <tspan x="3%" dy="9%" style={{ fontSize: "0.2em" }}>
                  데이터 분석을 통한 주식거래, 더클링
                </tspan>
              </text>
            </svg>
          </div>

          <div className="login__forms">
            <div className="login__register block" id="login-in">
              <h1 className="login__title">Sign In</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                {/* signin id 입력 */}
                <input
                  type="text"
                  placeholder="ID"
                  className="login__input"
                  name="signin_input_id"
                  value={signInInputId}
                  onChange={handleSignInInputId}
                />
              </div>
              <div className="login__box">
                <i className="bx bx-lock login__icon"></i>
                {/* signin password 입력 */}
                <input
                  type="password"
                  placeholder="Password"
                  className="login__input"
                  name="signin_input_password"
                  value={signInInputPW}
                  onChange={handleSignInInputPW}
                />
              </div>
              <div className="login__forgot-remember">
                <div className="login__remember">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="login__checkbox"
                  />
                  <label
                    htmlFor="remember-me"
                    className="login__remember-label"
                  >
                    Remember Me
                  </label>
                </div>
                <a href="#" className="login__forgot">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="login__button"
                onClick={onClickSignIn}
              >
                Sign In
              </button>
              <div>
                <span className="login__account login__a005C42ccount--account">
                  Creat Account{" "}
                </span>
                <span
                  className="login__signin login__signin--signup"
                  id="sign-up"
                  onClick={handleChangeToSignUpClick}
                >
                  Sign Up
                </span>
              </div>
            </div>
            <div className="login__create none" id="login-up">
              <h1 className="login__title">Sign up</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                {/* signup id 입력 */}
                <input type="text" placeholder="ID" className="login__input" />
              </div>
              <div className="login__box">
                <i className="bx bx-lock login__icon"></i>
                {/* signup password 입력 */}
                <input
                  type="password"
                  placeholder="Password"
                  className="login__input"
                />
              </div>
              <div className="login__box">
                <i className="bx bx-lock login__icon"></i>
                {/* signup password 확인 */}
                <input
                  type="password"
                  placeholder="Password Check"
                  className="login__input"
                />
              </div>
              <div className="login__box">
                <i className="bx bx-lock login__icon"></i>
                {/* signup name 입력 */}
                <input
                  type="Name"
                  placeholder="Name"
                  className="login__input"
                />
              </div>
              <div className="login__box">
                <i className="bx bx-at login__icon"></i>
                {/* signup email 입력 */}
                <input
                  type="email"
                  placeholder="Email"
                  className="login__input"
                />
              </div>
              <button type="submit" className="login__button">
                Sign up
              </button>
              <div>
                <span className="login__account login__account--account">
                  Already have an Account?{" "}
                </span>
                <span
                  className="login__signup login__signup--signup"
                  id="sign-in"
                  onClick={handleChangeToSignInClick}
                >
                  Sign In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
