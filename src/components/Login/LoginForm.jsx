import React from "react";
import "./LoginForm.css";
function LoginForm() {
    return (
        <div>
            <form action="" className="LoginForm">
                <label htmlFor="" className="loginLabel">
                    아이디
                </label>
                <input type="text" className="loginInput" />
                <label htmlFor="" className="loginLabel">
                    비밀번호
                </label>
                <input type="password" className="loginInput" />
                <button type="submit" className="loginSubmitBtn">
                    로그인
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
