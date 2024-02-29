import React from "react";
import { PlayerProvider, WebsocketProvider } from "./providers";

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <PlayerProvider>
      <WebsocketProvider>{children}</WebsocketProvider>
    </PlayerProvider>
  );
};
