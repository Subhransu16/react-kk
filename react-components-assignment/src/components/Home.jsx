import React from "react";
import ProductCard from "./ProductCard";

function Home() {
  return (
    <section className="home">
      <h2>Welcome to Home</h2>
      <p>Here are some of our products.</p>

      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Home;