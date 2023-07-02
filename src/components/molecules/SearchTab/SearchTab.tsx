import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../../atoms/Input/Input";
import styles from "./SearchTab.module.scss";
import { products_listing, search } from "../../../endpoints";
import { useAppDispatch, useAppSelector } from "../../../redux-app/hooks";
import { usePost } from "../../../hooks/usePost";
import {
  Product,
  setCurrentProducts,
} from "../../../features/products/products-slice";
import { languages } from "../../../languages/languages";

interface ProductsResources {
  elements: Product[];
}

export const SearchTab: React.FC = () => {
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
    <div className={styles.wrapper}>
      <Input
        onChange={handleOnInputChange}
        value={searchValue}
        placeholder={searchProduct}
        name="search"
      />
    </div>
  );
};
