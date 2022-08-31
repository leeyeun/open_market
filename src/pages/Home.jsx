import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/Product/ProductList";
import "./Home.css";
function Home() {
    return (
        <div className="page">
            <Header />
            <ProductList />
        </div>
    );
}

export default Home;
