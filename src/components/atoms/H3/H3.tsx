import React, { ReactNode } from "react";
import styles from "./H3.module.scss";
interface Props {
  children: ReactNode;
  white?: boolean;
}

export const H3: React.FC<Props> = (props) => {
  const { children, white } = props;
  return (
    <h3 data-is-white={white} className={styles.h3}>
      {children}
    </h3>
  );
};
