import { WSMessage } from "types";

export type TWebsocketContext = {
  socket: WebSocket | null;
  message: WSMessage | null;
};

export type TActionsWebsocketContext = {
  setSocket:
    | React.Dispatch<React.SetStateAction<TWebsocketContext["socket"]>>
    | (() => null);
  setMessage:
    | React.Dispatch<React.SetStateAction<TWebsocketContext["message"]>>
    | (() => null);
};
