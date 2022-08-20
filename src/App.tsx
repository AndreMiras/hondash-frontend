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
import Tps from "./components/Tps";
import { WEBSOCKET_URL } from "./utils/constants";

function App() {
  const { lastJsonMessage } = useWebSocket<Message>(WEBSOCKET_URL);
  const [message, setMessage] = useState<MessageData>(defaultMessageData);

  useEffect(() => {
    if (lastJsonMessage === null) return;
    setMessage(lastJsonMessage.data);
  }, [lastJsonMessage]);

  return (
    <div className="App">
      <Container className="App-header">
        <Row>
          <Speedometer value={message.vss} />
        </Row>
        <Row>
          <Col xs={2}>
            <RangeGauge value={message.ect} min={0} max={150} label={"ECT"} />
          </Col>
          <Col xs={2}>
            <Tps value={message.tps} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
