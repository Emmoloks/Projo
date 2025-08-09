import React from "react";
import { Link } from "react-router-dom";

const TopSellingProducts = ({ products }) => {
  return (
    <div>
      <h2>Top Selling Products</h2>
      <ul>
        {products
          .filter((product) => product.topSelling)
          .map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TopSellingProducts;
