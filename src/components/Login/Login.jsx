import React from "react";
import { useState } from "react";
import BuyerLogin from "./BuyerLogin";
import LoginController from "./LoginController";
import SellerLogin from "./SellerLogin";
import LogoImage from "../../assets/Logo-hodu.png";
import "./Login.css";
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
    </div>
  );
}

export default Login;
