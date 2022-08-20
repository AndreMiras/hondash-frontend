import { FC } from "react";
import GaugeChart from "react-gauge-chart";

interface TpsProps {
  value: number;
}

const Tps: FC<TpsProps> = ({ value }) => (
  <>
    <GaugeChart percent={value / 100} animate={false} />
    <p>TPS</p>
  </>
);

export default Tps;
