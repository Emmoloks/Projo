import { useEffect } from "react";
import React, (useEffect)
import {useDispatch, useSelector} from "react-redux";
import { fetchCategories } from "../redux/actions/categoriesActions";
import { fetchProducts } from "../redux/actions/productsActions";

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

  return (
    <div>
      <CategoryList categories={categories} />
      <FlashSaleProducts products={products} />
      <CategoryProducts products={products} />
      <TopSellingProducts products={products} />
    </div>
  );
};

export default HomePage;
