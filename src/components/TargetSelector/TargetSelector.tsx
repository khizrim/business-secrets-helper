import { TARGET_SITES } from "../../constants/targets";
import Selector from "../Selector";

export const TargetSelector = ({
  value,
  onUpdate,
}: {
  value: string[];
  onUpdate: (e: string[]) => void;
}) => {
  return (
    <Selector
      label={"Target"}
      value={value}
      options={TARGET_SITES}
      onUpdate={onUpdate}
    />
  );
};
