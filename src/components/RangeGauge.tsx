import { FC } from "react";
import GaugeChart from "react-gauge-chart";

interface RangeGaugeProps {
  min: number;
  max: number;
  value: number;
  label: string;
}

const RangeGauge: FC<RangeGaugeProps> = ({ value, min, max, label }) => (
  <>
    <GaugeChart
      percent={(value - min) / max}
      animate={false}
      formatTextValue={() => value.toString()}
    />
    <span>
      {min} {label} {max}
    </span>
  </>
);
RangeGauge.defaultProps = {
  min: 0,
  max: 100,
  label: "",
};

export default RangeGauge;
