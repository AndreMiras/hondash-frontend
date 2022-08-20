import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import "./App.css";
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
      <header className="App-header">
        <Speedometer value={message.vss} />
        <RangeGauge value={message.ect} min={0} max={150} label={"ECT"} />
        <Tps value={message.tps} />
      </header>
    </div>
  );
}

export default App;
