import { Button, TextArea } from "@gravity-ui/uikit";

import Options from "../Options";

import styles from "./Form.module.css";

export const Form = (props: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onTargetSelect: (e: string[]) => void;
  target: string[];
  onLinksSelect: (e: string[]) => void;
  links: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
}) => (
  <form className={styles.form} onSubmit={props.onSubmit}>
    <Options
      value={props.target}
      onTargetUpdate={props.onTargetSelect}
      onLinksUpdate={props.onLinksSelect}
    />
    <TextArea
      size={"xl"}
      minRows={10}
      hasClear
      value={props.links}
      onChange={props.onChange}
    />
    <div className={styles.buttons}>
      <Button
        size="xl"
        view="action"
        type="submit"
        disabled={props.links.length === 0 || props.target.length === 0}
      >
        Generate
      </Button>
      <Button
        size="xl"
        type="button"
        onClick={props.onClick}
        disabled={props.links.length === 0}
      >
        Trim
      </Button>
    </div>
  </form>
);
