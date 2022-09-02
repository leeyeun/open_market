import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import ProductList from "../components/Product/ProductList";
import "./Home.css";
function Home() {
    return (
        <div className="page">
            <Header />
            <Banner />
            <ProductList />
        </div>
    );
}

export default Home;
