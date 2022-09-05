import React from "react";
import { useState } from "react";
import BuyerLogin from "./BuyerLogin";
import LoginController from "./LoginController";
import SellerLogin from "./SellerLogin";

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

    return (
        <div>
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
