import { useState, useEffect, useCallback, useContext } from "react";
import { ActionsWebsocketContext } from "contexts";

export const WebsocketConnect = () => {
  const { setMessage: setMessageContext, setSocket: setSocketContext } =
    useContext(ActionsWebsocketContext);

  const [socket, setSocket] = useState<WebSocket | null>(null);

  const openWebSocket = useCallback(() => {
    const socket = new WebSocket("ws://localhost:8080");
    setSocket(socket);
    setSocketContext(socket);
  }, [setSocketContext]);

  const handleOpen = useCallback(() => {
    console.log("+++++++WebSocket connected+++++++");
  }, []);

  const handleMessage = useCallback(
    (e: MessageEvent<string>) => {
      try {
        const { data } = e;
        const dataPars = JSON.parse(data);
        setMessageContext(dataPars);
      } catch (e) {
        console.error(e);
      }
    },
    [setMessageContext]
  );

  const handleClose = useCallback(() => {
    console.log("-----------WebSocket closed-----------");
    setTimeout(openWebSocket, 3000);
  }, [openWebSocket]);

  useEffect(() => {
    openWebSocket();

    return () => {
      socket?.close();
      setSocket(null);
    };
  }, [openWebSocket]);

  useEffect(() => {
    socket?.addEventListener("open", handleOpen);
    socket?.addEventListener("message", handleMessage);
    socket?.addEventListener("close", handleClose);

    return () => {
      socket?.removeEventListener("open", handleOpen);
      socket?.removeEventListener("message", handleMessage);
      socket?.removeEventListener("close", handleClose);
    };
  }, [socket, handleOpen, handleMessage, handleClose]);

  return null;
};
