import { Select, SelectOption, SelectOptionGroup } from "@gravity-ui/uikit";

import styles from "./Selector.module.css";

interface SelectorProps {
  label?: string;
  value?: string[];
  placeholder?: string;
  options: (SelectOption | SelectOptionGroup)[];
  onUpdate: (e: string[]) => void;
  multiple?: boolean;
}

export const Selector = ({
  label,
  value,
  placeholder,
  options,
  onUpdate,
  multiple,
}: SelectorProps) => {
  return (
    <div className={styles.selector}>
      <Select
        value={value}
        label={label || ""}
        size={"xl"}
        width={250}
        placeholder={placeholder || ""}
        options={options}
        onUpdate={onUpdate}
        multiple={multiple}
      />
    </div>
  );
};
