import React from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "../../../features/products/products-slice";
import { languages } from "../../../languages/languages";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = (props) => {
  const { price, currency } = languages.PL.labels;
  const {
    translated: { name, description },
    calculatedPrice: { totalPrice },
  } = props.product;

  return (
    <div className={styles.card}>
      <strong>{name}</strong>
      <p>{description}</p>
      <span className={styles.price}>
        <strong>{price}</strong>
        <p>{`${totalPrice.toFixed(2)} ${currency}`}</p>
      </span>
    </div>
  );
};

export default ProductCard;
