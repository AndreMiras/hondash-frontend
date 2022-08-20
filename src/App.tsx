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

  const gaugesRow1 = [
    <RangeGauge value={message.ect} min={0} max={150} label="ECT" />,
    <RangeGauge value={message.iat} max={50} label="IAT" />,
    <RangeGauge value={message.tps} label="TPS" />,
  ];

  return (
    <div className="App">
      <Container className="App-header">
        <Row>
          <Speedometer value={message.vss} />
        </Row>
        <Row>
          {gaugesRow1.map((gauge) => (
            <Col xs={2}>{gauge}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
