import React from "react";
import styles from "./Loader.module.scss";
import { ClipLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ClipLoader color="#05299e" size={40} />
    </div>
  );
};

export default Loader;
