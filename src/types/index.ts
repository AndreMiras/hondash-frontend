interface MessageData {
  gear: number;
  odo: number;
  vss: number;
}
interface Message {
  // to comply with the `JsonObject` interface and please the TypeScript compiler
  [key: string]: any;
  data: MessageData;
}

const defaultMessageData = {
  gear: 1,
  odo: 0,
  vss: 0,
};

const defaultMessage = {
  data: defaultMessageData,
};

export type { MessageData, Message };

export { defaultMessage, defaultMessageData };
