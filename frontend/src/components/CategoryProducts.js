import React from "react";
import { Link } from "react-router-dom";

const CategoryProducts = ({category, products}) => {
    // If category is not provided, return null or a placeholder
    if (!category) {
        return (
            <div className="container my-4">
                <h2 className="mb-4">All Products</h2>
                <div className="row">
                    {products?.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="btn btn-primary mt-auto"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const categoryProducts = products?.filter(
        (product) => product.category?.id === category.id
    ) || [];

    return (
        <div className="container my-4">
            <h2 className="mb-4">{category.name} Products</h2>
            <div className="row">
                {categoryProducts?.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card-img-top"
                                style={{ objectFit: "cover", height: "200px" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="btn btn-primary mt-auto"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryProducts;