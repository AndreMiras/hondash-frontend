import { FC } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Row from "react-bootstrap/Row";

interface RangeGaugeProps {
  min?: number;
  max?: number;
  value: number;
  label?: string;
}

const RangeGauge: FC<RangeGaugeProps> = ({
  value,
  min = 0,
  max = 100,
  label = "",
}) => (
  <>
  <Row
    className="justify-content-center">
  <div
    style={{
      height: "200px",
      width: "250px",
    }}
  >
    <ReactSpeedometer
      segments={3}
      maxSegmentLabels={1}
      currentValueText={(Math.round(value*10)/10).toString()}
      value={value}
      minValue={min}
      maxValue={max}
    />
    </div>
    </Row>
    <Row className="justify-content-center">
    {label}
    </Row>
  </>
);

export default RangeGauge;
