import { FC } from "react";
import RangeGauge from "./RangeGauge";

interface SpeedometerProps {
  value: number;
}

const Speedometer: FC<SpeedometerProps> = ({ value }) => (
  <RangeGauge value={value} max={300} colors={["#FFC371", "#FF5F6D"]} />
);

export default Speedometer;
