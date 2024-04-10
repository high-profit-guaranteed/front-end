import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <h3>Login</h3>
            <div className="inputs">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <p><a href="#">Forgot Password?</a></p>
            </div>
            <button>Login</button>
            <div className="footere">
                <p><a href="#">ID 찾기</a></p>
                <p><a href="#">PW 찾기</a></p>
                <input type="checkbox" id="idSave" />
                <label htmlFor="idSave">ID 저장</label>
            </div>
        </div>
    );
}

export default Login;
