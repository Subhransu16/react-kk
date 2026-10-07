import { useState } from "react";

function ProductDetails() {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10
  });

  const updatePrice = () => {
    setProduct({
      ...product,
      price: 50000
    });
  };

  const addBrand = () => {
    setProduct({
      ...product,
      brand: "Dell"
    });
  };

  return (
    <>
      <h2>Task 3 - Product Details</h2>

      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand || "Not Added"}</p>

      <button onClick={updatePrice}>
        Update Price
      </button>

      <button onClick={addBrand}>
        Add Brand
      </button>
    </>
  );
}

export default ProductDetails;