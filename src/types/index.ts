interface MessageData {
  ect: number;
  gear: number;
  iat: number;
  odo: number;
  tps: number;
  vss: number;
}
interface Message {
  // to comply with the `JsonObject` interface and please the TypeScript compiler
  [key: string]: any;
  data: MessageData;
}

const defaultMessageData = {
  ect: 0,
  gear: 1,
  iat: 0,
  odo: 0,
  tps: 0,
  vss: 0,
};

const defaultMessage = {
  data: defaultMessageData,
};

export type { MessageData, Message };

export { defaultMessage, defaultMessageData };
