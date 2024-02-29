import React, { FC, useState } from "react";
import { WebsocketContext, ActionsWebsocketContext } from "contexts";
import { WSMessage } from "types";

type Props = {
  children: React.ReactNode;
};

export const WebsocketProvider: FC<Props> = ({ children }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<WSMessage | null>(null);

  return (
    <WebsocketContext.Provider value={{ socket, message }}>
      <ActionsWebsocketContext.Provider value={{ setSocket, setMessage }}>
        {children}
      </ActionsWebsocketContext.Provider>
    </WebsocketContext.Provider>
  );
};
