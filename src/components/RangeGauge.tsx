import { FC } from "react";
import GaugeChart from "react-gauge-chart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const chartStyle = {
  // https://github.com/Martin36/react-gauge-chart/issues/27
  height: 70,
};

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
    <Row>
      <GaugeChart
        percent={(value - min) / max}
        animate={false}
        formatTextValue={() => value.toFixed(1)}
        style={chartStyle}
      />
    </Row>
    <Row className="justify-content-end">
      <Col sm={3} className="fs-6">
        {min}
      </Col>
      <Col sm={5} className="fs-6 fw-bold">
        {label}
      </Col>
      <Col sm={3} className="fs-6">
        {max}
      </Col>
    </Row>
  </>
);

export default RangeGauge;
