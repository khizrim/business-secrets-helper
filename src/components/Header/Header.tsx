import { Text } from "@gravity-ui/uikit";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Text variant={"display-1"}>Business Secrets Helper</Text>
    </header>
  );
};
