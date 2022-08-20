import { FC } from "react";

interface SpeedometerProps {
  value: number;
}

const Speedometer: FC<SpeedometerProps> = ({ value }) => <h1>{value}</h1>;

export default Speedometer;
