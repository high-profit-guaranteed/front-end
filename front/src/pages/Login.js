import React from "react";
import "./Login.css";

function Login() {
    return (
        <div>
            <div className="Circle"></div>
            <div className="login">
                <h3>Login Now</h3>
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="finds">
                    <p><a href="#">ID 찾기 </a></p>
                    <p><a href="#">PW 찾기 </a></p>
                    <input type="checkbox" />ID 저장
                </div>
                <div class="buttons">
                    <button><strong>Login now</strong></button>
                    <p><a href="#">Create account</a></p>
                </div>
            </div>
        </div>

        
    );
}

export default Login;