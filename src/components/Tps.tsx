import { FC } from "react";
import RangeGauge from "./RangeGauge";

interface TpsProps {
  value: number;
}

const Tps: FC<TpsProps> = ({ value }) => (
  <RangeGauge value={value} label="TPS" />
);

export default Tps;
