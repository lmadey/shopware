import React, { ChangeEvent } from "react";
import FormControl from "react-bootstrap/FormControl";
import styles from "./Input.module.scss";
interface Props {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  value: string;
}

export const Input: React.FC<Props> = ({
  placeholder,
  onChange,
  name,
  type,
  value,
}) => {
  return (
    <FormControl
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type={type ? type : "text"}
    />
  );
};
