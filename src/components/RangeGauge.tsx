import { FC, useState, useEffect, useRef } from "react";
import GaugeChart from "react-gauge-chart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface RangeGaugeProps {
  min?: number;
  max?: number;
  value: number;
  label?: string;
  colors?: string[];
}

const RangeGauge: FC<RangeGaugeProps> = ({
  value,
  min = 0,
  max = 100,
  label = "",
  colors = ["#00FF00", "#FF0000"],
}) => {
  /*
   * We have to dynamically reset the height on width change, refs:
   * https://github.com/Martin36/react-gauge-chart/issues/27
   */
  const [height, setHeight] = useState(0);
  const chartStyle = {
    height,
  };
  const ref = useRef<HTMLDivElement>(null);
  // listen to window resize events to update the chart height, refs gauge bug
  useEffect(() => {
    const onResize = () =>
      ref.current !== null && setHeight(ref.current.clientWidth / 2.2);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Row ref={ref}>
        <GaugeChart
          percent={Math.min((value - min) / max, 1)}
          animate={false}
          formatTextValue={() => value.toFixed(1)}
          style={chartStyle}
          colors={colors}
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
};

export default RangeGauge;
