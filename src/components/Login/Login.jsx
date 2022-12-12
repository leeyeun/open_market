import React from "react";
import { useState } from "react";
import BuyerLogin from "./BuyerLogin";
import LoginController from "./LoginController";
import SellerLogin from "./SellerLogin";
import LogoImage from "../../assets/Logo-hodu.png";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [buyerClick, setBuyerClick] = useState(true);
  const [sellerClick, setSellerClick] = useState(false);

  const onClickBuyer = () => {
    setBuyerClick(true);
    setSellerClick(false);
  };

  const onClickSeller = () => {
    setBuyerClick(false);
    setSellerClick(true);
  };

  const ongoHome = () => {
    window.location = "/";
  };
  return (
    <div>
      <img
        src={LogoImage}
        alt="logo"
        className="loginLogoImage"
        onClick={ongoHome}
      ></img>
      <LoginController
        buyerClick={buyerClick}
        sellerClick={sellerClick}
        onClickBuyer={onClickBuyer}
        onClickSeller={onClickSeller}
      />
      {buyerClick === true && sellerClick === false ? (
        <BuyerLogin />
      ) : (
        <SellerLogin />
      )}
      <p className="loginOther">
        <Link to="/signup" className="signUpLink">
          회원가입
        </Link>
        <Link to="/">비밀번호 찾기</Link>
      </p>
    </div>
  );
}

export default Login;
