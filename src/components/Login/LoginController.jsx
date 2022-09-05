import React from "react";
import "./LoginController.css";

function LoginController({
    buyerClick,
    sellerClick,
    onClickBuyer,
    onClickSeller,
}) {
    return (
        <div className="LoginController">
            {buyerClick === true ? (
                <button className="LoginTypeBtn" onClick={onClickBuyer}>
                    구매회원 로그인
                </button>
            ) : (
                <button
                    className="LoginTypeBtn disabled"
                    onClick={onClickBuyer}
                >
                    구매회원 로그인
                </button>
            )}
            {sellerClick === true ? (
                <button className="LoginTypeBtn" onClick={onClickSeller}>
                    판매회원 로그인
                </button>
            ) : (
                <button
                    className="LoginTypeBtn disabled"
                    onClick={onClickSeller}
                >
                    판매회원 로그인
                </button>
            )}
        </div>
    );
}

export default LoginController;
