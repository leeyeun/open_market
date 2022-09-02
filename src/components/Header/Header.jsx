import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
    return (
        <div className="topMainMenu">
            <header className="topHeader">
                <nav className="topNav">
                    <h1 className="topLogo"></h1>
                    <input
                        type="text"
                        className="topSearch"
                        placeholder="상품을 검색해보세요!"
                    />
                </nav>
                <ul className="topUl">
                    <li className="cart">
                        <Link to="/cart" className="cartBtn">
                            장바구니
                        </Link>
                    </li>
                    <li className="login">
                        <Link to="/login" className="loginBtn">
                            로그인
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
