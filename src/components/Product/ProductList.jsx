import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList() {
    const [allProductList, setAllProductList] = useState([]);
    const getAllProductList = () => {
        axios
            .get("https://openmarket.weniv.co.kr/products/")
            .then((response) => {
                setAllProductList(response.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getAllProductList();
    }, []);

    return (
        <div className="productWrap">
            {allProductList.results && allProductList.results.length > 0
                ? allProductList.results.map((allProductList, id) => {
                      return (
                          <div key={id}>
                              <ProductItem productList={allProductList} />
                          </div>
                      );
                  })
                : null}
        </div>
    );
}

export default ProductList;
