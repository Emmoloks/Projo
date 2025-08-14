import React from "react";
import { Link } from "react-router-dom";

const CategoryProducts = ({category, products}) => {
    const categoryProducts = products.filter(
        (product) => product.category.id === category.id
    );

    return(
        <div>
            <h2>{category.name} Products</h2>
            <ul>
                {categoryProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.slug}`}>
                            {product.name}
                        </Link>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryProducts;