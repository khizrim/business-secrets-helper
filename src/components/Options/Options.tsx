import LinksSelector from "../LinksSelector";
import TargetSelector from "../TargetSelector";

import styles from "./Options.module.css";

export const Options = (props: {
  onTargetUpdate: (e: string[]) => void;
  value: string[];
  onLinksUpdate: (e: string[]) => void;
}) => (
  <div className={styles.options}>
    <TargetSelector onUpdate={props.onTargetUpdate} value={props.value} />
    <LinksSelector onUpdate={props.onLinksUpdate} />
  </div>
);
