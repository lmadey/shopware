import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./ProductsView.module.scss";
import { Header } from "../../molecules/Header/Header";
import { Input } from "../../atoms/Input/Input";
import { languages } from "../../../languages/languages";
import { usePost } from "../../../hooks/usePost";
import { products_listing, search } from "../../../endpoints";
import {
  Product,
  setCurrentProducts,
} from "../../../features/products/products-slice";
import { useAppDispatch, useAppSelector } from "../../../redux-app/hooks";
import Products from "../../organisms/Products/Products";

interface ProductsResources {
  elements: Product[];
}

export const ProductsView: React.FC = () => {
  const { searchProduct } = languages.PL.labels;
  const [searchValue, setSearchValue] = useState("");
  const defaultSearchId = "e435c9763b0d44fcab67ea1c0fdb3fa0";
  const dispatch = useAppDispatch();
  const sortValue = useAppSelector((state) => state.products.sortValue);
  const [productsResources, fetchProductsResources] =
    usePost<ProductsResources>();

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      fetchProductsResources(`${products_listing}/${defaultSearchId}`, {
        order: sortValue,
      });
    } else
      fetchProductsResources(search, {
        search: searchValue,
        order: sortValue,
      });
  }, [fetchProductsResources, searchValue, sortValue]);

  useEffect(() => {
    if (productsResources.data) {
      dispatch(setCurrentProducts(productsResources.data.elements));
    }
  }, [dispatch, productsResources.data]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.input}>
          <Input
            onChange={handleOnInputChange}
            value={searchValue}
            placeholder={searchProduct}
            name="search"
          />
        </div>
        <Products />
      </main>
    </>
  );
};
