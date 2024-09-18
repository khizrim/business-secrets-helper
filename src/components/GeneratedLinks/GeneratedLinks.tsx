import { ArrowUpRightFromSquare, Xmark } from "@gravity-ui/icons";
import {
  Button,
  ClipboardButton,
  Icon,
  Link,
  List,
  Text,
} from "@gravity-ui/uikit";

import styles from "./GeneratedLinks.module.css";

export const GeneratedLinks = (props: {
  items: string[];
  onClick: () => void;
  onReset: () => void;
}) => {
  const renderLink = (link: string) => (
    <div className={styles.link}>
      <Link href={link} target={"_blank"}>
        <Text variant={"body-2"}>{link}</Text>
      </Link>
      <ClipboardButton size={"l"} text={link} />
    </div>
  );

  return (
    <div className={styles.generatedLinks}>
      {Boolean(props.items.length) && (
        <>
          <List
            className={styles.list}
            filterClassName={styles.filter}
            itemsClassName={styles.items}
            itemClassName={styles.item}
            virtualized={false}
            filterPlaceholder={"Filter urls"}
            size={"xl"}
            items={props.items}
            renderItem={renderLink}
          />
          <div className={styles.buttons}>
            <Button size="xl" onClick={props.onClick}>
              Open all urls
              <Icon data={ArrowUpRightFromSquare} />
            </Button>
            <Button size="xl" onClick={props.onReset}>
              <Icon data={Xmark} />
            </Button>
            <ClipboardButton size={"xl"} text={props.items.join("\n")} />
          </div>
        </>
      )}
    </div>
  );
};
