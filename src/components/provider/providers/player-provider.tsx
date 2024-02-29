import React, { useState } from "react";
import { PlayerContext, ActionsPlayerContext, TPlayerContext } from "contexts";

type PlayerProviderProps = {
  children: React.ReactNode;
};

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [id, setId] = useState<TPlayerContext["id"]>(0);
  const [coordinates, setCoordinates] = useState<TPlayerContext["coordinates"]>(
    [0, 0]
  );
  const [action, setAction] = useState<TPlayerContext["action"]>(null);

  return (
    <PlayerContext.Provider value={{ coordinates, action, id }}>
      <ActionsPlayerContext.Provider
        value={{ setCoordinates, setAction, setId }}
      >
        {children}
      </ActionsPlayerContext.Provider>
    </PlayerContext.Provider>
  );
};
