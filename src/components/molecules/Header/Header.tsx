import React, { ChangeEvent } from "react";
import { H1 } from "../../atoms/H1/H1";
import { languages } from "../../../languages/languages";
import { Option, Select } from "../Select/Select";
import styles from "./Header.module.scss";
import {
  AvailableSortings,
  setSortValue,
} from "../../../features/products/products-slice";
import { useAppDispatch } from "../../../redux-app/hooks";
export const Header: React.FC = () => {
  const { shopwareListing, priceLow, priceHigh, selectSort } =
    languages.PL.labels;

  const options: Option[] = [
    { label: selectSort, value: AvailableSortings.None },
    { label: priceLow, value: AvailableSortings.PriceAscending },
    { label: priceHigh, value: AvailableSortings.PriceDescending },
  ];

  const dispatch = useAppDispatch();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as AvailableSortings;
    dispatch(setSortValue(value));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <H1 white>{shopwareListing}</H1>
        <Select onChange={handleSelect} options={options} />
      </div>
    </header>
  );
};
