interface MessageData {
  bat: number;
  cam: number;
  ect: number;
  eth: number;
  gear: number;
  iat: number;
  map: number;
  odo: number;
  o2: number;
  rpm: number;
  tps: number;
  vss: number;
}
interface Message {
  // to comply with the `JsonObject` interface and please the TypeScript compiler
  [key: string]: any;
  data: MessageData;
}

const defaultMessageData = {
  bat: 0,
  cam: 0,
  ect: 0,
  eth: 0,
  gear: 1,
  iat: 0,
  map: 0,
  odo: 0,
  o2: 0,
  rpm: 0,
  tps: 0,
  vss: 0,
};

const defaultMessage = {
  data: defaultMessageData,
};

export type { MessageData, Message };

export { defaultMessage, defaultMessageData };
