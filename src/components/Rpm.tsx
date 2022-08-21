import { FC } from "react";
import RangeGauge from "./RangeGauge";

interface RpmProps {
  value: number;
}

const Rpm: FC<RpmProps> = ({ value }) => (
  <RangeGauge
    value={value}
    max={9000}
    label="RPM"
    colors={["#FFC371", "#FF5F6D"]}
  />
);

export default Rpm;
