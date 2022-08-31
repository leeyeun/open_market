import React from "react";
import "./ProductItem.css";
function ProductItem(productList) {
    console.log(productList);
    console.log(productList.productList.product_name);
    return (
        <div>
            <img
                className="productImage"
                src={productList.productList.image}
                alt=""
            />
            <div className="productName">
                {productList.productList.product_name}
            </div>
            <div className="productInfo">
                {productList.productList.product_info}
            </div>
            <div className="prooductPrice">{productList.productList.price}</div>
        </div>
    );
}

export default ProductItem;
