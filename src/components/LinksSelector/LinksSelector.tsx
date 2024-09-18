import { LANDINGS } from "../../constants/landings";
import Selector from "../Selector";

export const LinksSelector = ({
  value,
  onUpdate,
}: {
  value?: string[];
  onUpdate: (e: string[]) => void;
}) => {
  return (
    <Selector
      label={"Links"}
      value={value}
      options={LANDINGS}
      multiple={true}
      onUpdate={onUpdate}
    />
  );
};
