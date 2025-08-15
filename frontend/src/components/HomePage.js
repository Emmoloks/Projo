import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchCategories } from "../redux/actions/categoriesActions";
import { fetchProducts } from "../redux/actions/productActions";

import  CategoryList from "../components/CategoryList";
import  FlashSaleProducts from "../components/FlashSaleProducts";
import  CategoryProducts from "../components/CategoryProducts";
import  TopSellingProducts from "../components/TopSellingProducts";


const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return ( <>
    <div className="row">
      <div className="col">
        <CategoryList categories={categories} />
      </div>
      <div className="col">
        <FlashSaleProducts products={products} />
      </div>
      <div className="col">
        <CategoryProducts products={products} />
      </div>
      <div className="col">
        <TopSellingProducts products={products} />
      </div>
      <div className="col">
        <h1>Welcome to the Home Page</h1>
        <p>This is where you can find the latest products and categories.</p>
      </div>
      {categories.map((category) => (
        <div className="col" key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default HomePage;