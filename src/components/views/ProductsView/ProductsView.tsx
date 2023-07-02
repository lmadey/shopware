import React from "react";
import styles from "./ProductsView.module.scss";
import { Header } from "../../molecules/Header/Header";
import Products from "../../organisms/Products/Products";
import { SearchTab } from "../../molecules/SearchTab/SearchTab";

export const ProductsView: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SearchTab />
        <Products />
      </main>
    </>
  );
};
