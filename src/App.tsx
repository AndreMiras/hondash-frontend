import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Message, MessageData, defaultMessageData } from "./types";
import Speedometer from "./components/Speedometer";
import RangeGauge from "./components/RangeGauge";
import { WEBSOCKET_URL } from "./utils/constants";

function App() {
  const { lastJsonMessage } = useWebSocket<Message>(WEBSOCKET_URL);
  const [message, setMessage] = useState<MessageData>(defaultMessageData);

  useEffect(() => {
    if (lastJsonMessage === null) return;
    setMessage(lastJsonMessage.data);
  }, [lastJsonMessage]);

  const gaugesPropsRow1 = [
    { value: message.ect, max: 150, label: "ECT" },
    { value: message.iat, max: 50, label: "IAT" },
    { value: message.o2, max: 30, label: "AFR" },
    { value: message.eth, label: "ETH" },
    { value: message.map, max: 3, label: "MAP" },
  ];
  const gaugesPropsRow2 = [
    { value: message.bat, max: 20, label: "Battery" },
    { value: message.cam, label: "CAM" },
    { value: message.tps, label: "TPS" },
    { value: 0, label: "GAUGE1" },
    { value: 0, label: "GAUGE2" },
  ];
  const gaugesPropsRows = [gaugesPropsRow1, gaugesPropsRow2];

  return (
    <div className="App">
      <Container className="App-header">
        <Row>
          <Speedometer value={message.vss} />
        </Row>
        {gaugesPropsRows.map((gaugesPropsRow) => (
          <Row className="mt-4">
            {gaugesPropsRow.map((gaugeProps) => (
              <Col xs={2} key={gaugeProps.label}>
                <RangeGauge {...gaugeProps} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default App;
