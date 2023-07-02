import React, { ChangeEvent } from "react";
import FormSelect from "react-bootstrap/FormSelect";
import styles from "./Select.module.scss";

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<Props> = ({ options, onChange }) => {
  return (
    <FormSelect onChange={onChange} size="sm" className={styles.select}>
      {options.map((option, i) => (
        <option key={`${i}${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </FormSelect>
  );
};
