import React from "react";

const FlashSaleProducts = ({ products }) => {
  return (
    <div>
      <h2>Flash Sale Products</h2>
      <ul>
        {products
          .filter((product) => product.flashSale)
          .map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default FlashSaleProducts;