import { createContext } from "react";
import { TPlayerContext, TActionsPlayerContext } from "./types";

export const PlayerContext = createContext<TPlayerContext>({
  id: 0,
  coordinates: [0, 0],
  action: null,
});

export const ActionsPlayerContext = createContext<TActionsPlayerContext>({
  setId: () => null,
  setCoordinates: () => null,
  setAction: () => null,
});
