import { createContext } from "react";
import { TWebsocketContext, TActionsWebsocketContext } from "./types";

export const WebsocketContext = createContext<TWebsocketContext>({
  socket: null,
  message: null,
});

export const ActionsWebsocketContext = createContext<TActionsWebsocketContext>({
  setSocket: () => null,
  setMessage: () => null,
});
