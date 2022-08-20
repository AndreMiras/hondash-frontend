import { FC } from "react";

interface SpeedometerProps {
  value: number;
}

const Speedometer: FC<SpeedometerProps> = ({ value }) => (
  <p className="fs-1">{value}</p>
);

export default Speedometer;
