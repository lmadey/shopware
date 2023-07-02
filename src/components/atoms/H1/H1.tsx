import React, { ReactNode } from "react";
import styles from "./H1.module.scss";
interface Props {
  children: ReactNode;
  white?: boolean;
}

export const H1: React.FC<Props> = (props) => {
  return (
    <h1 data-is-white={props.white} className={styles.h1}>
      {props.children}
    </h1>
  );
};
